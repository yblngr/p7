import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Tags.module.scss';

function Tags({ tags, className }) {
  return (
    <ul className={classNames(styles.default, className)}>
      {tags.map((tag, index) => (
        <li key={`tag-${index}`}>{tag}</li>
      ))}
    </ul>
  );
}
Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default Tags;
