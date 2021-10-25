import Vuex from "vuex";

export function createStore() {
    return new Vuex.Store({
        state: {
            isLoggedIn: false,
        },
        mutations: {
            setLoggedIn(state, payload) {
                state.isLoggedIn = payload
            }
        }
    })
}