import React from 'react';
import "../css/Team.css";
import Person1 from "../images/team/person1.jpg";
import Person2 from "../images/team/person2.jpg";
import Person3 from "../images/team/person3.jpg";
import Person4 from "../images/team/person4.jpg";
import Person5 from "../images/team/person5.jpg";
import Person6 from "../images/team/person6.jpg";



const Team = () => {
    return (
        <div className="team">
            <div className="team-title">
                <p> Meet Our Team </p>
            </div>
            <div className="team-grid">
                <div className="individual">
                    <img src={Person1} />
                    <p className="individual-name">Bobby Angler</p>
                    <p className="job-description"> Lead development engineer who specializes in databse 
                    technologies and has over 10 years of experience. He like to surf and watch football in 
                    his free time.</p>
                </div>
                <div className="individual">
                    <img src={Person2} />
                    <p className="individual-name">Jenna Thompson</p>
                    <p className="job-description"> Jenna has over 8 years of experience in front end web development 
                    in variosu platforms such as React.js and Angular. She enjoys being creative and spending time in the 
                    outdors </p>
                </div>
                <div className="individual">
                    <img src={Person3} />
                    <p className="individual-name">John Doe</p>
                    <p className="job-description"> John is knowledgable in various areas centered around web design, data analytics, and 
                    databases. He enjoys tackling complex problems and has a knack for photography in his free time. </p>
                </div>
                <div className="individual">
                    <img src={Person4} />
                    <p className="individual-name">Michael Flynn</p>
                    <p className="job-description"> Lead technology guru who centers on platform integrations and customizations. He has over 
                    9 years of experience helping companies integrate new platforms into their existing line of business. In his spare time he 
                    enjoys fishing and reading about financial investing. </p>
                </div>
                <div className="individual">
                    <img src={Person5} />
                    <p className="individual-name">Kaitlyn Spragle</p>
                    <p className="job-description"> Kaitlyn is an experienced data engineer who specializes in developing machine 
                    learning solutions centered around supervised learning. She also has many years of reasearch experience within the 
                    field.</p>
                </div>
                <div className="individual">
                    <img src={Person6} />
                    <p className="individual-name">Clyde Rodgers</p>
                    <p className="job-description"> Clyde has a knack for all things tech and specializes in process automation and analytics. 
                    Making things work seamless and efficiently is Clyde's speciality and something that he finds fascinatiing. He has over 10 years of 
                    field experience and enjoys going to the beaches in his free time.</p>
                </div>
            </div>
        </div>
    );
}

export default Team;