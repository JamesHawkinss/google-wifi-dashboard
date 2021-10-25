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
            }
        },
        actions: {
            async updateData(context) {
                console.log('updating');
                await context.dispatch('setGroup');
                await Promise.all([
                    context.dispatch('setDevices'),
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
                console.log(devices);
                context.commit('setDevices', devices);
            },
            async getSpeedTestResults(context) {
                const results = (await getGoogleWifiApi().getGroupSpeedTestResults(context.state.group.id)).speedTestResults[0];
                context.commit('setSpeedTestResults', results);
            }
        }
    })
}