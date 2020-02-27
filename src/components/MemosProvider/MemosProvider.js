import React, { useReducer } from 'react'
import MemosContext from '../../contexts/MemosContext';
import { FETCH_MEMOS_REQUEST, FETCH_MEMOS_SUCCESS, FETCH_MEMOS_FAILURE, REMOVE_MEMO_CONFIRM, REMOVE_MEMO_CANCEL, REMOVE_MEMO_REQUEST, REMOVE_MEMO_SUCCESS, REMOVE_MEMO_FAILURE, EDIT_MEMO_FIELD_CHANGE, EDIT_MEMO_REQUEST, EDIT_MEMO_SUCCESS, EDIT_MEMO_FAILURE, EDIT_MEMO_CANCEL, EDIT_MEMO_EXISTING, DESCRIPTION_MEMO_GET } from '../../actions/actionTypes';

const initialState = {
    memos: {
        items: [],
        loading: false,
        error: null,
    },
    removedMemo: {
        id: 0, // ничего пока не находится в подтверждении на удаление
        loading: false,
        error: null,
    },
    editedMemo: {
        item: {
            id: 0,
            type: 'car',
            price: 0,
            descriptio:'',
            totalprice:0,
        },
        loading: false,
        error: null,
    },
    memoExpended:{
        item:{},
        id:0,
        loading: false,
        error: null,
    },
    
};

function memosReducer(prevMemos, action) {
    switch (action.type) {
        case FETCH_MEMOS_REQUEST:
            return { ...prevMemos, loading: true, error: null };
        case FETCH_MEMOS_SUCCESS:
            return { items: action.payload.items, loading: false, error: null };
        case FETCH_MEMOS_FAILURE:
            return { ...prevMemos, loading: false, error: action.payload.error };
        default:
            return prevMemos;
    }
}

// pure function
function memoRemoveReducer(prevMemo, action) {
    switch (action.type) {
        case REMOVE_MEMO_CONFIRM:
            return { id: action.payload.id, loading: false, error: null };
        case REMOVE_MEMO_CANCEL:
            return { id: 0, loading: false, error: null };
        case REMOVE_MEMO_REQUEST:
            return { ...prevMemo, loading: true, error: null };
        case REMOVE_MEMO_SUCCESS:
            // нет, в reducer'ах не должно быть никаких внешних взаимодействий
            return { id: 0, loading: false, error: null };
        case REMOVE_MEMO_FAILURE:
            return { ...prevMemo, loading: false, error: action.payload.error };
        default:
            return prevMemo;
    }
}

function memoEditReducer(prevMemo, action) {
    switch (action.type) {
        case EDIT_MEMO_FIELD_CHANGE:
            // [action.payload.name] = action.payload.value
            // action.payload.name = type, action.payload.value = 'image', то:
            // type: value
            return { ...prevMemo, item: { ...prevMemo.item, [action.payload.name]: action.payload.value } };
        case EDIT_MEMO_EXISTING:
            return { item: { ...action.payload.item }, loading: false, error: null };
        case EDIT_MEMO_CANCEL:
            return { item: { id: 0, type: '', totalprice:0,  price: 0, discription:''}, loading: false, error: null };
        case EDIT_MEMO_REQUEST:
            return { ...prevMemo, loading: true, error: null };
        case EDIT_MEMO_SUCCESS:
            // нет, в reducer'ах не должно быть никаких внешних взаимодействий
            return { item: { id: 0, type: '',totalprice:0,price: 0, discription:''}, loading: false, error: null };
        case EDIT_MEMO_FAILURE:
            return { ...prevMemo, loading: false, error: action.payload.error };
        default:
            return prevMemo;
    }
}

// pure function (чистая функция): input -> f -> output (никуда снаружи не лазит)
function reducer(prevState, action) {
    switch (action.type) {
        case FETCH_MEMOS_REQUEST:
        case FETCH_MEMOS_SUCCESS:
        case FETCH_MEMOS_FAILURE:
            return { ...prevState, memos: memosReducer(prevState.memos, action) };
        case REMOVE_MEMO_CONFIRM:
        case REMOVE_MEMO_CANCEL:
        case REMOVE_MEMO_REQUEST:
        case REMOVE_MEMO_SUCCESS:
        case REMOVE_MEMO_FAILURE:
            return { ...prevState, removedMemo: memoRemoveReducer(prevState.removedMemo, action) };
        case DESCRIPTION_MEMO_GET:
            return { ...prevState, memos:{...prevState.memos, items: prevState.memos.items.map(m => m.id === action.payload.id ? {...m, open: !m.open} : {...m, open: false})}}
        case EDIT_MEMO_FIELD_CHANGE:
        case EDIT_MEMO_EXISTING:
        case EDIT_MEMO_CANCEL:
        case EDIT_MEMO_REQUEST:
        case EDIT_MEMO_SUCCESS:
        case EDIT_MEMO_FAILURE:
            return { ...prevState, editedMemo: memoEditReducer(prevState.editedMemo, prevState.memoExpended, action) };
        default:
            return prevState;
    }
}

export default function MemosProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState); // <- будет в первый раз в prevState
    // как вариант, если вы не используете redux
    // getMemos
    // removeMemo
    // saveMemo

    // авторы решили, что всё будет в props: value={{state: state, dispatch: dispatch}}
    // redux style
    return (
        <MemosContext.Provider value={{ state, dispatch }}>
            {props.children} {/* отображаем вложенные компоненты */}
        </MemosContext.Provider>
    )
}
