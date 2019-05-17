import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer'
import EmployeeFormReducer from './EmployeeFormReducer';
import employeesList from './EmployeeListReducer'

export default combineReducers({ 
    Auth: AuthReducer,
    EmpForm: EmployeeFormReducer,
    empList: employeesList
 });