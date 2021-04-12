import React from 'react';
import CustomButton from "./Custombutton";
import FadeInSection from "./FadeInSection";
import '../css/Services.css';
import {FaDatabase,FaInternetExplorer} from "react-icons/fa";
import {MdComputer} from "react-icons/md";
import {IoGitNetwork} from "react-icons/io5";
import {GiArtificialIntelligence, GiTalk} from "react-icons/gi";

const Services = function(){
    return (
        <div className="services">
            <div className="title">
                <p> Services we Offer </p>
            </div>

            <FadeInSection>
            <div className="services-grid">

                {/* Service 1 */}
                <div className="service">
                    <div className="service-logo">
                        <FaDatabase color="#fff" size={80} />
                    </div>
                    <div className="service-title">
                        <p>Database Technology</p>
                    </div>

                    <div className="service-description">
                        <p> 
                            We can help you design and integrate any type of backend technology with your project.
                            Support various database technologies such as Postgres, MySQL, MongoDB, and much more.  
                        </p>
                    </div>
                    <CustomButton link="#" text="Contact us"/>
                </div>

                 {/* Service 2 */}
                <div className="service">
                     <div className="service-logo">
                        <FaInternetExplorer color="#fff" size={80} />
                    </div>
                    <div className="service-title">
                        <p>Web Development</p>
                    </div>

                    <div className="service-description">
                        <p> 
                            Our team is experienced in helping to build full stack web applications such as 
                            eCommerce and business sites. We help to ensure that going from prototype to production 
                            quality build is done efficiently and thoroughly as possible.  
                        </p>
                    </div>
                    <CustomButton link="#" text="Contact us"/>
                </div>

                {/* Service 3 */}
                <div className="service">
                    <div className="service-logo">
                        <MdComputer color="#fff" size={80} />
                    </div>
                    <div className="service-title">
                        <p>IT Managed Services</p>
                    </div>

                    <div className="service-description">
                        <p> 
                          Ever need IT support? We offer 24/7 IT management that helps ensure your computers are kept safe, 
                          troubleshoot troublesome computers, data loss prevention, and workstation setup. 
                        </p>
                    </div>
                    <CustomButton link="#" text="Contact us"/>
                </div>

                 {/* Service 4 */}
                <div className="service">
                    <div className="service-logo">
                        <IoGitNetwork color="#fff" size={80} />
                    </div>
                    <div className="service-title">
                        <p>Network & Servers </p>
                    </div>

                    <div className="service-description">
                        <p> 
                            Trying to setup onpremise server or in the cloud? We have customized solutions to help integrate 
                            
                        </p>
                    </div>
                    <CustomButton link="#" text="Contact us"/>
                </div>

                {/* Service 5 */}
                <div className="service">
                <div className="service-logo">
                        <GiArtificialIntelligence color="#fff" size={80} />
                    </div>
                    <div className="service-title">
                        <p>AI</p>
                    </div>

                    <div className="service-description">
                        <p> 
                            We are leaders in Artificial Intelligence technologies and have helped various businesses 
                            implement various AI models into their business processes. We work from end to end in these 
                            data solutions starting from the idea to the machine learning model. 
                        </p>
                    </div>
                    <CustomButton link="#" text="Contact us"/>
                </div>

                 {/* Service 6 */}
                <div className="service">
                    <div className="service-logo">
                        <GiTalk  color="#fff" size={80} />
                    </div>
                    <div className="service-title">
                        <p>Messaging Technology</p>
                    </div>

                    <div className="service-description">
                        <p> 
                           We work with various platforms such as MS Teams and Zoom and help to set this up for your company. 
                           Work with your clients and provide enhanced trainings to go over how to utlilze these platforms. 
                        </p>
                    </div>
                    <CustomButton link="#" text="Contact us"/>
                </div>

            </div>
        </FadeInSection>

        </div>
    );
}

export default Services;