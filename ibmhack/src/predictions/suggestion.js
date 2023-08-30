import React from 'react';

import './yield.css'

import  { useState, useEffect } from "react";

import axios from 'axios';

const Prediction = () => {
  const [formData, setFormData] = useState({
    statename: '',
    districtname: '',
    season: '',
    production: '',
    area: '',
  });

  const [apiResponse, setApiResponse] = useState({
    output: '',
    costofprodperacre:'',
    totalcost:'',
    suitabletemp:'',
    NPK:'',
    rainfallrqrd:'',
    fertilizersrqrd:'',
    waterintensity:''
  });

  const [showResult, setShowResult] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/suggestion', formData, {
      headers: {
         'Content-Type': 'application/json',
          },
       });

      console.log('Data sent to Flask:', JSON.stringify(response.data));
      setApiResponse((response.data));
      setShowResult(true); // Show the result after submitting
      //console.log(JSON.stringify(formData))
    } catch (error) {
      console.error('Error sending data to Flask:', error);
    } 
  };

  const refresh = () => window.location.reload(true)
  return (
    <div >  
          
            <div className="login-box" style={{background:"linear-gradient(#141e30, #243b55"}}>
                <h2>Crop suggestion</h2>
                <form onSubmit={handleSubmit}>
                   <div className="user-box">
                      <input type="text" name ="statename" required="required" placeholder="State Name" value={formData.statename} onChange={handleChange}/>
                    </div>
                   <div className="user-box">
                      <input type="text" name ="districtname" required="required" placeholder="District Name" value={formData.districtname} onChange={handleChange}/>
                   </div>
                   <div className="user-box">
                      <input type="text" name ="season" required="required" placeholder="Season" value={formData.season} onChange={handleChange}/>
                   </div>
                    <div className="user-box">
                      <input type="text" name ="production" required="required" placeholder="Production" value={formData.production} onChange={handleChange}/>
                   </div>
                   <div className="user-box">
                     <input type="text" name ="area" required="required" placeholder="Area" value={formData.area} onChange={handleChange}/>
                   </div>
                   <button className="btn" type="submit">Predict</button>
                 </form>
        
              </div>
           <div>
               {showResult && (
                <div className="reply-box" style={{background:"linear-gradient(#141e30, #243b55"}}>
                   <h2>{apiResponse.output}</h2>
                   <h2>Estimated cost per acre is {apiResponse.costofprodperacre} rupees.</h2>
                   <h2>Total estimated cost for the selected area will be {apiResponse.totalcost} rupees.</h2>
                   <h2>Suitable temparature is {apiResponse.suitabletemp}</h2>
                   <h2>Required Rainfall is {apiResponse.rainfallrqrd}</h2>
                   <h2>Requirement of Nitrogen phosphorus and potassium is {apiResponse.NPK} respectively.</h2>
                   <h2>Required fertilizers are {apiResponse.fertilizersrqrd}</h2>
                   <h2>{apiResponse.waterintensity}</h2>
                   <button className="btn" onClick={refresh}>Close</button>
                </div>
                )}
             </div>
        
  </div>
       
    );
}

export default Prediction;