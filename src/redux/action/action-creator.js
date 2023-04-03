import { baseurl } from "../../constants/urlConstant";
import axios from "axios";
import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    GET_ALLPROFILE_REQUEST,
    GET_ALLPROFILE_SUCCESS,
    GET_ALLPROFILE_FAILURE,
    GET_MYPROFILE_REQUEST,
    GET_MYPROFILE_SUCCESS,
    GET_MYPROFILE_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE
} from "./action-type"


export function loginUser(method, body) {
    return async dispatch => {
        dispatch({ type: LOGIN_REQUEST });
        try {
            let mainUrl = baseurl + method
            var response = await axios({
                method: 'post',
                url: mainUrl,
                headers: { "Content-type": "application/json" },
                data: body
            })

            response = response.data;

            if (response !== undefined) {
                dispatch({ type: LOGIN_SUCCESS, payload: response });
                return { loginSuccess: true, data: response };
            } else {
                dispatch({ type: LOGIN_FAILURE });
                return { loginSuccess: false, data: response };
            }

        } catch (e) {
            if (e.response) {
                const err = e;
                if (err.response) {
                    if (err.response.status == 400) {
                        dispatch({ type: LOGIN_FAILURE });
                        return { loginSuccess: false, data: "User not found" };
                    }
                }
            }
        }
    }

}




export function logOut(action) {
    return async dispatch => {
        dispatch({ type: LOGOUT_REQUEST });
        try {
            if (action) {
                dispatch({ type: LOGOUT_SUCCESS });
                return { logout: true };
            } else {
                dispatch({ type: LOGOUT_FAILURE });
                return { logout: false };
            }
        } catch (e) {
            dispatch({ type: LOGOUT_FAILURE });
            return { logout: false };
        }
    }
}

export function getMyProfile(method) {
    return async dispatch => {
        dispatch({ type: GET_MYPROFILE_REQUEST });
        try {
            let mainUrl = baseurl + method
            console.log("fgfgfggfgfgfghfghfghfhfghfhjf+====>", mainUrl);
            var response = await axios({
                method: 'get',
                url: mainUrl,
                headers: { "Content-type": "application/json" },
            })

            response = response.data;

            // console.log("check login response data==>", response.token);

            if (response !== undefined) {
                dispatch({ type: GET_MYPROFILE_SUCCESS, payload: response });
                return { myProfileSuccess: true, data: response };
            } else {
                dispatch({ type: GET_MYPROFILE_FAILURE });
                return { myProfileSuccess: false, data: response };
            }

        } catch (e) {
            console.log("myProfile redux log ==>", e);
            if (e.response) {
                const err = e;
                if (err.response) {
                    if (err.response.status == 400) {
                        dispatch({ type: GET_MYPROFILE_FAILURE });
                        return { myProfileSuccess: false, data: "Note: Only defined users succeed registration" };
                    }
                }
            }
        }
    }

}
