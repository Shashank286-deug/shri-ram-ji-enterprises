import React from 'react';
import styles from './ComplianceSection.module.css';
import { ShieldCheck, FileText, CheckCircle } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const ComplianceSection = () => {
    return (
        <section id="compliance" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <RevealOnScroll>
                    <div className={styles.intro}>
                        <h2 className={styles.title}>Trust & Compliance</h2>
                        <p className={styles.description}>
                            We operate with complete transparency and adhere to all government regulations.
                            Our certifications are a testament to our commitment to excellence.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className={styles.cards}>
                    <RevealOnScroll delay={0.1}>
                        <div className={styles.card}>
                            <div className={styles.iconBox}>
                                <FileText size={32} />
                            </div>
                            <h3 className={styles.Label}>GST Registered</h3>
                            <p className={styles.value}>09BBYPS849L1Z7</p>
                            <span className={styles.status}><CheckCircle size={14} /> Verified</span>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={0.2}>
                        <div className={styles.card}>
                            <div className={styles.iconBox}>
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className={styles.Label}>MSME Certified</h3>
                            <p className={styles.value}>UDYAM-UP-75-0149441</p>
                            <span className={styles.status}><CheckCircle size={14} /> Active</span>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={0.3}>
                        <div className={`${styles.card} ${styles.gemCard}`}>
                            <div className={styles.gemBadge}>GeM</div>
                            <h3 className={styles.Label}>GeM Portal</h3>
                            <p className={styles.value}>Government e-Marketplace</p>
                            <span className={styles.status}><CheckCircle size={14} /> Authorized Supplier</span>
                            <div className={styles.gemDecor}></div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};

export default ComplianceSection;
