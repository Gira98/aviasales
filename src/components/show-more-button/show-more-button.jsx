import styles from './show-more-button.module.scss'
import { showMore, selectFilteredTickets } from '../slice/serverSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function ShowMoreButton () {
  const err = useSelector(state => state.tickets.showError)
  const dispatch = useDispatch()

  const filteredFlights = useSelector(selectFilteredTickets)

  return (
      <button className={styles.button} onClick={() => dispatch(showMore())} hidden={filteredFlights.length === 0 || err}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
  )
}