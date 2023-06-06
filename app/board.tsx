import styles from 'app/styles/board.module.css';
import Matrix from './matrix';

export default function Board() {
  return (
    <div className={styles.board}>
      <Matrix />
    </div>
  )
}