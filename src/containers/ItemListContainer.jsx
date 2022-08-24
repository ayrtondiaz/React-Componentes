import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utils/FirestoreFetch';
import '../Styles/Estilos.css'


 const ItemListContainer = () => {
	const [data, setData] = useState([]);
	const { categoryId } = useParams();

	useEffect(() => {
		firestoreFetch(categoryId)
		.then((result)=> setData(result))
		.catch((error)=> console.log(error));
	}, [categoryId]);


    return(
        <>
		<div className='row row-cols-1 row-cols-md-4 g-4'>
        <ItemList data={data}></ItemList>
		</div>
        </>

    );
}
export default ItemListContainer;