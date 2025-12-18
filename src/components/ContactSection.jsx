import React, { useRef, useState } from 'react';
import styles from './ContactSection.module.css';
import { Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        // Basic validation for env vars to helpful debugging
        if (!import.meta.env.VITE_EMAILJS_SERVICE_ID ||
            import.meta.env.VITE_EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID_HERE') {
            setStatus({
                type: 'error',
                message: 'EmailJS Configuration Missing. Please set up your .env file.'
            });
            setIsLoading(false);
            return;
        }

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    setStatus({ type: 'success', message: 'Message sent successfully!' });
                    form.current.reset();
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
                },
            )
            .finally(() => {
                setIsLoading(false);
            });
    };

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
                                    <p>+91 8250619953</p>
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
                                    <p>Varanasi, Uttar Pradesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className={styles.form} ref={form} onSubmit={sendEmail}>
                        <div className={styles.formGroup}>
                            <label htmlFor="user_name">Full Name</label>
                            <input type="text" name="user_name" id="user_name" placeholder="John Doe" required />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="company_name">Company Name</label>
                            <input type="text" name="company_name" id="company_name" placeholder="Business Ltd." />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="service_type">Service Required</label>
                            <select name="service_type" id="service_type" required>
                                <option value="">Select a Service</option>
                                <option value="civil">Civil Construction</option>
                                <option value="gem">GeM Supply</option>
                                <option value="retail">Retail Inquiry</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="4" placeholder="Tell us about your requirements..." required></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                            {isLoading ? (
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Loader2 className="animate-spin" size={18} /> Sending...
                                </span>
                            ) : (
                                'Send Message'
                            )}
                        </button>

                        {status.message && (
                            <div style={{
                                marginTop: '1rem',
                                padding: '0.75rem',
                                borderRadius: '4px',
                                fontSize: '0.9rem',
                                backgroundColor: status.type === 'error' ? '#fee2e2' : '#dcfce7',
                                color: status.type === 'error' ? '#991b1b' : '#166534',
                                border: `1px solid ${status.type === 'error' ? '#f87171' : '#4ade80'}`
                            }}>
                                {status.message}
                            </div>
                        )}
                    </form>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
