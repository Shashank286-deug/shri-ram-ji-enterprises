import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
    return (
        <div className={styles.card} style={{ animationDelay: `${delay}s` }}>
            <div className={styles.iconWrapper}>
                <Icon size={40} strokeWidth={1.5} />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <Link to={`/projects/${encodeURIComponent(title)}`} className={styles.learnMore}>
                <span>Learn More</span>
                <span className={styles.arrow}>→</span>
            </Link>
        </div>
    );
};

export default ServiceCard;
