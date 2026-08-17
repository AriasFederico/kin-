import { motion } from 'framer-motion';
import { iconMap } from '../../../data/iconMap';
import { Badge, ButtonCta, MapComponent } from '../../ui';
import { SectionLayout } from '..';
import styles from './LocationSection.module.scss';

export const LocationSection = ({ data }) => {
  const { title, badge, info, cta, coordenates } = data;
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
      </div>

      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.35 }}
      >
        <div className={styles.content}>
          {info?.map(({ label, icon, span }) => {
            const Icon = iconMap[icon];
            return (
              <div className={styles.infoItem} key={icon}>
                <Icon size={18} className={styles.icon} />
                <div className={styles.itemFlex}>
                  <p>{label}</p>
                  <span>{span}</span>
                </div>
              </div>
            );
          })}
          <ButtonCta
            icon={cta.icon}
            label={cta.label}
            size={cta.size}
            href={cta.href}
          />
        </div>

        <div className={styles.mapContainer}>
          <MapComponent coordenates={coordenates} />
        </div>
      </motion.div>
    </SectionLayout>
  );
};
