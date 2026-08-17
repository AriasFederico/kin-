import './App.scss';
import {
  AboutSection,
  CoverageSection,
  CtaSection,
  Footer,
  Header,
  HeroSection,
  LocationSection,
  ReviewsSection,
  ServicesSection,
  TeamSection,
} from './components/layout';
import { dataKine } from './data/data';

function App() {
  const {
    header,
    hero,
    reviews,
    about,
    services,
    team,
    coverage,
    location,
    cta_section,
    footer,
  } = dataKine;

  return (
    <>
      <Header data={header} />
      <HeroSection data={hero} />
      <AboutSection data={about} />
      <ServicesSection data={services} />
      <TeamSection data={team} />
      <CoverageSection data={coverage} />
      <LocationSection data={location} />
      <ReviewsSection data={reviews} />
      <CtaSection data={cta_section} />
      <Footer data={footer} />
    </>
  );
}

export default App;
