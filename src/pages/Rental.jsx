import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Slideshow from '../components/Slideshow';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';

function Rental() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rental, setRental] = useState();

  useEffect(() => {
    fetch('/data/rentals.json')
      .then((response) => response.json())
      .then((response) => {
        const rental = response.find((rental) => rental.id === id);
        if (!rental) throw new Error(`Non existent data ID '${id}'`);
        setRental(rental);
      })
      .catch((error) => {
        console.error('Error fetching data :\n', error.message);
        navigate('/404', { replace: true });
      });
  }, []);

  const { title, pictures, description, host, rating, location, equipments, tags } = rental ? rental : {};
  return (
    rental && (
      <main className="rental">
        <Slideshow className="slideshow" pictures={pictures} />
        <div className="overview">
          <div className="property">
            <h1 className="title">{title}</h1>
            <p className="location">{location}</p>
            <Tags className="tags" tags={tags}></Tags>
          </div>
          <div className="services">
            <Host host={host} />
            <Rating className="rating" value={rating} />
          </div>
        </div>
        <div className="details">
          <Collapse className="collapse" label="Description">
            <p>{description}</p>
          </Collapse>
          <Collapse className="collapse" label="&Eacute;quipements">
            <ul>
              {equipments.map((equipment, index) => (
                <li key={`equipment-${index}`}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </main>
    )
  );
}

export default Rental;
