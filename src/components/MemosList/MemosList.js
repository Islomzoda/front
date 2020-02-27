import React, { useContext, useEffect } from 'react';
import MemosContext from '../../contexts/MemosContext';
import Loader from '../Loader/Loader';
import Memo from '../Memo/Memo';
import { getMemos } from '../../actions/actionCreators';
import MemoTotalSum from '../../MemoTotalSum/MemoTotalSum';

// иногда пишут так (зависит от стиля кода): const MemosList = () => {};
export default function MemosList() {
    const { state, dispatch } = useContext(MemosContext);
    // const memos = state.memos;
    // const items = memos.items;
    // const loading = memos.loading;
    // const error = memos.error;
    const { memos: { items, loading, error } } = state; // deep destructuring

    const handleRetry = async () => {
        try {
            await getMemos(dispatch);
        } catch (e) {
            // TODO: log error
        }
    };

    // effect's - побочные действия
    // это любые операции с внешним миром -> ajax
    useEffect(() => {
        (async () => {
            try {
                await getMemos(dispatch);
            } catch (e) {
                // TODO: log error
            }
        })();
    }, [dispatch]);
   

    const errorEl = (
        <div className="container mt-3">
            <p>Произошла ошибка</p>
            <button className="btn btn-outline-success" onClick={handleRetry}>Попробовать ещё раз</button>
        </div>
    );

    return (
        <div>
            {loading && <Loader />}
            {items.map(o => <Memo key={o.id} item={o} />)}
            {error && errorEl}
            <MemoTotalSum items={items} />
        </div>
    )
}
