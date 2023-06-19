import styles from 'app/styles/board.module.css';

export default function Board() {
  const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
  let lastSquare = 1;
  let switchCounter = 0;
  let rowCounter = 0;

  return (
    <div className={styles.board}>
      {verticalAxis.map((row, rowKey) => {
        return (
          <div key={rowKey} className={styles.rowContainer}>
            {horizontalAxis.map((square, key) => {
              if (switchCounter === 8) {
                rowCounter++;
                if (rowCounter % 2) {
                  lastSquare = 2;
                  switchCounter = 0;
                } else {
                  lastSquare = 1;
                  switchCounter = 0;
                }
              }

              if (lastSquare === 1) {
                lastSquare = 2;
                switchCounter++;
                return (
                  <div className={styles.wSquare} key={{square}}>
                    {square}{verticalAxis[verticalAxis.length - (rowKey + 1)]}
                  </div>
                )
              } else {
                switchCounter++
                lastSquare = 1;
                return (
                  <div className={styles.bSquare} key={key} onClick={() => }>
                    {square}{verticalAxis[verticalAxis.length - (rowKey + 1)]}
                  </div>
                )
              }
            })}
          </div>
        )
      })}
    </div>
  )
}