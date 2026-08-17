import { iconMap } from '../../../data/iconMap';
import { Logo } from '../../ui';
import { SectionLayout } from '..';
import styles from './Footer.module.scss';

export const Footer = ({ data }) => {
  const { text, visit_us, rrss, copyright } = data;
  return (
    <footer className={styles.footer}>
      <div className={styles.itemsFlex}>
        <div className={styles.header}>
          <Logo size={'sm'} />
          <p className={styles.text}>{text}</p>
        </div>

        <div className={styles.itemsContainer}>
          <p className={styles.title}>{visit_us.label}</p>
          <div className={styles.items}>
            {visit_us?.items?.map(({ icon, label }) => {
              const Icon = iconMap[icon];
              return (
                <div key={icon} className={styles.itemInfo}>
                  <Icon size={16} className={styles.icon} />
                  <p>{label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.itemsContainer}>
          <p className={styles.title}>{rrss.label}</p>
          <div className={styles.items}>
            {rrss?.items?.map(({ icon, label, href }) => {
              const Icon = iconMap[icon];
              return (
                <div key={icon} className={styles.itemInfo}>
                  <Icon size={16} className={styles.icon} />
                  <a href={href}>{label}</a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.copyrightContainer}>
        <p>{copyright.label}</p>
        <a href='https://www.codefex.site/'>{copyright.by_codefex}</a>
      </div>
    </footer>
  );
};
