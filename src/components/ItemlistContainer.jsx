import React from 'react';
import ItemCount from './ItemCount';

const itemlistContainer = () =>{
    return(
        <ItemCount initial={1} stock={5} ></ItemCount>

    );
}
export default itemlistContainer;