import {Action, ActionCreator, AnyAction} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../reducer";
import {Reducer} from "react";
import {useSelector} from "react-redux";

export const SET_TOKEN = 'SET_TOKEN'

export type SetTokenAction = {
    type: typeof SET_TOKEN,
    token: string;
}

export type TokenState = {
    token: string;
}

export const setToken: ActionCreator<SetTokenAction> = (token: string) => ({
    type: SET_TOKEN,
    token,
})

export const saveToken = (): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch, getState) =>{
    const token = localStorage.getItem('token')
    if (!token || token ==='undefined') {
        dispatch(setToken(window.__token__))
        localStorage.setItem('token', window.__token__)
    } else
        dispatch(setToken(token));

}

export const tokenReducer: Reducer<any, SetTokenAction> = (state, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return action.token
        default:
            return state
    }
}

