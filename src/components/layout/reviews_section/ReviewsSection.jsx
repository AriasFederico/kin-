import { motion } from 'framer-motion';
import { iconMap } from '../../../data/iconMap';
import { Badge, Rating } from '../../ui';
import { SectionLayout } from '..';
import styles from './ReviewsSection.module.scss';

export const ReviewsSection = ({ data }) => {
  const Google = iconMap.google;
  const Stars = iconMap.star;

  const { badge, title, rating_card, reviews_cards } = data;
  return (
    <SectionLayout bgVariant={'soft'}>
      <div className={styles.topSection}>
        <div className={styles.header}>
          <Badge label={badge} />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className={styles.title}
          >
            {title}
          </motion.h2>
        </div>
        <Rating average={rating_card.average} stars={rating_card.stars} />
        {/* rating component */}
      </div>

      <motion.div
        className={styles.items}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {reviews_cards?.map(({ avatar, name, stars, review }) => (
          <div key={avatar} className={styles.reviewCard}>
            <div className={styles.header}>
              <div className={styles.user}>
                <p className={styles.avatar}>{name[0].toUpperCase()}</p>
                <p>{name}</p>
              </div>
              <Google size={20} />
            </div>
            <div className={styles.stars}>
              {[...Array(stars)].map((_, index) => (
                <Stars size={14} key={(_, index)} className={styles.starIcon} />
              ))}
            </div>
            <p className={styles.review}>{review}</p>
          </div>
        ))}
      </motion.div>
    </SectionLayout>
  );
};
