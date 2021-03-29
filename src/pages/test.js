import { Card } from 'components/Card';
import styles from './index.module.css';

export const Test = () => (
  <div className={styles.test}>
    <div className={styles.layout}>
      <Card style={styles.item} />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);
