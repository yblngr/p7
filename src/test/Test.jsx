import './Test.scss';
import Chevron from '../components/Chevron';
//import Star from '../components/Star';
//import Rating from '../components/Rating';
//import Picture from '../components/Picture';
// import image from '../assets/images/about.webp';

function Test() {
  return (
    <>
      <div>
        <h1>Page de test</h1>
        <hr />
        <Chevron up />
        <Chevron />
        <div style={{ fontSize: '48px' }}>
          <Chevron className="mySizedChevron" />
          <Chevron />
        </div>
      </div>
      <hr />
      {/* <Picture src={image} alt="Ma photo" />
      <hr />
      <img src={image} alt="Mon image" /> */}
    </>
  );
}

export default Test;
