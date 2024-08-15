import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPhone, faQrcode, faHeart, faCrown } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div style={styles.footer}>
      <div style={styles.iconContainer}>
        <FontAwesomeIcon icon={faComments} style={styles.icon} />
        <span style={styles.label}>Chat</span>
      </div>
      <div style={styles.iconContainer}>
        <FontAwesomeIcon icon={faPhone} style={styles.icon} />
        <span style={styles.label}>Call</span>
      </div>
      <div style={styles.iconContainer}>
        <FontAwesomeIcon icon={faQrcode} style={styles.icon} />
        <span style={styles.label}>Scan</span>
      </div>
      <div style={styles.iconContainer}>
        <FontAwesomeIcon icon={faHeart} style={styles.icon} />
        <span style={styles.label}>Wishlist</span>
      </div>
      <div style={styles.iconContainer}>
        <FontAwesomeIcon icon={faCrown} style={styles.icon} />
        <span style={styles.label}>VIP</span>
      </div>
    </div>
  );
};

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '20px 0',
    margin:'50px',
    color: '#333',
    position: 'relative',
    bottom: '0',
    width: '100%',
    
  },
  iconContainer: {
    padding:'50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    fontSize: '24px',
    marginBottom: '5px',
  },
  label: {
    fontSize: '12px',
  },
};

export default Footer;
