export default {
  namespace: 'menu',

  state: {
    visible: '',
  },

  effects: {
    *showFixedMenu({ payload }, { put }) {
      yield put({
        type: 'show',
        payload: true,
      });
    },
    *hideFixedMenu({ payload }, { put }) {
      yield put({
        type: 'hide',
        payload: false,
      });
    },
  },

  reducers: {
    show(state, action) {
      return {
        ...state,
        visible: action.payload,
      };
    },
    hide(state, action) {
      return {
        ...state,
        visible: action.payload,
      };
    },
  },
};
