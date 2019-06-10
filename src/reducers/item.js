const defaultState = {items: [], itemTotal: 0}

export default function item(state=defaultState, action) {
  switch(action.type) {
    case 'ADD_ITEM':
      if (state.items.filter(item => item.id === action.item.item.id).length > 0) 
        return state;

      return { 
        items: state.items.concat(action.item.item),
        itemTotal: ++state.itemTotal
      }
    case 'REMOVE_ITEM':
    return { 
          items: state.items.filter(item => item.id !== action.id),
          itemTotal : --state.itemTotal
        }
    default:
      return state;
  }
}