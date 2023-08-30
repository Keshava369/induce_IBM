import React from "react";
import Andhra from './States/andhra.js';
import Arunachal from './States/arunachal.js';
import Assam from './States/assam.js';
import Bihar from './States/bihar.js';
import Goa from './States/goa.js';
import Gujarat from './States/gujarat.js';
import Haryana from './States/hariyana.js';
import Himachal from './States/himachal.js';
import Jammu from './States/jammu and kashmir.js';
import Jarkhand from './States/jharkhand.js';
import Karnataka from './States/karnataka.js';
import Kerala from './States/kerala.js';
import Madhya from './States/madhya pradesh.js';
import Maharashtra from './States/maharastra.js';
import Manipur from './States/manipur.js';
import Meghalaya from './States/meghalaya.js';
import Mizoram from './States/mizoram.js';
import Nagaland from './States/nagaland.js';
import Punjab from './States/punjab.js';
import Rajsthan from './States/rajasthan.js';
import Sikkim from './States/sikkim.js';
import TamilNadu from './States/tamilnadu.js';
import Telangana from './States/telangana.js';
import Tripura from './States/tripura.js';
import Uttarakhand from './States/uttarakhand.js';
import Uttar from './States/uttarpradesh.js';
import West from './States/westbengal.js';
import Odisha from './States/odisha.js';


const StateChart = ({ setTooltipContent, setDistrictName, selectedState }) => {
     if (selectedState === 'Andhra Pradesh') {
        return (
            <>
              <Andhra />
            </>
          );
    } else if (selectedState === 'Arunachal Pradesh') {
        return (
        <>
              <Arunachal />
            </>
            );
    } else if (selectedState === 'Assam') {
        return (
        <>
              <Assam />
            </>
            );
    } else if (selectedState === 'Bihar') {
        return (
        <>
              <Bihar />
            </>
        );
    } else if (selectedState === 'Chhattisgarh') {
        return (
        <>
              <Punjab />
            </>
        );
    } 
        
    else if (selectedState === 'Goa') {
        return (
        <>
              <Goa />
            </>
            );
        
    } else if (selectedState === 'Gujarat') {
        return (
        <>
              <Gujarat />
            </>
        );
    } else if (selectedState === 'Haryana') {
        return (
        <>
              <Haryana />
            </>
        );
    } else if (selectedState === 'Himachal Pradesh') {
        return (
        <>
              <Himachal />
            </>
             );
    } else if (selectedState === 'Jammu & Kashmir') {
        return (
        <>
              <Jammu />
            </>
            );
    } else if (selectedState === 'Jharkhand') {
        return (
        <>
              <Jarkhand />
            </>
        );
    } else if (selectedState === 'Karnataka') {
        return (
            <>
              <Karnataka />
            </>
          );
    } else if (selectedState === 'Kerala') {
        return (
            <>
              <Kerala />
            </>
          );
    }  else if (selectedState === 'Madhya Pradesh') {
        return (
        <>
              <Madhya />
            </>
            );
    } else if (selectedState === 'Maharashtra') {
        return (
        <>
              <Maharashtra />
            </>
            );
    } else if (selectedState === 'Manipur') {
        return (
        <>
        <Manipur />
      </>
      );
    } else if (selectedState === 'Meghalaya') {
        return (
        <>
              <Meghalaya />
            </>
            );
    } else if (selectedState === 'Mizoram') {
        return (
        <>
              <Mizoram />
            </>
            );
    } else if (selectedState === 'Nagaland') {
        return (
        <>
              <Nagaland />
            </>
            );
    } else if (selectedState === 'Odisha') {
        return (
        <>
              <Odisha />
            </>
             );
    } else if (selectedState === 'Punjab') {
        return (
        <>
              <Punjab />
            </>
            );
    } else if (selectedState === 'Rajasthan') {
        return (
        <>
              <Rajsthan />
            </>
        );
    } else if (selectedState === 'Sikkim') {
        return (
        <>
              <Sikkim />
            </>
            );
    } else if (selectedState === 'Tamil Nadu') {
        return (
            <>
              <TamilNadu />
            </>
          );
    } else if (selectedState === 'Telangana') {
        return (
            <>
              <Telangana />
            </>
          );
    } else if (selectedState === 'Tripura') {
        return (
        <>
              <Tripura />
            </>
             );
    } else if (selectedState === 'Uttarakhand') {
        return (
        <>
              <Uttarakhand />
            </>
             );
    } else if (selectedState === 'Uttar Pradesh') {
        return (
        <>
              <Uttar/>
            </>
            );
    } else if (selectedState === 'West Bengal') {
        return (
        <>
              <West/>
            </>
            );
    }
};

export default StateChart;