import Image from 'next/image';
import React from 'react';
import footerlogo from '@/assets/Footer Logo.png'
const Footer = () => {
    return (
        <footer>
            <div className='flex items-center justify-between'>
                <Image src={footerlogo} alt="Footer logo" />
                <h2>FITLOG</h2>
                <div>
                    <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;