import React from 'react';

const Card = ({ imageSrc, imageFlagSrc, title, description }) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={imageSrc} alt={title} style={styles.image} />
        {imageFlagSrc && <img src={imageFlagSrc} alt="Flag" style={styles.imageFlag} />}
      </div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const CardGrid = () => {
  const cards = [
    {
      imageSrc: '../img/m1.jpg',
      imageFlagSrc: '../img/f1.jpg', 
      title: 'Noah',
    },
    {
      imageSrc: '../img/m2.jpg',
      imageFlagSrc: '../img/f2.jpg', 
      title: ' Oliver',
    },
    {
      imageSrc: '../img/w1.jpg',
      imageFlagSrc: '../img/f3.jpg', 
      title: 'Emma',
    },
    {
      imageSrc: '../img/w3.jpg',
      imageFlagSrc: '../img/f4.jpg', 
      title: 'Charlotte',
    },
    {
      imageSrc: '../img/m1.jpg',
      imageFlagSrc: '../img/f5.jpg', 
      title: 'James',
    },
    {
      imageSrc: '../img/m2.jpg',
      imageFlagSrc: '../img/f2.jpg',
      title: 'Elijah',
    },
    {
      imageSrc: '../img/w1.jpg',
      imageFlagSrc: '../img/f3.jpg', 
      title: 'Amelia',
    },
    {
      imageSrc: '../img/w3.jpg',
      imageFlagSrc: '../img/f4.jpg', 
      title: 'Aurora',
    },
    {
      imageSrc: '../img/m1.jpg',
      imageFlagSrc: '../img/f1.jpg', 
      title: 'Henry',
    },
    {
      imageSrc: '../img/m2.jpg',
      imageFlagSrc: '../img/f2.jpg', 
      title: 'Theodore',
    },
    {
      imageSrc: '../img/w1.jpg',
      imageFlagSrc: '../img/f2.jpg', 
      title: 'Sophia',
    },
    {
      imageSrc: '../img/w3.jpg',
      imageFlagSrc: '../img/f4.jpg', 
      title: 'Emily',
    },
  
  ];

  return (
    <div style={styles.grid}>
      {cards.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          imageFlagSrc={card.imageFlagSrc}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

const styles = {
  grid: {
    margin:' 0 50px',
    display: 'flex',
    gap: '100px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '16px',
  },
  card: {
    width: '200px',
    borderRadius: '8px',
    overflow: 'hidden',
    textAlign: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
  },
  imageFlag: {
    position: 'absolute',
    top: '10px', // Adjust as needed
    right: '10px', // Adjust as needed
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '2px solid white', 
  },
  title: {
    fontSize: '18px',
    margin: '16px 0 8px',
  },
  description: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '16px',
    padding: '0 8px',
  },
};

export default CardGrid;
