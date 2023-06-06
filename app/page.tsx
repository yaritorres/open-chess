import Board from './board';
import styles from './styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.boardContainer}>
        <Board />
      </div>
    </main>
  )
}
