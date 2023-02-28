import './Test.scss';
import Chevron from '../components/Chevron';
//import Star from '../components/Star';
//import Rating from '../components/Rating';

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
    </>
  );
}

export default Test;
