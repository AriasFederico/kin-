import './App.scss';
import {
  AboutSection,
  CoverageSection,
  Header,
  HeroSection,
  LocationSection,
  ReviewsSection,
  ServicesSection,
  TeamSection,
} from './components/layout';
import { dataKine } from './data/data';

function App() {
  const { header, hero, reviews, about, services, team, coverage, location } =
    dataKine;

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
    </>
  );
}

export default App;
