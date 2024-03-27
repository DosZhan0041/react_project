

import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/main/Main'
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import Reviews from './Components/Reviews/Reviews';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ServicesContainer from './Components/Services/ServicesContainer';
import ReviewsContainer from './Components/Reviews/ReviewsContainer';
import HouseDescriptionContainer from './Components/Services/ServiceHouse/HouseDescription/HouseDescriptionContainer';



function App(props) {
  return (
    <BrowserRouter>
    
        <div className="App">
            <Header/>
              <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/Services' element={<ServicesContainer />}/>
                <Route path='/Reviews' element={<ReviewsContainer />}/>
                <Route path='/houseDescription/:id' element={<HouseDescriptionContainer/>}/>
              </Routes>
            <Footer/>
        </div>

    </BrowserRouter>

  );
}

export default App;
