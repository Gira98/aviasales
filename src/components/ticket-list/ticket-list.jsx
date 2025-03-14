import Ticket from "../ticket/ticket"
import styles from './ticket-list.module.scss'

export default function TicketList () {
  return (
  <ul className={styles.list}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
  </ul>
  )
}