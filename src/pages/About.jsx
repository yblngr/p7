import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import aboutBanner from '../assets/about.webp';
import styles from './About.module.scss';

function About() {
  const about = [
    {
      label: 'Fiabilité',
      article:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,\
        et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      label: 'Respect',
      article:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de \
        perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      label: 'Service',
      article:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous \
        contacter si vous avez la moindre question.",
    },
    {
      label: 'Sécurité',
      article:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement \
        correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au \
        locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons \
        également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <main className={styles.default}>
      <Banner className={styles.banner} image={aboutBanner} />
      {about.map(({ label, article }, index) => (
        <Collapse className={styles.collapse} key={`about-${index}`} label={label}>
          <p>{article}</p>
        </Collapse>
      ))}
    </main>
  );
}

export default About;
