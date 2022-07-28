import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';
import {products} from '../utils/Products'
import { useParams } from 'react-router-dom';


const ItemListContainer = () =>{
const [data,setData]= useState([]);
const {categoryid} = useParams();

useEffect(() => {
    if (categoryid === undefined) {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 1000)
        });
        getData.then(res => setData(res));
    }else{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products.filter(item => item.category === categoryid));
            }, 1000)
        });
        getData.then(res => setData(res));
    }
}, [categoryid]);

    return(
        <>
        {/* <ItemCount initial={1} stock={5} ></ItemCount> */}
        <ItemList data={data}></ItemList>
        </>

    );
}
export default ItemListContainer;