import React, { useContext } from 'react'
import MemosContext from '../../contexts/MemosContext';
import { removeMemoConfirm, removeMemoCancel, removeMemoById, getMemos, editMemoExisting, getMemoDescription } from '../../actions/actionCreators';
import Loader from '../Loader/Loader';

// item = props.item
export default function Memo({ item }) {
    // Можно передавать только id, а объект по id искать в state
    const { state: { removedMemo }, dispatch } = useContext(MemosContext);



     

    const handleEdit = evt => {
        evt.preventDefault();
        dispatch(editMemoExisting(item));
    };
    const handleRemove = evt => {
        evt.preventDefault();
        dispatch(removeMemoConfirm(item.id));
    };
    // можно прямо в обработчик положить async функцию*
    // ВАМ НУЖНО ПРИДЕРЖИВАТЬСЯ ОДНОГО СТИЛЯ!!!
    const handleProcess = async evt => {
        evt.preventDefault();
        try {
            await removeMemoById(dispatch, item.id);
            await getMemos(dispatch);
        } catch (e) {
            // TODO: log error
        }
    };
    const handleCancel = evt => {
        evt.preventDefault();
        dispatch(removeMemoCancel());
    };
    const getFooter = () => {
        if (removedMemo.id !== item.id) {
            return (
                <div>
                    <span  className="ml-2" onClick={handleEdit}>Редактировать</span>
                    <span  className="ml-2" onClick={handleRemove}>Удалить</span>
                </div>
            );
        }
        if (removedMemo.loading) {
            return <Loader />;
        }
        if (removedMemo.error) { // !null -> truthy
            return (
                <div>
                    Произошла ошибка. Повторить?
                    <span onClick={handleProcess}>Да</span>
                    <span onClick={handleCancel}>Нет</span>
                </div>
            );
        }
        return (
            <div>
                Вы уверены, что хотите удалить элемент?
                <span onClick={handleProcess}>Да</span>
                <span href="" onClick={handleCancel}>Нет</span>
            </div>
        );
    };
        
    // proto:host:port/path?query#fragment - используйте preventDefault, а не #
    return (
        <article className="container mt-3">
        
            {  <div  className="accordion">
                <div className="card">
                   <h2 className="mb-2">
                <button className="btn btn-link" onClick={() => dispatch(getMemoDescription(item.id))} type="button" >
          Цена:  {item.price} $, Категория:{item.type} </button>
    </h2> <div >
              <div className="container"><div className="mb-2 bg-light text-dark"> { item.open && <span> {item.description }</span>}</div>  
              </div> </div> </div>
    
           </div>  }
           
            {getFooter()}
        
        </article>
    )
}
