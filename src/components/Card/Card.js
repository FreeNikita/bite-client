import styles from './index.module.css';

export const Card = (props) => {
  const { style } = props;
  return (
    <div
      className={`${styles.container} ${style}`}
    >
      asd
    </div>
  );
};
