import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemlistContainer from './components/ItemlistContainer';


function App() {
  return (
    <div classsName="App">   
        <NavBar></NavBar>
        <ItemlistContainer></ItemlistContainer>

    </div>
  );
}

export default App;
