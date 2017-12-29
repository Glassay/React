/**
 * 2017-12-18 Jifeng Cheng
 */
export default {
  namespace: 'article',

  state: {
    allArticle: [
      {
        key: 'index[0]',
        header: '1',
        description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.',
      },
      {
        key: 'index[2]',
        header: '2',
        description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.',
      },
      {
        key: 'index[3]',
        header: '3',
        description: 'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.',
      },
    ],
  },

  effects: {
    *showArticle({ payload }, { put }) {
      yield put({
        type: 'Articles',
        payload: this.state.allArticle,
      });
    },
  },

  reducers: {
    Articles(state, action) {
      return {
        ...state,
        allArticle: action.payload,
      };
    },
  },
};
