/**
 * 2017-12-18 Jifeng Cheng
 */

import { routerRedux } from 'dva/router';
import { getArticle } from '../services/article';

export default {
  namespace: 'article',

  state: {
    Article: [],
    keys: null,
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
    *readMore({ payload }, { put }) {
      yield put({
        type: 'readArticle',
        payload: payload, // eslint-disable-line
      });
      yield put(routerRedux.push('/article'));
    },
  },

  reducers: {
    getArticles(state, action) {
      return {
        ...state,
        Article: action.payload,
      };
    },
    readArticle(state, action) {
      return {
        ...state,
        keys: action.payload,
      };
    },
  },
};
