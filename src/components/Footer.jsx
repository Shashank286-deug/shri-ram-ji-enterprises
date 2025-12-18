import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.column}>
                    <h3 className={styles.brand}>Shri Ram Ji Enterprises</h3>
                    <p className={styles.text}>
                        Building infrastructure, empowering government supply chains, and serving consumers across Uttar Pradesh.
                    </p>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.heading}>Internal Links</h4>
                    <ul className={styles.list}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#compliance">Compliance</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.heading}>Compliance</h4>
                    <p className={styles.text}>GST: 09BBYPS849L1Z7</p>
                    <p className={styles.text}>MSME: UDYAM-UP-75-0149441</p>
                    <p className={styles.text}>GeM Authorized</p>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.heading}>Location</h4>
                    <div className={styles.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.876793740263!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Map"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Shri Ram Ji Enterprises. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
