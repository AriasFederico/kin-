import { motion } from 'framer-motion';
import { iconMap } from '../../../data/iconMap';
import { Badge, ButtonCta } from '../../ui';
import { HeroLayout } from '..';
import styles from './HeroSection.module.scss';

export const HeroSection = ({ data }) => {
  const { badge, title, subtitle, ctas, info } = data;

  return (
    <HeroLayout bgImage>
      <div className={styles.container}>
        <Badge label={badge} variant='bg' />

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {ctas?.map(({ label, href, variant, icon }) => (
            <ButtonCta
              key={label}
              href={href}
              variant={variant}
              label={label}
              icon={icon}
            />
          ))}
        </motion.div>

        <motion.div
          className={styles.infoItems}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65 }}
        >
          {info?.map(({ label, icon }) => {
            const Icon = iconMap[icon];
            return (
              <div className={styles.infoItem} key={icon}>
                <Icon size={14} className={styles.icon} />
                <p>{label}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </HeroLayout>
  );
};
