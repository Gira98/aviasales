import Ticket from "../ticket/ticket"
import styles from './ticket-list.module.scss'
import { useSelector } from "react-redux";
import { selectFilteredTickets } from "../slice/serverSlice";
import { Spin } from "antd";

export default function TicketList () {
  const filteredFlights = useSelector(selectFilteredTickets)
  const status = useSelector(state => state.tickets.status)

  const arr = filteredFlights.map((flight) => {
        return <Ticket key={`${flight.price}/${flight.segments[0].date}`} price={flight.price} carrier={flight.carrier} segments={flight.segments} />
        })

  return (
  <ul className={styles.list}>
  <div className={styles.info}>
    <Spin spinning={status === 'loading' && arr.length !== 0} />
    <div>{arr.length === 0 && 'Рейсов, подходящих под заданные фильтры не найдено'}</div>
  </div>
  {arr}
  </ul>
  )
}