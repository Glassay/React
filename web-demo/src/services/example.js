/**
 * 2018-1-12 Jifeng Cheng
 */

import request from '../utils/request';

export function query() {
  return request('http://10.0.0.48:8080/adminCreate', {
    method: 'post',
    body: {
      name: 'wang',
      password: '123456',
    },
  });
}
