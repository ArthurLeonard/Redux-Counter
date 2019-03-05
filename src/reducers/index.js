import { INCREMENT, DECREMENT } from '../actions';

let initialState = {
  count: 2
}
let count = 2;

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = count, action) => {
  // let count = initialState;
  console.log("in reducer")
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
    //console.log("count", count)
    return  ++count;
  
    case DECREMENT:
    // Fill in the body of this case
    // count = 11;
    return --count;
    default:
      return state;
  }
};
