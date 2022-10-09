import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { randomColor, invertHex } from 'components/utilit/utils';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(el => {
          const randomHex = randomColor();
          return (
            <li
              className={css.item}
              key={el.id}
              style={{
                backgroundColor: `#${randomHex}`,
                color: `#${invertHex(randomHex)}`,
              }}
            >
              <span className={css.label}>{el.label}</span>
              <span className={css.percentage}>{el.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
