import React, { useEffect, useState, useRef } from 'react';
import styles from './Hero.module.css';
import heroBg from '../assets/images/hero_bg.png';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Building Foundations, Delivering Excellence, Powering Uttar Pradesh.";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + fullText.charAt(index));
                setIndex(prev => prev + 1);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <section className={styles.hero} id="home">
            <div
                className={styles.heroBg}
                style={{ backgroundImage: `url(${heroBg})` }}
            ></div>
            <div className={styles.overlay}></div>

            <div className={`container ${styles.content}`}>
                <h2 className={styles.welcome}>Welcome to</h2>
                <h1 className={styles.title}>Shri Ram Ji Enterprises</h1>
                <div className={styles.sloganContainer}>
                    <p className={styles.slogan}>{text}<span className={styles.cursor}>|</span></p>
                </div>

                <div className={styles.actions}>
                    <a href="#services" className={styles.primaryBtn}>Our Services</a>
                    <a href="#contact" className={styles.secondaryBtn}>Contact Us</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
