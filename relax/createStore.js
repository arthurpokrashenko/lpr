export default function createStore(transformer, initialState) {
  let currentTransformer = transformer;
  let currentState = initialState;
  let subscribeCallback = null;

  function getState() {
    return currentState;
  }

  function dispatch(action) {
    currentState = transformer(currentState, action);
    subscribeCallback && subscribeCallback(currentState);
  }

  function subscribe(callback) {
    subscribeCallback = callback;
  }
  
  dispatch({ type: 'INIT' });

  return {
    getState,
    dispatch,
    subscribe
  }
}

/*
function bumblebee(state, action) {
	switch (action.type) {
  	case 'INIT':
    	console.log('INIT', state.count);
    	return state;
    case 'INCREMENT':
    	return Object.assign({}, state, {count: state.count + 1});
  	default:
    	return state;
  }
}

function increment() {
	store.dispatch({ type: 'INCREMENT' });
}

const store = createStore(bumblebee, { count: 0 });
store.subscribe((state) => {
	console.log(state);
});
*/