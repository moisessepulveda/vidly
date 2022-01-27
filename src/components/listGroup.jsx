import React from "react";

const ListGroup = ({
                       items,
                       selectedItem,
                       onChangeItem,
                       textProperty="name",
                       valueProperty="_id"
                   }) => {

    return (
        <ul className="list-group">
            {items.map(item => {

                return (<li key={item[valueProperty]}
                            className={selectedItem === item ? 'list-group-item active': 'list-group-item'}
                            style={{cursor: "pointer"}}
                            onClick={() => onChangeItem(item)}>{item[textProperty]}</li>)
            })}
        </ul>
    );
}

export default ListGroup;
