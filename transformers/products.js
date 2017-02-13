export default function products(state, action) {
	switch (action.type) {
  	case 'INIT':
    	console.log('INIT', state);
    	return state;
    case 'FAVORITED':
    	return Object.assign({}, state, {count: state.count + 1});
  	default:
    	return state;
  }
}