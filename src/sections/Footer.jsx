import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  const renderSocialIcons = () => {
    return socialMedia.map((icon) => (
      <div
        className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
        key={icon.alt}
      >
        <img src={icon.src} alt={icon.alt} width={24} height={24} />
      </div>
    ));
  };

const renderFooterLinks = () => {
  return footerLinks.map(({title, links}) => {
    const titleElement = (
      <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
        {title}
      </h4>
    );
    const linkElements = links.map(({name, link}) => (
      <li
        className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
        key={name}
      >
        <a href={link}>{name}</a>
      </li>
    ));
    return (
      <div key={title}>
        {titleElement}
        <ul>
          {linkElements}
        </ul>
      </div>
    );
  });
};

  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img
              src={footerLogo}
              alt='logo'
              width={150}
              height={46}
              className='m-0'
            />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {renderSocialIcons()}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {renderFooterLinks()}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;