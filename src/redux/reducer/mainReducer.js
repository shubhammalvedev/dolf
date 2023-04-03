import {
    GET_ALLPROFILE_FAILURE,
    GET_ALLPROFILE_REQUEST,
    GET_ALLPROFILE_SUCCESS,
    GET_MYPROFILE_FAILURE,
    GET_MYPROFILE_REQUEST,
    GET_MYPROFILE_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS
} from "../action/action-type"

const initialState = {
    userData: "",
    allProfilesData: "",
    myProfileData: ""
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_REQUEST:
            return { ...state, isLoading: true }
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, userData: action.payload, }
        case LOGIN_FAILURE:
            return { ...state, isLoading: false }

        case SIGNUP_REQUEST:
            return { ...state, isLoading: true }
        case SIGNUP_SUCCESS:
            return { ...state, isLoading: false, userData: action.payload, }
        case SIGNUP_FAILURE:
            return { ...state, isLoading: false }

        case LOGOUT_REQUEST:
            return { ...state }
        case LOGOUT_SUCCESS:
            return { ...state, userData: "" }
        case LOGOUT_FAILURE:
            return { ...state }

        case GET_ALLPROFILE_REQUEST:
            return { ...state, isLoading: true }
        case GET_ALLPROFILE_SUCCESS:
            return { ...state, isLoading: false, allProfilesData: action.payload, }
        case GET_ALLPROFILE_FAILURE:
            return { ...state, isLoading: false }

        case GET_MYPROFILE_REQUEST:
            return { ...state, isLoading: true }
        case GET_MYPROFILE_SUCCESS:
            return { ...state, isLoading: false, myProfileData: action.payload, }
        case GET_MYPROFILE_FAILURE:
            return { ...state, isLoading: false }

        default:
            return state
    }
}