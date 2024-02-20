import { types } from "./types";

export function addUser (user) {
    return {
       type: 'ADD_USER',
       payload: user
    }
}


export function changeTitleAction(action) {
    return {
        type: types.CHANGE_TITLE
    }
}

export function changeInputAction(value) {
    return {
        type: types.INPUT_VALUE,
        payload: value

    }
}

export function addUserAction(name) {
    return {
        type: types.ADD_USER,
        payload: name

    }
}

export function clearUserAction() {
    return {
        type: types.CLEAR_USER

    }
}

export function deleteAllAction() {
    return {
        type: types.DELETE_ALL

    }
}

