import React from "react";
import FirstSlide from "./Slides/StateofIndianAgriculture";
import SecondSlide from "./Slides/WorldVsIndia";
import ThirdSlide from "./Slides/CropandYieldPredictions";
import FourthSlide from "./Slides/State-wise-analysis";
import FifthSlide from "./Slides/ChallengesSlide";
import SixthSlide from "./Slides/GovtSchemes";
import SeventhSlide from "./Slides/FoodSecuritySlide";
import EightSlide from "./Slides/EmploymentOpp";

const OverviewSection = () => {
    return(
        <div>
            <FirstSlide />
            <SecondSlide />
            <ThirdSlide />
            <FourthSlide />
            <FifthSlide />
            <SixthSlide />
            <SeventhSlide />
            <EightSlide />
        </div>
    );
}

export default OverviewSection;