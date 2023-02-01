
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Restuarantlist from './Components/Restaurantlist';
import Viewrest from './Components/Viewrest';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Restaurantlist from './Components/Restaurantlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
    
    <Routes>
      <Route path='/' element={<Restaurantlist/>}/>
      <Route path='/viewrest/:id' element={<Viewrest/>}/>
    </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
