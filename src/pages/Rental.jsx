import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Slideshow from '../components/Slideshow';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Rental.module.scss';

function Rental(className) {
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
      <main className={classNames(styles.default, className)}>
        <Slideshow className={styles.slideshow} pictures={pictures} />
        <div className={styles.overview}>
          <div className={styles.property}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.location}>{location}</p>
            <Tags className={styles.tags} tags={tags}></Tags>
          </div>
          <div className={styles.services}>
            <Host host={host} />
            <Rating className={styles.rating} value={rating} />
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

Rental.propTypes = {
  className: PropTypes.string,
};

export default Rental;
