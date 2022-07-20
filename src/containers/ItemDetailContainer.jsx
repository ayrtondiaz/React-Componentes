import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from '../components/ItemDetail'
import {products} from '../utils/Products'

const ItemDetailContainer = () => {
 const [data,setData]=useState({});
useEffect(()=>{
    const getItem= new Promise(resolve=>{
    setTimeout(()=>{
        resolve(products[0]);
    },3000);
    });
    getItem.then(res=> setData(res))

},[])
  return (
    <ItemDetail data= {data}></ItemDetail>
  )
}

export default ItemDetailContainer