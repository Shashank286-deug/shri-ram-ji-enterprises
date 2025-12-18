import React, { useEffect, useState } from 'react';
import styles from './ScrollProgressBar.module.css';

const ScrollProgressBar = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const scrollableHeight = documentHeight - windowHeight;

            const progress = (scrollTop / scrollableHeight) * 100;
            setScrollWidth(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.progressBarContainer}>
            <div
                className={styles.progressBar}
                style={{ width: `${scrollWidth}%` }}
            />
        </div>
    );
};

export default ScrollProgressBar;
