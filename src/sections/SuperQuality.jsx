import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  const title = 'We Provide You Super Quality Shoes';
  const infoText1 = 'Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.';
  const infoText2 = 'Our dedication to detail and excellence ensures your satisfaction';

  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          {title} <span className="text-coral-red">Super Quality</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">{infoText1}</p>
        <p className="mt-6 lg:max-w-lg info-text">{infoText2}</p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={570} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
