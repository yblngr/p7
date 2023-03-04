import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Collapse from '../components/Collapse';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Slideshow from '../components/Slideshow';
import Tags from '../components/Tags';
import styles from './Rental.module.scss';

function Rental() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rental, setRental] = useState();

  useEffect(() => {
    fetch('/data/rentals.json')
      .then((response) => response.json())
      .then((response) => {
        const rental = response.find((rental) => rental.id === id);
        if (!rental) throw new Error(`Non existent data ID '${id}'`);
        setRental(rental);
      })
      .catch((error) => {
        console.error('Error fetching data :\n', error.message);
        navigate('/404', { replace: true });
      });
  }, []);

  const { title, pictures, description, host, rating, location, equipments, tags } = rental ? rental : {};
  return (
    rental && (
      <main className={styles.default}>
        <Slideshow className={styles.slideshow} pictures={pictures} />
        <div className={styles.overview}>
          <div className={styles.property}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.location}>{location}</p>
            <Tags tags={tags}></Tags>
          </div>
          <div className={styles.services}>
            <Host host={host} />
            <Rating value={rating} />
          </div>
        </div>
        <div className={styles.details}>
          <Collapse className={styles.collapse} label="Description">
            <p>{description}</p>
          </Collapse>
          <Collapse className={styles.collapse} label="&Eacute;quipements">
            <ul>
              {equipments.map((equipment, index) => (
                <li key={`equipment-${index}`}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </main>
    )
  );
}

export default Rental;
