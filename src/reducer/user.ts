const INITIAL_STATE = {
  hasLogin: null
}

export const SET_LOGIN = "SET_LOGIN"
export const SET_NOT_LOGIN = "SET_NOT_LOGIN"

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        hasLogin: true
      }
    case SET_NOT_LOGIN:
      return {
        ...state,
        hasLogin: false
      }
    default: {
      return state
    }
  }
}