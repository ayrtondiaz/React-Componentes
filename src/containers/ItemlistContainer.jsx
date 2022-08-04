import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import ItemCount from '../components/ItemCount';
import ItemList from '../components/ItemList';
// import {products} from '../utils/Products'
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore,query,where } from "firebase/firestore";



export const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);
	const { categoryId } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryCollection = collection(querydb, "Products");
		if (categoryId) {
			const queryFilter = query(
				queryCollection,
				where("category", "==", categoryId),
			);
			getDocs(queryFilter).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		} else {
			getDocs(queryCollection).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		}
	}, [categoryId]);
// useEffect(()=>{

//     const firestoreFetch = async()=>{
//         const querySnapshot = await getDocs(collection(db, "products"));
//         const dataFromFirestore = querySnapshot.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data()
//         }))
//         return dataFromFirestore
//     }
// firestoreFetch()
//     .then(result=> setData(result))
//     .catch(err=> console.log(err))
// },[categoryid]);

// useEffect(() => {
//     if (categoryid === undefined) {
//         const getData = new Promise(resolve => {
//             setTimeout(() => {
//                 resolve(products);
//             }, 1000)
//         });
//         getData.then(res => setData(res));
//     }else{
//         const getData = new Promise(resolve => {
//             setTimeout(() => {
//                 resolve(products.filter(item => item.category === categoryid));
//             }, 1000)
//         });
//         getData.then(res => setData(res));
//     }
// }, [categoryid]);

    return(
        <>
        {/* <ItemCount initial={1} stock={5} ></ItemCount> */}
        <ItemList data={data}></ItemList>
        </>

    );
}
export default ItemListContainer;