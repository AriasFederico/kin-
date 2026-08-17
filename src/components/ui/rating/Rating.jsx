import { motion } from 'framer-motion';
import { iconMap } from '../../../data/iconMap';
import styles from './Rating.module.scss';

export const Rating = ({ stars, average }) => {
  const Star = iconMap.star;
  const Google = iconMap.google;
  return (
    <motion.div
      className={styles.rating}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.35 }}
    >
      <Google size={30} />
      <div className={styles.content}>
        <div className={styles.averageContainer}>
          <p className={styles.average}>{average}</p>
          <div className={styles.stars}>
            {[...Array(stars)].map((_, index) => (
              <Star key={(_, index)} className={styles.star} size={16} />
            ))}
          </div>
        </div>
        <span className={styles.span}>Basado en reseñas de Google</span>
      </div>
    </motion.div>
  );
};
