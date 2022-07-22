import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer'
import {BrowserRouter, Route , Routes} from 'react-router-dom'

function App() {
  return (
    <div classsName="App"> 
      <BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<ItemListContainer />} />
				<Route path="/category/:categoryid" element={<ItemListContainer />} />
				<Route path="/detail/:detailId" element={<ItemDetailContainer />} />
			</Routes>
		</BrowserRouter>
    </div>   
  );
}

export default App;
