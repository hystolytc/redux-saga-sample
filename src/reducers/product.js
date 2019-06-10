const defaultState = {items: []} 

export default function product(state=defaultState, action) {
  switch(action.type) {
    case 'STORE_PRODUCT':
      return { 
        ...state,
        items: state.items.concat(action.data)
      };
    default:
      return state;
  }
}