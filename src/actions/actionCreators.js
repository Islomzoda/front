import { FETCH_MEMOS_REQUEST, FETCH_MEMOS_SUCCESS, FETCH_MEMOS_FAILURE, REMOVE_MEMO_CONFIRM, REMOVE_MEMO_CANCEL, REMOVE_MEMO_REQUEST, REMOVE_MEMO_SUCCESS, REMOVE_MEMO_FAILURE, EDIT_MEMO_FIELD_CHANGE, EDIT_MEMO_REQUEST, EDIT_MEMO_SUCCESS, EDIT_MEMO_FAILURE, EDIT_MEMO_CANCEL, EDIT_MEMO_EXISTING, DESCRIPTION_MEMO_GET } from "./actionTypes";
const apiUrl = 'http://localhost:9999/api/memos/'
// не совсем правильный action creator
export async function getMemos(dispatch) {
    dispatch(fetchMemosRequest());
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error();
        }
        const memos = await response.json();
        dispatch(fetchMemosSuccess(memos));
    } catch (e) {
        dispatch(fetchMemosFailure(e));
        throw e; // перевыкидываем ту же самую ошибку
    }
}

// нужны для удобного создания action'ов
export function fetchMemosRequest() {
    return {
        type: FETCH_MEMOS_REQUEST, // обязательно должен быть type
        payload: {}, // не обязательно
    };
}

export function fetchMemosSuccess(items) {
    return {
        type: FETCH_MEMOS_SUCCESS, // обязательно должен быть type
        payload: {
            items
        },
    };
}

export function fetchMemosFailure(error) {
    return {
        type: FETCH_MEMOS_FAILURE, // обязательно должен быть type
        payload: {
            error
        },
    };
}

export async function removeMemoById(dispatch, id) {
    dispatch(removeMemoRequest());
    try {
        const response = await fetch(`${apiUrl}${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error();
        }
        dispatch(removeMemoSuccess());
    } catch (e) {
        dispatch(removeMemoFailure(e));
        throw e; // перевыкидываем ту же самую ошибку
    }
    // return Promise.resolve(undefined)
}

export async function showMemoDescriptionById(id){
    return {
        category: DESCRIPTION_MEMO_GET,
        payload: {
            id
        }
    }
}
export function getMemoDescription(id){
    return{
        type: DESCRIPTION_MEMO_GET,
        payload:{id},
    }
}

export function removeMemoConfirm(id) {
    return {
        type: REMOVE_MEMO_CONFIRM,
        payload: { id },
    };
}

export function removeMemoCancel() {
    return {
        type: REMOVE_MEMO_CANCEL,
        payload: {},
    };
}

export function removeMemoRequest() {
    return {
        type: REMOVE_MEMO_REQUEST, // обязательно должен быть type
        payload: {}, // не обязательно
    };
}

export function removeMemoSuccess() {
    return {
        type: REMOVE_MEMO_SUCCESS, // обязательно должен быть type
        payload: {},
    };
}

export function removeMemoFailure(error) {
    return {
        type: REMOVE_MEMO_FAILURE, // обязательно должен быть type
        payload: {
            error
        },
    };
}

export function editMemoChangeField(name, value) {
    return {
        type: EDIT_MEMO_FIELD_CHANGE,
        payload: {
            name, value,
        }
    };
}

export function editMemoExisting(item) {
    return {
        type: EDIT_MEMO_EXISTING,
        payload: {
            item
        }
    };
}

export function editMemoCancel() {
    return {
        type: EDIT_MEMO_CANCEL,
        payload: {},
    };
}

export async function editMemo(dispatch, item) {
    dispatch(editMemoRequest());
    try {
        // TODO: будем изучать axios -> axios.post(url, body) -> headers, JSON.stringify()
        const response = await fetch(`${apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });
        if (!response.ok) {
            throw new Error();
        }
        dispatch(editMemoSuccess());
    } catch (e) {
        dispatch(editMemoFailure(e));
        throw e; // перевыкидываем ту же самую ошибку
    }
}

export function editMemoRequest() {
    return {
        type: EDIT_MEMO_REQUEST, // обязательно должен быть type
        payload: {}, // не обязательно
    };
}

export function editMemoSuccess() {
    return {
        type: EDIT_MEMO_SUCCESS, // обязательно должен быть type
        payload: {},
    };
}

export function editMemoFailure(error) {
    return {
        type: EDIT_MEMO_FAILURE, // обязательно должен быть type
        payload: {
            error
        },
    };
}