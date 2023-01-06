import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getRockets, toggleReserve,
} from '../Redux/rockets/rocketsSlice';

import './rocket.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketList = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rocketList.length) {
      return;
    }
    dispatch(getRockets());
  }, [dispatch, rocketList.length]);

  const content = rocketList.map((rocket) => (
    <article key={rocket.id}>
      <img className="rocket-img" src={rocket.flickr_images[0]} alt={rocket.name} />
      <div className="rocket-details">
        <h1>{rocket.rocket_name}</h1>
        <p>
          {rocket.reserved ? <span className="reserve-tag">Reserved</span> : ''}
          {rocket.description}
        </p>
        {!rocket.reserved
          ? <button onClick={() => dispatch(toggleReserve(rocket.id))} key={rocket.id} className="reserve-btn" type="button">Reserve Rocket</button>
          : <button onClick={() => dispatch(toggleReserve(rocket.id))} key={rocket.id} className="reserved" type="button">Cancel Reservation</button>}
      </div>
    </article>
  ));
  return (
    <section className="rockets-list">
      {content}
    </section>
  );
};
export default Rockets;
