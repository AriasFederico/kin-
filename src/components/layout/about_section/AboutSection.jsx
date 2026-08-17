import { motion } from 'framer-motion';
import { Badge } from '../../ui';
import { SectionLayout } from '../';
import styles from './AboutSection.module.scss';

export const AboutSection = ({ data }) => {
  const { badge, title, text, media, info } = data;
  return (
    <SectionLayout bgVariant={'soft'}>
      <div className={styles.container}>
        <motion.div
          className={styles.media}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          <img src={media} alt='' />
        </motion.div>

        <div className={styles.content}>
          <Badge label={badge} />
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.35 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className={styles.text}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {text}
          </motion.p>

          <motion.div
            className={styles.info}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.65 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {info?.map(({ exp, span }) => (
              <div className={styles.infoItem} key={exp}>
                <p>{exp}</p>
                <span>{span}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionLayout>
  );
};
