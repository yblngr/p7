import { useParams } from 'react-router-dom'
import accommodations from '../assets/accommodations.json'

function Accommodation() {
  const { id } = useParams()
  const acc = accommodations.find((elt) => elt.id === id)
  // console.log(acc)
  return (
    <>
      <h1>[Accommodation id {id}]</h1>
      <h2>title</h2>
      <p>{acc.title}</p>
      <h2>cover</h2>
      <p>{acc.cover}</p>
      <h2>pictures</h2>
      {acc.pictures.map((elt, index) => (
        <p key={index}>{elt}</p>
      ))}
      <h2>description</h2>
      <p>{acc.description}</p>
      <h2>host</h2>
      <h3>name</h3>
      <p>{acc.host.name}</p>
      <h3>picture</h3>
      <p>{acc.host.picture}</p>
      <h2>rating</h2>
      <p>{acc.rating}</p>
      <h2>location</h2>
      <p>{acc.location}</p>
      <h2>equipments</h2>
      {acc.equipments.map((elt, index) => (
        <p key={index}>{elt}</p>
      ))}
      <h2>tags</h2>
      {acc.tags.map((elt, index) => (
        <p key={index}>{elt}</p>
      ))}
    </>
  )
}

export default Accommodation
