// src/AnalogClock/AnalogClock.js

import React, { useEffect } from 'react';
import './AnalogClock.css';

const AnalogClock = () => {
    useEffect(() => {
        const updateClock = () => {
            const secHand = document.querySelector('.sec-hand');
            const minHand = document.querySelector('.min-hand');
            const hrHand = document.querySelector('.hr-hand');
            
            const now = new Date();
            const seconds = now.getSeconds();
            const minutes = now.getMinutes();
            const hours = now.getHours();
            
            const secondsDegrees = ((seconds / 60) * 360) + 90;
            const minutesDegrees = ((minutes / 60) * 360) + 90;
            const hoursDegrees = ((hours / 12) * 360) + 90;
            
            if (secHand) secHand.style.transform = `rotate(${secondsDegrees}deg)`;
            if (minHand) minHand.style.transform = `rotate(${minutesDegrees}deg)`;
            if (hrHand) hrHand.style.transform = `rotate(${hoursDegrees}deg)`;
        };
        
        const intervalId = setInterval(updateClock, 1000);
        
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="clock">
            <div className="dot"></div>
            <div className="num num1"><span>1</span></div>
            <div className="num num2"><span>2</span></div>
            <div className="num num3"><span>3</span></div>
            <div className="num num4"><span>4</span></div>
            <div className="num num5"><span>5</span></div>
            <div className="num num6"><span>6</span></div>
            <div className="num num7"><span>7</span></div>
            <div className="num num8"><span>8</span></div>
            <div className="num num9"><span>9</span></div>
            <div className="num num10"><span>10</span></div>
            <div className="num num11"><span>11</span></div>
            <div className="num num12"><span>12</span></div>
            <div className="hr-hand"></div>
            <div className="min-hand"></div>
            <div className="sec-hand"></div>
        </div>
    );
};

export default AnalogClock;
