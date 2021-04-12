import React, {useState, useEffect,useRef} from 'react';
import "../css/FadeInSection.css";

const FadeInSection = function(props){
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();
    useEffect(()=>{
        const observer = new IntersectionObserver(entries =>{
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        console.log(domRef);
    },[]);

    return (
        <div className={`fade-in-section ${isVisible ? 'is-visible':''}`} ref={domRef}>
            {props.children}
        </div>
    );
}

export default FadeInSection;
