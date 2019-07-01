import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../constants/user.constants'

import {isAuthenticated, me} from "../services/auth";

const initialState = {

    user: (isAuthenticated()) ? me() : {},
    isLoggedIn: false,
    error: "",
};

export default function User(state = initialState, action) {

    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoggedIn: true,
                error:""
            };

        case LOGIN_SUCCESS:
            return {
                user: me(),
                isLoggedIn: false,
            };

        case LOGIN_FAILURE:
            return {
                    ...state,
                    isLoggedIn: false,
                    error:  action.payload
            };
        case LOGOUT:
            return {
                user: {},
                isLoggedIn: false,
            };

        default:
            return state;
    }
}