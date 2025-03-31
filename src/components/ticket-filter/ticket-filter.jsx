import styles from "./ticket-filter.module.scss";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import { toggledFilter } from "../slice/filterSlice";

export default function TicketFilter() {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter.filter)

  const onToggle = (e) => {
    dispatch(toggledFilter({ name: e.target.name }))
  };


  return (
    <div>
      <ul className={styles.filterList}>
        <li className={styles.item}>
          <button className={classNames(styles.button, {[styles.active]: filter === 'cheapest'})} name="cheapest" onClick={onToggle}>
            САМЫЙ ДЕШЕВЫЙ
          </button>
        </li>
        <li className={styles.item}>
          <button className={classNames(styles.button, {[styles.active]: filter === 'fastest'})} name="fastest" onClick={onToggle}>
            САМЫЙ БЫСТРЫЙ
          </button>
        </li>
        <li className={styles.item}>
          <button className={classNames(styles.button, {[styles.active]: filter === 'optimal'})} name="optimal" onClick={onToggle}>
            ОПТИМАЛЬНЫЙ
          </button>
        </li>
      </ul>
    </div>
  );
}
