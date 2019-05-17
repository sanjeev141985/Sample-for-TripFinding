import { 
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE
} from '../actions/types';
import EmployeeCreate from '../component/EmployeeCreate';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
};


export default (state = INITIAL_STATE, action) => {
    console.log(action.payload)
    switch (action.type) {
        case EMPLOYEE_UPDATE: 
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};











