import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaIndustry } from 'react-icons/fa';
import React from 'react';
import '../../styles/Contact.css'

const Contact = () => {
    return (
        <div>
        <section className="contact-section">
            <h2>Contact Us</h2>
            <div className="contact-grid">
                <div className="contact-item">
                    <a href="" target='_blank'>
                        <FaMapMarkerAlt className="contact-icon" />
                        <div>1477 Trimingham Dr, Pleasanton, CA - 94566, USA</div>
                    </a>
                </div>
                <div className="contact-item">
                    <a href="" target='_blank'>
                        <FaPhone className="contact-icon" />
                        <div>+1 (516)-870-8099</div>
                        <div>+1 (925)-364-4786 </div>
                    </a>
                </div>
                <div className="contact-item">
                    <a href="mailto:contactbhanuimpex@gmail.com" target='_blank'>
                        <FaEnvelope className="contact-icon" />
                        <div>contactbhanuimpex@gmail.com</div>
                    </a>
                </div>
            </div>
        </section>
        <section className="contact-section">
        <h2>Residing in India</h2>
        <div className="contact-grid">
            <div className="contact-item">
                <a href="" target='_blank'>
                    <FaMapMarkerAlt className="contact-icon" />
                    <div>1 Chandrika Niwas, LBS Marg, Ghatkopar (West), Mumbai - 400086</div>
                </a>
            </div>
            <div className="contact-item">
                <a href="" target='_blank'>
                    <FaPhone className="contact-icon" />
                    <div>+91 93238 66659</div>
                </a>
            </div>
            <div className="contact-item">
                <a href="" target='_blank'>
                    <FaIndustry className="contact-icon" />
                    <div>Survey no.105, Shil Mahape, Thane, Maharashtra-400612, India</div>
                </a>
            </div>
        </div>
    </section>
    </div>
    );
}

export default Contact;