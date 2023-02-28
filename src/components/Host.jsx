import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Host.module.scss';

function Host({ host, className }) {
  return (
    <div className={classNames(styles.default, className)}>
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
  className: PropTypes.string,
};

export default Host;
