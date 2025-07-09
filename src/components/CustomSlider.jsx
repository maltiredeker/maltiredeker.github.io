import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import Slider from '@mui/material/Slider'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

export default function CustomSlider({speed, setSpeed}){
 
    function valuetext(value) {
        return `${value}`;
    }

    return (

        <div className = "glassCard flex !gap-10 !justify-start !items-center w-full !pl-10 md:w-[400px] md:absolute md:bottom-15 md:left-20">
            <FontAwesomeIcon className = "text-[40px]" icon={faSpinner} />
            <div className = "flex flex-col justify-center w-full">
                <p className = "text-left">Speed Control</p>
                <Slider
                    aria-label="Temperature"
                    value={speed}
                    onChange={(e, val) => setSpeed(val)}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    shiftStep={30}
                    step={10}
                    marks
                    min={10}
                    max={100}
                    color = "whitee"
                />
            </div>  
        </div>

    )
}