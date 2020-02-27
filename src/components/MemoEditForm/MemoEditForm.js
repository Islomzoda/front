import React, { useContext } from 'react'
import MemosContext from '../../contexts/MemosContext'
import { editMemoChangeField, editMemo, getMemos, editMemoCancel } from '../../actions/actionCreators';
import Loader from '../Loader/Loader';

export default function MemoEditForm() {
    const { state: { editedMemo }, dispatch } = useContext(MemosContext);

editedMemo.item.totalprice +=  parseInt(editedMemo.item.price, 10)

    const handleSubmit = async evt => {
        evt.preventDefault();
        try {
            await editMemo(dispatch, editedMemo.item);
            await getMemos(dispatch);
        } catch (e) {
            // TODO: log error
        }
    };
    const handleCancel = () => {
        dispatch(editMemoCancel());
    };
    const handleChange = evt => {
        const { target: { name, value } } = evt;
        console.log(name, value);
        dispatch(editMemoChangeField(name, value));
    }

    const getFooter = () => {
        if (editedMemo.loading) {
            return <Loader />;
        }
        if (editedMemo.error) {
            return (
                <>
                    <span>Произошла ошибка</span>
                    <button className="btn btn-outline-info mt-3 ml-3">Повторить</button>
                    <button className="btn btn-outline-warning mt-3 ml-3" type="reset">Отменить</button>
                </>
            )
        }
        return (
            <>
                <button className="btn btn-outline-success mt-3">{editedMemo.item.id === 0 ? 'Добавить' : 'Сохранить'}</button>
                <button className="btn btn-outline-warning mt-3 ml-3" type="reset">Отменить</button>
            </>
        )
    };

    return (
     <div className="container mt-5">   <form onSubmit={handleSubmit} onReset={handleCancel}>
            <select className="form-control" name="type" onChange={handleChange} value={editedMemo.item.type}>
                <option value="food">Еда</option>
                <option value="travel">Путешествия</option>
                <option value="car">Машина</option>
                <option value="study">Учеба</option>
            </select>
            <input className="form-control mt-3" name="price" type="number" onChange={handleChange} value={editedMemo.item.price} />
            <textarea className="form-control mt-3" name="description" onChange={handleChange} value={editedMemo.item.description}></textarea>
            {getFooter()}
        </form>
        <div> {editedMemo.item.totalprice} </div>
        </div>
        
    )
}
