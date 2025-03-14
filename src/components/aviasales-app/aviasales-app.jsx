import TicketList from "../ticket-list/ticket-list";
import TransferFilter from "../transfer-filter/transfer-filter";
import ShowMoreButton from "../show-more-button/show-more-button";
import TicketFilter from "../ticket-filter/ticket-filter";
import styles from "./aviasales-app.module.scss";
import logo from "./logo.svg";

export default function AviasalesApp() {
  return (
    <>
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className={styles.container}>
        <TransferFilter />
        <div className={styles.tickets}>
          <TicketFilter />
          <TicketList />
          <ShowMoreButton />
        </div>
      </div>
    </>
  );
}
