import profileReducer, { addPostActionCreator } from "./profileReducer";

test('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("sergenius.com")

    let state = {
        posts: [
          {id: 1, message: "Hi, how are you?", likeCount: 10},
          {id: 2, message: "It's my first post", likeCount: 15},
          {id: 5, message: "Im cool, man", likeCount: 2},
        ],
    }

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.posts.length).toBe(5)
});
  