import { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Chevron from '../components/Chevron';
import styles from './Slideshow.module.scss';

function Slideshow({ pictures, className }) {
  const nbPictures = pictures.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={classNames(styles.default, className)}>
      <div className={styles.pictures}>
        {pictures.map((picture, index) => (
          <img
            className={classNames.bind(styles)(styles.picture, { active: index === currentIndex })}
            key={`picture-${index}`}
            src={picture}
          />
        ))}
        {nbPictures > 1 ? (
          <>
            <div
              className={styles.previous}
              onClick={() => setCurrentIndex((currentIndex + nbPictures - 1) % nbPictures)}
            >
              <Chevron className={styles.chevron} left />
            </div>
            <div className={styles.next} onClick={() => setCurrentIndex((currentIndex + 1) % nbPictures)}>
              <Chevron className={styles.chevron} right />
            </div>
            <p className={styles.index}>
              {currentIndex + 1}/{nbPictures}
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default Slideshow;
