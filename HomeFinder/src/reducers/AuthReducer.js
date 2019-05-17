import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    USER_LOGIN_SUCCESS,
    LOGIN_USER_FAILED ,
    LOGIN_INITIATED
} from '../actions/types'

const INITIAL_STATE = { 
    email: '', 
    password: '', 
    user: null,
    errorMsg: '',
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    //console.log(action)
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case USER_LOGIN_SUCCESS:
            return { 
                ...state, 
                user: action.payload, 
                errorMsg: '', 
                loading: false, 
                email: '', 
                password: '' 
            }
        case LOGIN_USER_FAILED:
            return { 
                ...state, 
                errorMsg: action.payload, 
                loading: false, 
                password: '' 
            }
        case LOGIN_INITIATED: 
            return { ...state, loading: true, errorMsg: '' }
        default:
            return state
    }
}