import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer'
import {BrowserRouter, Route , Routes} from 'react-router-dom'
import Cart from './components/Cart';
import './Styles/Estilos.css'
import CartContextProvider from './components/CartContext'
import './utils/FirebaseConfig';

function App() {
  return (
	<div classsName="App"> 
	  <div className='Container-main'>

      <BrowserRouter>
	<CartContextProvider>
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/category/:categoryId" element={<ItemListContainer />} />
				<Route path="/detail/:detailId" element={<ItemDetailContainer />} />
				<Route path='/cart' element={<Cart/>}/>
			</Routes>
	</CartContextProvider>
		</BrowserRouter>
    </div>   
	</div>
  );
}

export default App;
