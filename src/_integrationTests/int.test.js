import moxios from 'moxios';

import store from '../store';
import { setupComp, findComponent, checkPropsHelper, testStore } from '../utils';
import { getPosts } from '../actions/postActions';

describe('GetPosts action', () => {
    beforeEach(()=>{
        moxios.install();
    })

    afterEach(()=>{
        moxios.uninstall();
    })

    it('should update store correctly', () => {
        const expectedState = [
            {title: "Test title1", body: "Test body 1"},
            {title: "Test title 2", body: "Test body 2"},
            {title: "Test title 3", body: "Test body 3"},
        ]

        const store = testStore();

        moxios.wait(()=>{
            const req = moxios.requests.mostRecent();
            req.respondWith({
                status: 200,
                response: expectedState,
            })
        })

        return store.dispatch(getPosts())
        .then(()=>{
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState)
        });
    })
})
