import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMAIL_CHANGED,  
    PASSWORD_CHANGED,
    USER_LOGIN_SUCCESS,
    LOGIN_USER_FAILED,
    LOGIN_INITIATED
} from './types'
import { tsConstructSignatureDeclaration } from '@babel/types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginRequest = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type:  LOGIN_INITIATED})
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => loginUserFailed(dispatch, error));
          })
          
    }
}

const loginUserFailed = (dispatch, error) => {
    dispatch( {
        type: LOGIN_USER_FAILED,
        payload: error
    });

}

const loginUserSuccess = (dispatch, user) => {
    dispatch({ 
        type: USER_LOGIN_SUCCESS, 
        payload: user 
    });

    Actions.main();

}