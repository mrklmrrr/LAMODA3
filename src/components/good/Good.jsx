import styles from "./Good.module.css";

export default function Good({
  name,
  description,
  color,
  price,
  rating,
  imgUrl,
  category,
}) {
  return (
    <div className={styles.container}>
      <img src={imgUrl} alt={name} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.color}>
        Цвет:{" "}
        <span className={styles.color__plate} style={{ color: `${color}` }}>
          {color}
        </span>
      </p>
      <p className={styles.category}>Категория: {category}</p>
      <p className={styles.price}>Цена: {price} BYN</p>
      <p className={styles.rating}>Рейтинг: {rating}</p>
    </div>
  );
}