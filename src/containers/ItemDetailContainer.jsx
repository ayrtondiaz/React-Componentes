import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from '../components/ItemDetail'
 import {products} from '../utils/Products'
import { useParams } from 'react-router-dom';
 

const ItemDetailContainer = () => {

 const [data,setData]=useState({});
 const {detailId} = useParams();

 useEffect(() => {
  const getData = new Promise(resolve => {
      setTimeout(() => {
          resolve(products);
      }, 1000)
  });
  getData.then(res => 
    setData(res.find(item => item.id === parseInt(detailId))));
}, [detailId])

  return (
    <ItemDetail data= {data}></ItemDetail>
  )
}

export default ItemDetailContainer