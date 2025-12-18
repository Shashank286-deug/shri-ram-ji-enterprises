import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.logo}>
                    <img src="/logo.png" alt="Shri Ram Ji Enterprises" />
                    <span className={styles.companyName}>Shri Ram Ji Enterprises</span>
                </div>

                <nav className={`${styles.nav} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
                    <a href="#home" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Home</a>
                    <a href="#services" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Services</a>
                    <a href="#compliance" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Compliance</a>
                    <a href="#contact" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Contact</a>
                </nav>

                <button
                    className={styles.mobileToggle}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
