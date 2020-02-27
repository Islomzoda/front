import React from 'react'

export default function MemoTotalSum({items}) {
    return (
        <div>
            Итог: {items.reduce((acc, curr) => acc + parseInt(curr.price, 10), 0)}
        </div>
    )
}
