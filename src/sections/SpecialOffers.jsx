import { arrowRight } from '../assets/icons';
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  const imgProps = {
    src: offer,
    alt: "offer",
    width: 773,
    height: 687,
    className: "object-contain w-full"
  };

  const titleProps = {
    className: "font-palanquin text-4xl capitalize font-bold lg:max-w-lg"
  };

  const textProps = {
    className: "mt-4 lg:max-w-lg info-text"
  };

  const buttonsProps = {
    className: "mt-11 flex flex-wrap gap-4"
  };

  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img {...imgProps} />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 {...titleProps}>
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p {...textProps}>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p {...textProps}>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us
          is nothing short of exceptional.
        </p>
        <div {...buttonsProps}>
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-grey"
            textColor="text-slate-grey"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
