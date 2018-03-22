/**
 * 2017-12-18 Jifeng Cheng
 */

import { getArticle } from '../services/article';

export default {
  namespace: 'article',

  state: {
    Article: [],
  },

  effects: {
    *showArticle({ payload }, { put, call }) {
      const response = yield call(getArticle);
      console.log('rsponse>>>>>>', response);
      yield put({
        type: 'getArticles',
        payload: response,
      });
    },
  },

  reducers: {
    getArticles(state, action) {
      return {
        ...state,
        Article: action.payload,
      };
    },
  },
};
