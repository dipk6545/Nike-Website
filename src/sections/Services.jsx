import ServiceCard from '../components/ServiceCard'
import { services } from '../constants'

const Services = () => {
  const renderServices = () => services.map((service) => <ServiceCard key={service.label} {...service} />);

  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {renderServices()}
    </section>
  );
};

export default Services