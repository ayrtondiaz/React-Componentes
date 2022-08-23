import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router-dom';
import { firestoreFetchOne } from '../utils/FirestoreFetch';



const ItemDetailContainer = () => {

 const [data,setData]=useState({});
 const {detailId} = useParams();


 useEffect(() => {
  firestoreFetchOne(detailId)
    .then((result) => setData(result))
    .catch((error) => console.log(error));
  }, [detailId]);


 return(
   <ItemDetail data={data}/>
 );
};
export default ItemDetailContainer;