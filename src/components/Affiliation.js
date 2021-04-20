import React, {useState, useEffect} from 'react';
import "../css/Affiliation.css";
import {FaDragon} from "react-icons/fa";
import {BiCube,BiLeftArrowCircle, BiRightArrowCircle} from "react-icons/bi";
import {GiStarSwirl,GiVikingHead} from "react-icons/gi";
import {ImShield} from "react-icons/im";
import {SiSeagate} from "react-icons/si";



const Affiliation = () => {
    const [count, setCount] = useState(0);
    const [leftIdx, setLeftIdx] = useState(0);
    const [rightIdx, setRightIdx] = useState(0);
    const [icons, setIcons] = useState([]);
    const [grid, setGrid] = useState();
   
    useEffect(() => {
        let icons = document.querySelectorAll(".affiliation-company");
        setCount(icons.length-1);
        setIcons(icons);
        setGrid(document.querySelector(".affiliation-grid"));

    }, []);
    
    function leftArrowHandler() {
        if(leftIdx>=count){
            setLeftIdx(0);
        } else {
            setLeftIdx(leftIdx+1)
        }
        icons.forEach((elem,idx)=>{
            if(idx===leftIdx){
                grid.removeChild(elem);
                grid.appendChild(elem);
                elem.style.display="none";
            } else {
                elem.style.display="block";
            }
        });
       
    }

    function rightArrowHandler() {
        if(rightIdx>=count){
            setRightIdx(0);
        } else {
            setRightIdx(rightIdx+1)
        }
        icons.forEach((elem,idx)=>{
            if(idx===rightIdx){
                grid.removeChild(elem);
                grid.appendChild(elem);
                elem.style.display="none";
            } else {
                elem.style.display="block";
            }
        });
       
    }


    return (
        <div className="affiliation">
              <div className="affiliation-scroll-left" onClick={leftArrowHandler}>
                    <BiLeftArrowCircle size={50} color="#FF4136"/>
              </div>
            <div className="affiliation-grid">
                <div className="affiliation-company">
                    <FaDragon size={70} color="#A9A9A9" />
                    <p>DragonData</p>
                </div>
                <div className="affiliation-company">
                    <BiCube size={70} color="#A9A9A9" />
                    <p>Cube3</p>
                </div>
                <div className="affiliation-company">
                    <GiStarSwirl size={70} color="#A9A9A9" />
                    <p>StarFire</p>
                </div>
                <div className="affiliation-company">
                    <GiVikingHead size={70} color="#A9A9A9" />
                    <p>Vikings</p>
                </div>
                <div className="affiliation-company">
                    <ImShield size={70} color="#A9A9A9" />
                    <p>ShieldTech</p>
                </div>
                <div className="affiliation-company">
                    <SiSeagate size={70} color="#A9A9A9"/>
                    <p>Seagate</p>
                </div>
            </div>
            <div className="affiliation-scroll-right" onClick={rightArrowHandler} >
                    <BiRightArrowCircle size={50} color="#FF4136" />
            </div>
        </div>
    )
}

export default Affiliation;