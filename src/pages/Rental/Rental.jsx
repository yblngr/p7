import { useLoaderData } from 'react-router-dom';

import Collapse from '../../components/Collapse/Collapse';
import Host from '../../components/Host/Host';
import Rating from '../../components/Rating/Rating';
import Slideshow from '../../components/Slideshow/Slideshow';
import Tags from '../../components/Tags/Tags';
import styles from './Rental.module.scss';

function Rental() {
  const rental = useLoaderData();
  const { title, pictures, description, host, rating, location, equipments, tags } = rental;

  return (
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
  );
}

export default Rental;
