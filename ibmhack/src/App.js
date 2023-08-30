
import { Component } from 'react';
import React, { useEffect, useState }from'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  BrowserRouter,
  Routes
} from "react-router-dom";
import './App.css';
import Climate_Change from './Challenges/ClimateChange/ClimateChange';
import Water_Scarcity_and_Irrigation from './Challenges/WaterScarcityAndIrrigation/WaterScarcityAndIrrigation';
import OverviewPage from './LandingPage/OverviewPage';
import MainNav from './MainNav/MainNav';
import Home from './Home/Home';
import PostHarvestLosses from './Challenges/PostHarvestLosses/PostHarvestLosses';
import LandDegradation from './Challenges/SoilDegradation/LandDegradation'
import Employment from './Employment/Employment';
import StorageAndColdStorageFacilities from './Challenges/PostHarvestLosses/ExistingSolutions/StorageAndColdStorageFacilities/StorageAndColdStorageCapacityIframes/StorageAndColdStorageCapacityIframes';
import InformationAccess from './Challenges/InformationAccess/InformationAccess.js';
import YieldPrediction from './predictions/predictions';
import CropPrediction from './predictions/suggestion';
import FoodSecurity from './FoodSecurity/food_security';
import India from './india';
import Login from './Login/Login';
import SignUp from './SignUp/Signup';


class App extends Component {
  constructor(){
    super();
    this.state = {
      wantLoginForm: false,
      wantSignupForm: false,
      route: 'overview',
      user: {
        id: '',
        name: '',
        email: '',
        
      }
    };
  }

  loadUser = (userData) => {
    this.setState({
      user : {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        
      }
    })
  }



  render () {
  return (
    <div className="App">

      

      <BrowserRouter>
        
          <Routes>
          <Route exact path="/" element={<div><MainNav/><OverviewPage /></div>} />
          <Route path="/login" element={<div><OverviewPage /><Login/></div>} />
          <Route path="/signup" element={<div><OverviewPage /><SignUp/></div>} />
          <Route path="/indian-agriculture" element={<div><MainNav/><Home /></div>} />
          <Route path="/challenges/climate-change" element={<div><MainNav/><Climate_Change /></div>} />
          <Route path="/challenges/land-degradation" element={<div><MainNav/><LandDegradation /></div>} />
          <Route path="/challenges/water-scarcity-and-irrigation" element={<div><MainNav/><Water_Scarcity_and_Irrigation /></div>} />
          <Route path="/challenges/post-harvest-losses" element={<div><MainNav/><PostHarvestLosses /></div>} />
          <Route path="/challenges/timely-access-to-information" element={<div><MainNav/><InformationAccess/></div>} />
          <Route path='/challenges/post-harvest-losses/storage-and-cold-storage-capacities' element={<StorageAndColdStorageFacilities />} />
          <Route path="/employment" element={<div><MainNav/><Employment /></div>} />
          <Route path='/predictions/yield-prediction' element={<div><MainNav/><YieldPrediction /></div>}/>
          <Route path='/predictions/crop-suggestion' element={<div><MainNav/><CropPrediction /></div>}/>
          <Route path='/explore-states' element={<div><MainNav /><India /></div>} />
          <Route path='/food-security' element={<div><MainNav /><FoodSecurity /></div>}/>
          </Routes>   
        
      </BrowserRouter>
      


    </div>
  );
}
}

export default App;


