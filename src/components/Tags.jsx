import PropTypes from 'prop-types';

function Tags({ tags, className }) {
  return (
    <ul className={`tags ${className}`}>
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
