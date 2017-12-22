import Axios from 'util/axios';

const menu = {
  state: {
    menuList: []
  },
  mutations: {
    CHANGE_MENULIST: (state, list) => {
      state.menuList = list;
    }
  },
  actions: {
    fetch({ commit }, param) {
      const params = {
        ...param,
        successFn(data) {
          if (data.list && data.list.length) {
            commit('CHANGE_MENULIST', data.list);
          }
        }
      };
      console.log(params);
      Axios.fetch(params);
    }
  }
};

export default menu;
