// importar aca data.logo
import { dataKine } from '../../../data/data';
import styles from './Logo.module.scss';

{
  /* <img src={stc} alt={alt} /> */
}
{
  /* en caso de tener imagen envolver los nombres en div.flex */
}

export const Logo = ({ size }) => {
  const { branding } = dataKine;
  return (
    <a href={branding.logo.href} className={styles.logo}>
      <p className={`${styles.clinicName} ${styles[size]}`}>
        {branding.clinicName}
      </p>
      <span className={styles.secondName}>{branding.secondName}</span>
    </a>
  );
};
