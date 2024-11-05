import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-scroll';
import { avatar, tags } from '../assets/data';
import { FaZ } from 'react-icons/fa6';

const Navbar = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <nav style={styles.navbarContainer}>
            {/* Navbar header with avatar and hamburger menu */}
            <div style={styles.navbar}>
                <div style={styles.avatarContainer}>
                    <img src={avatar} alt="Avatar" style={styles.avatarImage} />
                </div>
                
                {/* Desktop Menu */}
                <ul style={styles.desktopMenu}>
                    {tags.map((item, index) => (
                        <li key={index} style={styles.menuItem}>
                            <Link to={item.link} smooth={500} duration={500} style={styles.menuLink}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Icon for Mobile */}
                <div style={styles.hamburgerIcon} onClick={() => setIsOn(!isOn)}>
                    <img src="/menu.png" alt="Menu" width="30" height="30" />
                </div>
            </div>

            {/* Mobile Menu */}
            {isOn && (
                <div style={styles.mobileMenu}>
                    {tags.map((item, index) => (
                        <Link
                            key={index}
                            to={item.link}
                            smooth={400}
                            onClick={() => setIsOn(false)}
                            style={styles.mobileMenuItem}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <ImCross style={styles.closeIcon} onClick={() => setIsOn(false)} />
                </div>
            )}
        </nav>
    );
};

// Custom styles
const styles = {
    navbarContainer: {
        position: 'relative',
        width: '100%',
        zIndex:'40'
    },
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#f5efee',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
    },
    avatarContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    avatarImage: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        objectFit: 'cover',
    },
    desktopMenu: {
        display: 'flex',
        gap: '20px',
        listStyle: 'none',
        alignItems: 'center',
    },
    menuItem: {
        fontWeight: 'bold',
    },
    menuLink: {
        textDecoration: 'none',
        color: '#914F1E',
        textTransform: 'uppercase',
        cursor: 'pointer',
        paddingBottom: '5px',
    },
    hamburgerIcon: {
        display: 'block',
        cursor: 'pointer',
    },
    mobileMenu: {
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        backgroundColor: '#f5efee',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 50,
    },
    mobileMenuItem: {
        textDecoration: 'none',
        color: '#914F1E',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: '10px 0',
        cursor: 'pointer',
    },
    closeIcon: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
        color: '#914F1E',
    },
};

export default Navbar;
