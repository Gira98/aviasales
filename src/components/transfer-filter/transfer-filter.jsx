import styles from './transfer-filter.module.scss'

export default function TransferFilter() {
  return (
    <aside className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>Количество пересадок</div>
        <div className={styles.checkboxes}>
          <form className={styles.form}>
            <label className={styles.label}>
              <input className={styles.checkbox} type="checkbox" name="transfers" value='All'/>
                Все
              </label>
            <label className={styles.label}>
              <input className={styles.checkbox} type="checkbox" name="transfers" value='Without a transfer'/>
              Без пересадок
            </label>
            
            <label className={styles.label}>
              <input className={styles.checkbox} type="checkbox" name="transfers" value='1 transfer'/>
              1 пересадка
            </label>
            
            <label className={styles.label}>
              <input className={styles.checkbox} type="checkbox" name="transfers" value='2 transfers'/>
              2 пересадки
            </label>
            
            <label className={styles.label}>
              <input className={styles.checkbox} type="checkbox" name="transfers" value='3 transfers'/>
              3 пересадки
            </label>
          </form>
        </div>
      </div>
    </aside>
  )
}