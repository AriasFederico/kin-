import styles from './SectionLayout.module.scss';
export const SectionLayout = ({ children, bgVariant, direction, id }) => {
  return (
    <section className={`${styles.section} ${styles[bgVariant]}`} id={id}>
      <div className={`${styles.container} ${styles[direction]}`}>
        {children}
      </div>
    </section>
  );
};
