import styles from 'app/styles/board.module.css';

export default function Board() {
  const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
  let lastSquare = 'w';
  let switchCounter = 0;
  let rowCounter = 0;

  return (
    <div className={styles.board}>
      {/* {verticalAxis.map((row, rowKey) => {
        return (
          <div key={rowKey} className={styles.rowContainer}>
            {horizontalAxis.map((square, key) => {
              if (switchCounter === 8) {
                rowCounter++;
                if (rowCounter % 2) {
                  lastSquare = 'b';
                  switchCounter = 0;
                } else {
                  lastSquare = 'w';
                  switchCounter = 0;
                }
              }

              if (lastSquare === 'w') {
                lastSquare = 'b';
                switchCounter++;
                return (
                  <div className={styles.wSquare} key={{square}}>
                    {square}{verticalAxis[verticalAxis.length - (rowKey + 1)]}
                  </div>
                )
              } else {
                switchCounter++
                lastSquare = 'w';
                return (
                  <div className={styles.bSquare} key={key}>
                    {square}{verticalAxis[verticalAxis.length - (rowKey + 1)]}
                  </div>
                )
              }
            })}
          </div>
        )
      })} */}
      <div className={styles.rowContainer}>
        {horizontalAxis.map((row, rowKey) => {
          if (switchCounter === 8) {
            rowCounter++;
            if (rowCounter % 2) {
              lastSquare = 'b';
              switchCounter = 0;
            } else {
              lastSquare = 'w';
              switchCounter = 0;
            }
          }

          if (lastSquare === 'w') {
            lastSquare = 'b';
            switchCounter++;
            return (
              <div key={rowKey} className={styles.wSquare}>
                {row}{verticalAxis[verticalAxis.length - (rowKey + 1)]}
              </div>
            )
          } else {
            switchCounter++
            lastSquare = 'w';
            return (
              <div key={rowKey} className={styles.bSquare}>
                {row}{verticalAxis[verticalAxis.length - (rowKey + 1)]}
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}