import { motion } from 'framer-motion';
import { Badge } from '../../ui';
import { SectionLayout } from '..';
import styles from './ServicesSection.module.scss';

export const ServicesSection = ({ data }) => {
  const { badge, title, text, info } = data;
  return (
    <SectionLayout bgVariant={'dark'}>
      <div className={styles.header}>
        <Badge label={badge} />
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          {text}
        </motion.p>
      </div>
      <motion.div
        className={styles.info}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {info?.map(({ title, desc }, index) => (
          <div key={index} className={styles.card}>
            <span className={styles.id}>0{index + 1}</span>
            <p className={styles.title}>{title}</p>
            <span className={styles.desc}>{desc}</span>
          </div>
        ))}
      </motion.div>
    </SectionLayout>
  );
};
