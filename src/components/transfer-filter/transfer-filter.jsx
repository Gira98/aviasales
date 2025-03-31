import styles from './transfer-filter.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { toggledCheckbox } from '../slice/checkboxSlice'

const isElChecked = (checkboxes, name) => checkboxes.find((el) => el.name === name).checked

export default function TransferFilter() {
  const checkboxes = useSelector(state => state.checkbox.checkboxes)
  const dispatch = useDispatch()
  
  const onToggle = (e) => {
    dispatch(toggledCheckbox({name: e.target.value, checked: e.target.checked}))
  }


  return (
    <aside className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>Количество пересадок</div>
        <div className={styles.checkboxes}>
          <form className={styles.form}>
            <label className={styles.label}>
              <input className={styles.checkbox} type="checkbox" name="transfers" value='all' checked={isElChecked(checkboxes,'all')} onChange={onToggle}/>
                Все
              </label>
            <label className={styles.label}>
              <input className={styles.checkbox} type="checkbox" name="transfers" value='without transfers' checked={isElChecked(checkboxes,'without transfers')} onChange={onToggle}/>
              Без пересадок
            </label>
            
            <label className={styles.label}>
              <input className={styles.checkbox} type="checkbox" name="transfers" value='one transfer' checked={isElChecked(checkboxes,'one transfer')} onChange={onToggle}/>
              1 пересадка
            </label>
            
            <label className={styles.label}>
              <input className={styles.checkbox} type="checkbox" name="transfers" value='two transfers' checked={isElChecked(checkboxes,'two transfers')} onChange={onToggle}/>
              2 пересадки
            </label>
            
            <label className={styles.label}>
              <input className={styles.checkbox} type="checkbox" name="transfers" value='three transfers' checked={isElChecked(checkboxes,'three transfers')} onChange={onToggle}/>
              3 пересадки
            </label>
          </form>
        </div>
      </div>
    </aside>
  )
}