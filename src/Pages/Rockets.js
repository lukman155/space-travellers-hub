import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllRockets, fetchRockets } from '../Redux/rockets/rocketsSlice';

import './rocket.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(selectAllRockets);

  const rocketStatus = useSelector((state) => state.rockets.status);
  const error = useSelector((state) => state.rockets.error);

  useEffect(() => {
    if (rocketStatus === 'idle') {
      dispatch(fetchRockets());
    }
  }, [rocketStatus, dispatch]);

  let content;
  const [reserved, setReservation] = useState(false);
  const flip = () => {
    setReservation(!reserved);
  };

  if (rocketStatus === 'loading') {
    content = <div className="loader">Loading...</div>;
  } else if (rocketStatus === 'succeeded') {
    content = rockets.map((rocket) => (
      <article key={rocket.id}>
        <img className="rocket-img" src={rocket.flickr_images[0]} alt={rocket.name} />
        <div className="rocket-details">
          <h1>{rocket.rocket_name}</h1>
          <p>{rocket.description}</p>
          {reserved
            ? <button onClick={() => flip()} key={rocket.id} className="reserve-btn" type="button">Reserve Rocket</button>
            : <button onClick={() => flip()} key={rocket.id} className="reserved" type="button">Cancel Reservation</button>}
        </div>
      </article>
    ));
  } else if (rocketStatus === 'failed') {
    content = <div>{error}</div>;
  }
  return (
    <section className="rockets-list">
      {content}
    </section>
  );
};
export default Rockets;
