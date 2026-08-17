import { iconMap } from '../../../data/iconMap';
import styles from './Profesional.module.scss';
export const Profesional = ({ avatar, name, speciality, service, mn, cta }) => {
  const Icon = iconMap.whatsapp;

  return (
    <div className={styles.profesional}>
      <div className={styles.profile}>
        <p className={styles.avatar}>{avatar}</p>
        <div className={styles.user}>
          <p className={styles.name}>{name}</p>
          <span className={styles.speciality}>{speciality}</span>
        </div>
      </div>

      <p className={styles.service}>{service}</p>

      <div className={styles.contact}>
        <span className={styles.mn}>N.M {mn}</span>
        <a href={cta.href} className={styles.cta}>
          <Icon />
          {cta.label}
        </a>
      </div>
    </div>
  );
};
