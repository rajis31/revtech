import React from 'react';
import Stepitem from './Stepitem';
import Stepdescription from './Stepdescription';
import '../css/Steps.css';
import {HiOutlineLightBulb} from 'react-icons/hi';
import {AiOutlineAntDesign} from 'react-icons/ai';
import {IoIosBuild} from 'react-icons/io';

const Steps = function(props){
        return (
        <div className="process">
                <div className="undershade">
                <div className="process-title">
                    <p>Three easy steps to your success</p>
                </div>
                <div className="process-steps">
                    <div>
                    <Stepitem>
                        <HiOutlineLightBulb />
                    </Stepitem>
                    <Stepdescription 
                        title="Come up with an Idea"  
                        description="We will help you to take your idea from vision to reality by help understanding how your idea fits in with your 
                                    overall business model."  
                    />
                    </div>
                    <div className="process-connector"></div>
                    <div>
                    <Stepitem>
                        <AiOutlineAntDesign />
                    </Stepitem>
                    <Stepdescription 
                        title="Design a solution"
                        description="We will take your idea and build out a working solution. Our experts will help you every step of the way to ensure 
                                    the solution design fits your goals and much more."
                    />
                    </div>
                    <div>
                    <Stepitem>
                        <IoIosBuild />
                    </Stepitem>
                    <Stepdescription 
                        title="Build it Out"
                        description="Once a working solution is desgined, our development team will take care of building a production ready solution and meeting 
                                    the demands of an ever changing environment. Ongoing support is provided even after the project built."
                    />
                    </div>
                </div>
            </div>

        
        </div>
        );
}

export default Steps;