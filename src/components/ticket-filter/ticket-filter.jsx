import styles from './ticket-filter.module.scss'

export default function TicketFilter () {
  return (
    <div>
      <ul className={styles.filterList}>
        <li className={styles.item}>
          <button className={styles.button}>
              САМЫЙ ДЕШЕВЫЙ
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.button}>
              САМЫЙ БЫСТРЫЙ
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.button}>
              ОПТИМАЛЬНЫЙ
          </button>
        </li>
      </ul>
    </div>
  )
}