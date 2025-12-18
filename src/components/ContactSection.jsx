import React from 'react';
import styles from './ContactSection.module.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.grid}>

                    <div className={styles.info}>
                        <h2 className={styles.title}>Get in Touch</h2>
                        <p className={styles.subtitle}>
                            Ready to start your project? Contact us for civil construction, government supply, or retail inquiries.
                        </p>

                        <div className={styles.contactDetails}>
                            <div className={styles.detailItem}>
                                <div className={styles.iconBox}><Phone size={20} /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91 98765 43210</p>
                                </div>
                            </div>
                            <div className={styles.detailItem}>
                                <div className={styles.iconBox}><Mail size={20} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>contact@shriramji.ent</p>
                                </div>
                            </div>
                            <div className={styles.detailItem}>
                                <div className={styles.iconBox}><MapPin size={20} /></div>
                                <div>
                                    <h4>Office</h4>
                                    <p>Lucknow, Uttar Pradesh, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="John Doe" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="company">Company Name</label>
                            <input type="text" id="company" placeholder="Business Ltd." />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="service">Service Required</label>
                            <select id="service">
                                <option value="">Select a Service</option>
                                <option value="civil">Civil Construction</option>
                                <option value="gem">GeM Supply</option>
                                <option value="retail">Retail Inquiry</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="4" placeholder="Tell us about your requirements..."></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn}>Send Message</button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
