/**
 * 2017-12-18 Jifeng Cheng
 */
export default {
  namespace: 'article',

  state: {
    allArticle: [
      {
        key: 'index[0]',
        header: 'JavaScript数组的思考',
        description: '虽然官网的TodoList的例子写的很详细，但是都是一步到位，就是给你一个action，好家伙，全部都写好了，给你一个reducer，所有功能也是都写好了，但是我们这些小白怎么可能一下就消化那么多，那我们就来拆解，一步一步实现，试想我们开发程序也是一个一个功能区域实现，那么我们第一步就是先把整体结构构思出来，然后先把头部做出来，这样看是不是简单很多！',
      },
      {
        key: 'index[2]',
        header: 'JavaScript数组的思考',
        description: '虽然官网的TodoList的例子写的很详细，但是都是一步到位，就是给你一个action，好家伙，全部都写好了，给你一个reducer，所有功能也是都写好了，但是我们这些小白怎么可能一下就消化那么多，那我们就来拆解，一步一步实现，试想我们开发程序也是一个一个功能区域实现，那么我们第一步就是先把整体结构构思出来，然后先把头部做出来，这样看是不是简单很多！',
      },
      {
        key: 'index[3]',
        header: 'JavaScript数组的思考',
        description: '虽然官网的TodoList的例子写的很详细，但是都是一步到位，就是给你一个action，好家伙，全部都写好了，给你一个reducer，所有功能也是都写好了，但是我们这些小白怎么可能一下就消化那么多，那我们就来拆解，一步一步实现，试想我们开发程序也是一个一个功能区域实现，那么我们第一步就是先把整体结构构思出来，然后先把头部做出来，这样看是不是简单很多！',
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
