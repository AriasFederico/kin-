import { motion } from 'framer-motion';
import { ButtonCta } from '../../ui';
import { SectionLayout } from '..';
import styles from './CtaSection.module.scss';

export const CtaSection = ({ data }) => {
  const { title, subtitle, cta } = data;
  return (
    <SectionLayout bgVariant={'soft'}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.15 }}
      >
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
        <ButtonCta
          icon={cta.icon}
          label={cta.label}
          variant={cta.variant}
          href={cta.href}
        />
      </motion.div>
    </SectionLayout>
  );
};
