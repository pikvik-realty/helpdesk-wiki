import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Поиск недвижимости',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Мы предоставляем возможность найти <code>подходящее жильё</code> по вашим критериям, будь то квартира, дом или коммерческая недвижимость
      </>
    ),
  },
  {
    title: 'Размещение объявлений',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <code>Легко и быстро</code> размещайте свои объявления о продаже или аренде недвижимости
      </>
    ),
  },
  {
    title: 'Удобный интерфейс',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Наше приложение интуитивно понятно и удобно в использовании как для профессионалов рынка недвижимости, так и для обычных пользователей
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
