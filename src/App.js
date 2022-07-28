import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer'
import {BrowserRouter, Route , Routes} from 'react-router-dom'
import Cart from './components/Cart';

function App() {
  return (
    <div classsName="App"> 
      <BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/category/:categoryid" element={<ItemListContainer />} />
				<Route path="/detail/:detailId" element={<ItemDetailContainer />} />
				<Route path='/cart' element={<Cart></Cart>}></Route>
			</Routes>
		</BrowserRouter>
    </div>   
  );
}

export default App;
