import PropTypes from 'prop-types';
import './Slideshow.scss';

function Slideshow({ pictures }) {
  return (
    <div className="slideshow">
      <div className="pictures">
        {pictures.map((elt, index) => (
          <div key={`picture-${index}`} className="picture">
            <img src={elt} />
          </div>
        ))}
      </div>
      <div className="left-arrow"></div>
      <div className="right-arrow"></div>
      <div className="index">1/5</div>
    </div>
  );
}

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
};

export default Slideshow;
