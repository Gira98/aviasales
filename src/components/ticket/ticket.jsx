import styles from "./ticket.module.scss";
import classNames from "classnames";
import { format, addMinutes } from "date-fns";

export default function Ticket({ price, carrier, segments }) {
  
  const getDuration = (min) => {
    const hours = min / 60;
    const minutes = min % 60;

    return `${Math.floor(hours)}ч ${minutes}м`;
  };

  const formatDate = (time, duration) => {
    const departureTime = format(time, "HH:mm");
    const arrivalTime = addMinutes(time, duration);
    const formatedArrivalTime = format(arrivalTime, "HH:mm");

    return `${departureTime} – ${formatedArrivalTime}`;
  };

  return (
    <li className={styles.ticket}>
      <div className={styles.header}>
        <span className={styles.price}>{price} Р</span>
        <img
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          alt="airline logo"
          className={styles.airlineLogo}
        />
      </div>

      <div className={styles.container}>
        {segments.map((flight) => (
          <div key={flight.date} className={styles.details}>
            <div className={classNames(styles.route, styles.info)}>
              <span className={styles.headers}>
                {flight.origin} – {flight.destination}
              </span>
              <div>
                <span>{formatDate(flight.date, flight.duration)}</span>
              </div>
            </div>
            <div className={classNames(styles.duration, styles.info)}>
              <span className={styles.headers}>В пути:</span>
              <span>{getDuration(flight.duration)}</span>
            </div>
            <div className={classNames(styles.transfers, styles.info)}>
              <span className={styles.headers}>
                {flight.stops.length === 0
                  ? "Без пересадок"
                  : `${flight.stops.length} ПЕРЕСАД${flight.stops.length === 1 ? "КА" : "КИ"}`}
              </span>
              <span>
                {!(flight.stops.length === 0) ? flight.stops.join(", ") : "–"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </li>
  );
}
