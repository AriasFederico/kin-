import { ButtonCta, Logo } from '../../ui';
import styles from './Header.module.scss';

export const Header = ({ data }) => {
  const { navLinks, cta } = data;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.nav}>
          {navLinks?.map(({ id, href, label }) => (
            <a href={href} key={id}>
              {label}
            </a>
          ))}
        </nav>
        <ButtonCta
          label={cta.label}
          variant={cta.variant}
          icon={cta.icon}
          size='sm'
        />
      </div>
    </header>
  );
};
