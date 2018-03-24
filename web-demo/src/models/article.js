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
      // const article = yield select(state => state.article.Article.data[payload]);
      // yield console.log('aticle_________', article);
      // console.log('qqqqqqqq', aaa);
      // const article = aaa.data[payload];
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
      console.log('action>>>>>>', action);
      return {
        ...state,
        keys: action.payload,
      };
    },
  },
};
