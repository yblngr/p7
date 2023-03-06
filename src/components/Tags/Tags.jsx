import PropTypes from 'prop-types';

import styles from './Tags.module.scss';

function Tags({ tags }) {
  return (
    <ul className={styles.default}>
      {tags.map((tag, index) => (
        <li key={`tag-${index}`}>{tag}</li>
      ))}
    </ul>
  );
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
