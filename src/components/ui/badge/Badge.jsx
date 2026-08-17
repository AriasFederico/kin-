import { motion } from 'framer-motion';
import styles from './Badge.module.scss';

export const Badge = ({ label, variant }) => {
  // const IconLeft = iconMap[iconLeft];
  // const IconRight = iconMap[iconRight];

  return (
    <motion.div
      className={`${styles.badge} ${styles[variant]}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.15 }}
    >
      <span className={styles.label}>{label}</span>
    </motion.div>
  );
};
