import styles from './App.module.css';
import Player from '../Player/Player';

function App() {
  return (
    <div className={styles.app}>
      <Player />
      <div>test changes</div>
      <div>important changes</div>
    </div>
  );
}

export default App;
