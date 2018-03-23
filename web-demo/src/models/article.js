/**
 * 2017-12-18 Jifeng Cheng
 */

import { routerRedux } from 'dva/router';
import { getArticle } from '../services/article';

export default {
  namespace: 'article',

  state: {
    Article: [],
    singleArticle: [],
  },

  effects: {
    *showArticle({ payload }, { put, call, select }) {
      const response = yield call(getArticle);
      console.log('rsponse>>>>>>', response);
      yield put({
        type: 'getArticles',
        payload: response,
      });
      console.log('Article>>>>>>', response);
      const aaa = yield select(state => state.article.Article);
      console.log('AAA', aaa);
    },
    *readMore({ payload }, { put, select }) {
      const article = yield select(state => state.article.Article.data[payload]);

      // console.log('qqqqqqqq', aaa);
      // const article = aaa.data[payload];
      console.log('article>>>>>>', article);
      yield put({
        type: 'getArticle',
        payload: article,
      });
      yield put(routerRedux.push('main/article'));
    },
  },

  reducers: {
    getArticles(state, action) {
      console.log('Action:', action);
      return {
        ...state,
        Article: action.payload,
      };
    },
    getArticle(state, action) {
      return {
        ...state,
        singleArticle: action.payload,
      };
    },
  },
};
