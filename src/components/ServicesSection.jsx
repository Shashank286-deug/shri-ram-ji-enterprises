import React from 'react';
import styles from './ServicesSection.module.css';
import ServiceCard from './ServiceCard';
import { HardHat, ShieldCheck, ShoppingBag } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const ServicesSection = () => {
    const services = [
        {
            title: "Civil Construction",
            description: "Delivering state-of-the-art infrastructure projects across Uttar Pradesh. From residential complexes to industrial foundations.",
            icon: HardHat,
            delay: 0.1
        },
        {
            title: "GeM Government Supply",
            description: "Verified supplier on Government e-Marketplace, ensuring timely and compliant procurement solutions for public sector needs.",
            icon: ShieldCheck,
            delay: 0.2
        },
        {
            title: "Retail Division",
            description: "Connecting consumers with high-quality goods through our extensive local retail network and distribution channels.",
            icon: ShoppingBag,
            delay: 0.3
        }
    ];

    return (
        <section id="services" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <RevealOnScroll>
                    <div className={styles.header}>
                        <h2 className={styles.subtitle}>What We Do</h2>
                        <h3 className={styles.title}>Our Core Verticals</h3>
                        <div className={styles.divider}></div>
                    </div>
                </RevealOnScroll>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <RevealOnScroll key={index} delay={service.delay}>
                            <ServiceCard {...service} />
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
