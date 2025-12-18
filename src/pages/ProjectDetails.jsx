import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ProjectDetails.module.css';
import { ArrowLeft, MapPin, Calendar, CheckCircle } from 'lucide-react';
import projectCivil from '../assets/images/project_civil.png';
import projectRetail from '../assets/images/hero_bg.png'; // Fallback until retail image generates

const projectsData = {
    "Civil Construction": {
        title: "Civil Construction Projects",
        description: "Building the infrastructure of tomorrow. Our civil engineering division focuses on high-rise residential complexes, commercial hubs, and government infrastructure.",
        ongoing: [
            {
                id: 1,
                name: "Lucknow One Heights",
                location: "Gomti Nagar, Lucknow",
                image: projectCivil,
                status: "70% Complete",
                type: "Residential"
            },
            {
                id: 2,
                name: "Metro Feeder Road",
                location: "Kanpur Road, Lucknow",
                image: projectRetail, // Placeholder
                status: "40% Complete",
                type: "Infrastructure"
            }
        ],
        completed: [
            {
                id: 3,
                name: "State Bank Regional Office",
                location: "Hazratganj, Lucknow",
                image: projectRetail, // Placeholder
                date: "2024",
                type: "Commercial"
            }
        ]
    },
    "GeM Government Supply": {
        title: "Government Supply Contracts",
        description: "Reliable procurement partner for state and central government departments. We ensure quality and timely delivery of essential goods.",
        ongoing: [
            {
                id: 4,
                name: "UP Police Housing Supply",
                location: "Statewide",
                image: projectRetail,
                status: "Active Contract",
                type: "Procurement"
            }
        ],
        completed: [
            {
                id: 5,
                name: "Municipal Corporation Equipment",
                location: "Varanasi",
                image: projectRetail,
                date: "2023",
                type: "Equipment"
            }
        ]
    },
    "Retail Division": {
        title: "Retail & Consumer Goods",
        description: "Connecting brands with consumers through our extensive retail network across Uttar Pradesh.",
        ongoing: [
            {
                id: 6,
                name: "City Mall Outlet",
                location: "Lucknow",
                image: projectRetail,
                status: "Opening Soon",
                type: "Retail Store"
            }
        ],
        completed: [
            {
                id: 7,
                name: "Central Distribution Hub",
                location: "Transport Nagar",
                image: projectRetail,
                date: "2022",
                type: "Logistics"
            }
        ]
    }
};

const ProjectDetails = () => {
    const { id } = useParams();
    const decodedId = decodeURIComponent(id);
    const data = projectsData[decodedId] || projectsData["Civil Construction"];
    const [activeTab, setActiveTab] = useState('ongoing');

    return (
        <div className={styles.page}>
            <div className={`container ${styles.container}`}>
                <Link to="/" className={styles.backLink}>
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <header className={styles.header}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <p className={styles.description}>{data.description}</p>
                </header>

                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${activeTab === 'ongoing' ? styles.active : ''}`}
                        onClick={() => setActiveTab('ongoing')}
                    >
                        Ongoing Projects
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'completed' ? styles.active : ''}`}
                        onClick={() => setActiveTab('completed')}
                    >
                        Completed Projects
                    </button>
                </div>

                <div className={styles.grid}>
                    {data[activeTab].map(project => (
                        <div key={project.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={project.image} alt={project.name} />
                                <div className={styles.badge}>{project.type}</div>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.projectName}>{project.name}</h3>
                                <div className={styles.meta}>
                                    <div className={styles.metaItem}>
                                        <MapPin size={16} />
                                        <span>{project.location}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        {activeTab === 'ongoing' ? <CheckCircle size={16} /> : <Calendar size={16} />}
                                        <span>{activeTab === 'ongoing' ? project.status : `Completed in ${project.date}`}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
