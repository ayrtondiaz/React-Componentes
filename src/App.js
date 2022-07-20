import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ItemlistContainer from './components/ItemlistContainer';
import ItemDetailContainer from './containers/ItemDetailContainer'

function App() {
  return (
    <div classsName="App">   
        <NavBar></NavBar>
        <ItemDetailContainer></ItemDetailContainer>
        {/* <ItemlistContainer></ItemlistContainer> */}

    </div>
  );
}

export default App;
