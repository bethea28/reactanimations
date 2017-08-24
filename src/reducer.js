

const defaultState = {
 test: '',
 list: []
}


const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'CHANGE':
      return Object.assign({}, state, {test: action.data})
    case 'SUBMIT':
      return Object.assign({}, state, {list: state.list.concat(state.test)})
    default:
      return defaultState
  }
}

export default reducer