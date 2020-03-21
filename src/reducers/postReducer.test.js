import * as TYPES from '../actions/types';

import postReducer from './postReducer';

describe('Post Reducer', () => {
  it('should return empty array as default', () => {
    const checkReducer = postReducer(undefined, {});
    expect(checkReducer).toEqual([]);
  });

  it('should return data post when GET_POST', () => {
    const dummyPosts = [
      {title: "Test title", desc: 'Test desc'},
      {title: "Test title", desc: 'Test desc'},
      {title: "Test title", desc: 'Test desc'},
      {title: "Test title", desc: 'Test desc'},
    ];

    const checkReducer = postReducer(undefined, {
      type: TYPES.GET_POSTS,
      payload: dummyPosts 
    });

    expect(checkReducer).toEqual(dummyPosts);
    
  })
})
