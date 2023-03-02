import { useState } from 'react';
import { useEffect } from 'react';
import './Test.scss';

function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/about.json')
      .then((response) => response.json())
      .then((response) => {
        const myvalue = response;
        console.log('MYVAL', myvalue);
        setData(myvalue);
      });
  }, []);

  const infos = 'Mais quoi mettre ?';

  console.log('DATAAAAAAAAAAAA', data);
  return (
    <div>
      <p>{infos}</p>
      <div>
        {infos}
        <br />
        {data.map((x, id) => (
          <p key={id}>{x.label}</p>
        ))}
      </div>
    </div>
  );
}

export default Test;
