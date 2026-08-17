import { motion } from 'framer-motion';
import { Badge, Profesional } from '../../ui';
import { SectionLayout } from '..';
import styles from './TeamSection.module.scss';

export const TeamSection = ({ data }) => {
  const { badge, title, subtitle, info } = data;
  return (
    <SectionLayout bgVariant={'soft'}>
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
      </div>
      <motion.div
        className={styles.info}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {info?.map(({ avatar, name, speciality, service, mn, cta }) => (
          <Profesional
            key={mn}
            avatar={avatar}
            cta={cta}
            name={name}
            mn={mn}
            speciality={speciality}
            service={service}
          />
        ))}
      </motion.div>
    </SectionLayout>
  );
};
