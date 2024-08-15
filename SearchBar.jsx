import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div style={styles.searchBar}>
      <FontAwesomeIcon icon={faSearch} style={styles.icon} />
      <input type="text" placeholder="Search..." style={styles.input} />
      <div style={styles.selectContainer}>
        <select style={styles.select}>
          <option value="option1">Astrological</option>
          <option value="option2">Assistant</option>
          <option value="option3">Makeup</option>
          <option value="option3">Mehendi</option>
          <option value="option3">photogra</option>
        </select>
        <FontAwesomeIcon icon={faChevronDown} style={styles.selectIcon} />
      </div>
    </div>
  );
};

const styles = {
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    maxWidth: '1000px',
    margin: '30px auto',
  },
  icon: {
    marginRight: '8px',
    color: '#888',
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '16px',
  },
  selectContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  select: {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontSize: '16px',
    paddingRight: '24px', // Space for the select icon
    appearance: 'none',
  },
  selectIcon: {
    position: 'absolute',
    right: '8px',
    pointerEvents: 'none',
    color: '#888',
  },
};

export default SearchBar;
