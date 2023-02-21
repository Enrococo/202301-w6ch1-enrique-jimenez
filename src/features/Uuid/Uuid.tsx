import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from './Uuid.module.css';
import { randomUuid, selectUuid, selectUuidState } from './uuidSlice';

export function Uuid() {
  const uuid = useAppSelector(selectUuid);
  const dispatch = useAppDispatch();
  const uuidStatus = useAppSelector(selectUuidState);
  return (
    <div className={styles.row}>
      <span className={styles.value}>{uuid}</span>
      <button
        className={
          uuidStatus === 'loading' ? styles.asyncButton : styles.button
        }
        aria-label="Random UUID Button"
        onClick={() => dispatch(randomUuid())}
      >
        Random UUID
      </button>

      {/* <button
        className={styles.button}
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        N random UUIDs
      </button>
      <button
        className={styles.button}
        aria-label="Decrement value"
        onClick={() => dispatch(reset())}
      >
        Show More
      </button> */}
    </div>
  );
}
