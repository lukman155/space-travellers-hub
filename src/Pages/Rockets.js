import { useSelector } from 'react-redux';
import './rocket.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  const renderedRockets = rockets.map((rocket) => (
    <article key={rocket.id}>
      <img className="rocket-img" src={rocket.flickr_images[0]} alt={rocket.name} />
      <h1>{rocket.name}</h1>
      <p>{rocket.description}</p>
    </article>
  ));

  return (
    <section className="rockets-list">
      <div>Rockets</div>
      {renderedRockets}
    </section>
  );
};
export default Rockets;
