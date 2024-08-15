import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>
        <FontAwesomeIcon icon={faBars} style={styles.icon} />
        
      </div>
      <div style={styles.center}>
        <img
          src="../img/c1.jpg" 
          alt="Logo"
          style={styles.logo}
        />
      </div>
      <div style={styles.right}>
        <FontAwesomeIcon icon={faBell} style={styles.icon} />
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
   
    color: '#6b6666',
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 1,
    textAlign: 'left',
  },
  right: {
    flex: 1,
    textAlign: 'right',
  },
  logo: {
    height: '40px',
    position:'left'
  },
  icon: {
    fontSize: '24px',
    cursor: 'pointer',
  },
};

export default Navbar;
