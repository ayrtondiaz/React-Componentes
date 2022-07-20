import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import {products} from '../utils/Products'



export const ItemlistContainer = () =>{
const [data,setData]= useState([]);

useEffect(()=>{
    const getData= new Promise(resolve=>{
        setTimeout(()=>{
            resolve(products);
        },3000);
    });
    getData.then(res=>setData(res));
},[])

    return(
        <>
        <ItemCount initial={1} stock={5} ></ItemCount>
        <ItemList data={data}></ItemList>
        </>

    );
}
export default ItemlistContainer;