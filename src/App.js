

import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/main/Main'
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import Reviews from './Components/Reviews/Reviews';
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
          <Header/>
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/Services' element={<Services state = {props.state} dispatch={props.dispatch} />}/>
              <Route path='/Reviews' element={<Reviews state = {props.state} dispatch={props.dispatch}/>}/>
            </Routes>
          <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App;
