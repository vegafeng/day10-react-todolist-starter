import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  
  const auraRef = useRef(null);
  const meteorRef = useRef(null); 

  
  useEffect(() => {
    if (auraRef.current) {
      const auraCount = Math.floor(Math.random() * 3) + 3;
      for (let i = 0; i < auraCount; i++) {
        const auraLine = document.createElement('div');
        auraLine.className = 'aura-line';
        
        auraLine.style.top = `${Math.random() * 80 + 10}%`;
        auraLine.style.left = `${Math.random() * 80 + 10}%`;
        auraLine.style.transform = `rotate(${Math.random() * 360}deg)`;
        auraLine.style.animationDuration = `${Math.random() * 3 + 4}s`;
        auraLine.style.animationDelay = `${Math.random() * 2}s`;
        auraRef.current.appendChild(auraLine);
      }
    }
  }, []);

  
  useEffect(() => {
    if (meteorRef.current) {
      
      const createMeteor = () => {
        const meteor = document.createElement('div');
        meteor.className = 'meteor';
        
        
        const startX = Math.random() * 100;
        const startY = Math.random() * 30; 
        const duration = Math.random() * 2 + 1; 
        const length = Math.random() * 150 + 50; 
        const angle = 30 + Math.random() * 30; 
        
        
        meteor.style.top = `${startY}%`;
        meteor.style.left = `${startX}%`;
        meteor.style.width = `${length}px`;
        meteor.style.transform = `rotate(${angle}deg)`;
        meteor.style.animationDuration = `${duration}s`;
        
        
        meteorRef.current.appendChild(meteor);
        
        
        setTimeout(() => {
          if (meteor.parentNode === meteorRef.current) {
            meteorRef.current.removeChild(meteor);
          }
        }, duration * 1000);
      };
      
      
      const interval = setInterval(createMeteor, 800);
      
      
      for (let i = 0; i < 3; i++) {
        setTimeout(createMeteor, i * 500);
      }
      
      
      return () => {
        clearInterval(interval);
        if (meteorRef.current) {
          meteorRef.current.innerHTML = '';
        }
      };
    }
  }, []);

  return (
    <div className="about-container">
      {}
      <div className="meteor-container" ref={meteorRef}></div>
      
      {}
      <div className="hunter-aura-container" ref={auraRef}></div>
      
      {}
      <h1 className="about-title">
        {[..."About Us"].map((char, idx) => (
          <span key={idx} className="title-char" style={{ animationDelay: `${idx * 0.1}s` }}>
            {char}
          </span>
        ))}
      </h1>
      
      {}
      <div className="about-desc-wrapper">
        <p className="about-description section-1">
          Welcome to our Todo application! Here, you can manage your tasks effortlessly.
        </p>
        <p className="about-description section-2">
          We believe in simplicity and efficiency, making your productivity soar!
        </p>
        
        <p className="about-hunter-slogan">
          「像猎人执行任务一样，高效完成每一个待办！」
        </p>
      </div>
    </div>
  );
};

export default About;
