import React from 'react';

export default function Item(props) {
    let classNames='item';
    if(props.item.purchased){
        classNames += 'purchased';
    }


function updatePurchaseHere (){
    props.toggleComplete(props.item.id)
}

return (
    <div className={classNames} onClick={updatePurchaseHere}>
    <p>{props.item.name}</p>
    </div>
);
}

