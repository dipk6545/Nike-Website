import { Hero, PopularProducts, SuperQuality, Services, SpecialOffers, CustomerReviews, Subscribe, Footer } from './sections';
import Nav from './components/Nav';
const App = () => {
  const sections = [
    { component: Nav },
    { component: Hero, className: 'xl:padding-l wide:padding-r padding-b' },
    { component: PopularProducts, className: 'padding' },
    { component: SuperQuality, className: 'padding' },
    { component: Services, className: 'padding-x py-10' },
    { component: SpecialOffers, className: 'padding' },
    { component: CustomerReviews, className: 'bg-pale-blue padding' },
    { component: Subscribe, className: 'padding-x sm:py-32 py-16 w-full' },
    { component: Footer, className: 'bg-black padding-x padding-x padding-t pb-8' },
  ];

  return (
    <main className='relative'>
      {sections.map((section, index) => (
        <section key={index} className={section.className}>
          <section.component />
        </section>
      ))}
    </main>
  );
};

export default App;