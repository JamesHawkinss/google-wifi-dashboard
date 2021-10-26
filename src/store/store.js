import Vuex from "vuex";
import { getGoogleWifiApi } from "@/lib/googleWifiApi.js"

export function createStore() {
    return new Vuex.Store({
        state: {
            isLoggedIn: false,
            refreshToken: '',
            group: {},
            wifiDevices: [],
            devices: [],
            speedTestResults: {},
            realtimeMetrics: {},
            insightCards: [],
            privateSsid: 'loading'
        },
        mutations: {
            setLoggedIn(state, payload) {
                state.isLoggedIn = payload
            },
            setRefreshToken(state, payload) {
                state.refreshToken = payload
            },
            setGroup(state, payload) {
                state.group = payload
            },
            setPrivateSsid(state, payload) {
                state.privateSsid = payload
            },
            setWifiDevices(state, payload) {
                state.wifiDevices = payload
            },
            setDevices(state, payload) {
                state.devices = payload
            },
            setSpeedTestResults(state, payload) {
                state.speedTestResults = payload
            },
            setRealtimeMetrics(state, payload) {
                state.realtimeMetrics = payload
            },
            setInsightCards(state, payload) {
                state.insightCards = payload
            }
        },
        actions: {
            async updateData(context) {
                await context.dispatch('setGroup');
                await Promise.all([
                    context.dispatch('setDevices'),
                    context.dispatch('setRealtimeMetrics'),
                    context.dispatch('getSpeedTestResults')
                ]);
            },
            async setGroup(context) {
                const googleWifiApi = getGoogleWifiApi();
                const group = (await googleWifiApi.getGroups()).groups[0];
                
                context.commit('setGroup', group);
                context.commit('setPrivateSsid', group.groupSettings.wlanSettings.privateSsid);
                context.commit('setWifiDevices', group.accessPoints)
            },
            async setDevices(context) {
                const devices = (await getGoogleWifiApi().getGroupDevices(context.state.group.id)).stations;
                context.commit('setDevices', devices);
            },
            async getSpeedTestResults(context) {
                const results = (await getGoogleWifiApi().getGroupSpeedTestResults(context.state.group.id)).speedTestResults[0];
                context.commit('setSpeedTestResults', results);
            },
            async setRealtimeMetrics(context) {
                const metrics = (await getGoogleWifiApi().getGroupRealtimeMetrics(context.state.group.id));
                context.commit('setRealtimeMetrics', metrics);
            },
            async startRealtimeMetrics(context) {
                setInterval(async () => {
                    await context.dispatch('setRealtimeMetrics');
                }, 5000)
            },
            async setInsightCards(context) {
                const cards = (await getGoogleWifiApi().getGroupInsightCards(context.state.group.id)).insightsCards;
                context.commit('setInsightCards', cards);
            }
        }
    })
}