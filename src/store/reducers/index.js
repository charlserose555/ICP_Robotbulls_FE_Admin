import { combineReducers } from 'redux';

import authReducer from './auth';
import menuReducer from './menu';
import alertReducer from './alert';
import loadReducer from './load';

const reducer = combineReducers({
    auth: authReducer,
    menu: menuReducer,
    alert: alertReducer,
    load: loadReducer
});

export default reducer;
