import React,{useState} from 'react'
// import Swal from 'sweetalert2'

const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter]= useState(initial)
    const add =()=>{
        if(counter<stock){
            // const aux = counter+1;
            // counter+=1;
            setCounter(counter+1);
        }
    }
    const substract =()=>{
        if(counter>initial){
            // const aux = counter-1;
            // counter-=1;
            setCounter(counter-1);
        }
    }
    // const confirmar=()=>{         
    //         Swal.fire({
    //         icon: 'success',
    //         title: 'Compra Confirmada',
    //         text: 'Esta llevando '+counter+' zapatillas'
    //         })
    // }



  return (
<div className="row justify-content-center text-center">
  <div className="col-sm-3">
    <div className="card">
      <div className="card-body">        
        <p className="card-text">Cantidad</p>
        <p className="card-text">{counter}</p>
        <button href="#" className="btn btn-success" onClick={add}>+</button>
        <button href="#" className="btn btn-danger" onClick={substract}>-</button>
      </div>
      <button href="#" className="a-detalle btn btn-dark btn-outline-light" onClick={()=>onAdd(counter)}>Confirmar</button>
    </div>
  </div>
  </div>
  );
}

export default ItemCount