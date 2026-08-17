import { motion } from 'framer-motion';
import { Badge } from '../../ui';
import { SectionLayout } from '..';
import styles from './CoverageSection.module.scss';

export const CoverageSection = ({ data }) => {
  const { badge, title, subtitle, items, cta } = data;
  return (
    <SectionLayout bgVariant={'soft'}>
      <div className={styles.container}>
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
            {subtitle}
          </motion.p>
          <motion.a
            href={cta.href}
            className={styles.cta}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {cta.label}
          </motion.a>
        </div>

        <motion.div
          className={styles.items}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65 }}
        >
          {items?.map((item, index) => (
            <p key={index} className={styles.item}>
              {item}
            </p>
          ))}
        </motion.div>
      </div>
    </SectionLayout>
  );
};
