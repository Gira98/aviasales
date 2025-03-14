import styles from "./ticket.module.scss";
import classNames from "classnames";

export default function Ticket({
  price = "13 400",
  departure = "MOW",
  arrival = "HKT",
  duration = "21ч 20м",
  transfers = 2,
  airline = "победа",
  departureTime = "08:55",
  arrivalTime = " – 17:35",
}) {
  return (
    <li className={styles.ticket}>
      <div className={styles.header}>
        <span className={styles.price}>{price} Р</span>
        <img src={airline.logo} alt="oops" className={styles.airlineLogo} />
      </div>

      <div className={styles.container}>
        <div className={styles.details}>
          <div className={classNames(styles.route, styles.info)}>
            <span className={styles.headers}>
              {departure} – {arrival}
            </span>
            <div>
              <span>{departureTime}</span>
              <span>{arrivalTime}</span>
            </div>
          </div>
          <div className={classNames(styles.duration, styles.info)}>
            <span className={styles.headers}>В пути:</span>
            <span>{duration}</span>
          </div>
          <div className={classNames(styles.transfers, styles.info)}>
            <span className={styles.headers}>
              {transfers} ПЕРЕСАД{transfers === 1 ? "КА" : "КИ"}
            </span>
            <span>HKG, JNB</span>
          </div>
        </div>
        <div className={styles.details}>
          <div className={classNames(styles.route, styles.info)}>
            <span className={styles.headers}>
              {departure} – {arrival}
            </span>
            <div>
              <span>{departureTime}</span>
              <span>{arrivalTime}</span>
            </div>
          </div>
          <div className={classNames(styles.duration, styles.info)}>
            <span className={styles.headers}>В ПУТИ:</span>
            <span>{duration}</span>
          </div>
          <div className={classNames(styles.transfers, styles.info)}>
            <span className={styles.headers}>
              {transfers} ПЕРЕСАД{transfers === 1 ? "КА" : "КИ"}
            </span>
            <span>HKG</span>
          </div>
        </div>
      </div>
    </li>
  );
}
