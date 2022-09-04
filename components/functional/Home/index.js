import Hero from './Hero';
import SectionA from './SectionA';
import SectionB from './SectionB';
import SectionC from './SectionC';
import SectionD from './SectionD';
import SectionE from './SectionE';
import ContactUs from './ContactUs';
import Footer from '../Layout/Footer';

export default function Home({ props }) {
  return (
    <>
      <Hero />
      <SectionA />
      <SectionB props={props} />
      <SectionC />
      <SectionD />
      <SectionE />
      <ContactUs />
      <Footer />
    </>
  );
}
