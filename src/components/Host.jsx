import PropTypes from 'prop-types';

import styles from './Host.module.scss';

function Host({ host }) {
  return (
    <div className={styles.default}>
      <p>{host.name}</p>
      <div>
        <img src={host.picture} alt={host.name} />
      </div>
    </div>
  );
}

Host.propTypes = {
  host: PropTypes.exact({
    name: PropTypes.string,
    picture: PropTypes.string,
  }).isRequired,
};

export default Host;
