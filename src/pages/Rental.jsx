import { useParams, Navigate } from 'react-router-dom';
import rentals from '../assets/data/rentals.json';
import Slideshow from '../components/Slideshow';
import Tags from '../components/Tags';
import Collapse from '../components/Collapse';

function Rental() {
  const { id } = useParams();
  const rental = rentals.find((a) => a.id === id);
  if (rental === undefined) return <Navigate to="/404" replace={true} />;
  const { title, pictures, description, host, rating, location, equipments, tags } = rental;

  return (
    <main className="rental">
      <Slideshow pictures={pictures}></Slideshow>
      <div className="content-header">
        <div className="content-location">
          <div className="title">{title}</div>
          <div className="location">{location}</div>
          <Tags className="tags" tags={tags}></Tags>
        </div>
        <div className="content-host">
          <div className="host">
            <p>{host.name}</p>
            <img src={host.picture} width="64" height="64" />
          </div>
          <div className="rating">
            <p>rating : {rating}</p>
          </div>
        </div>
      </div>
      <div className="content-details">
        <div className="description">
          <Collapse title="Description" titleHeight="52px">
            <p>{description}</p>
          </Collapse>
        </div>
        <div className="equipments">
          <Collapse title="&Eacute;quipements" titleHeight="52px">
            <ul>
              {equipments.map((equipment, index) => (
                <li key={`equipment-${index}`}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </main>
  );
}

export default Rental;
