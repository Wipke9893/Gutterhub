import { createStore as _createStore } from 'vuex';


export function createStore(currentToken, currentUser) {
  let store = _createStore({
    state: {
      token: currentToken || '',
      user: currentUser || {},

    },
    mutations: {

    },


  });
  return store;
}
