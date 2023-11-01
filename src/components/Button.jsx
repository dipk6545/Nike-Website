const Button = ({ 
  label, 
  iconURL, 
  backgroundColor, 
  borderColor, 
  textColor,
  fullWidth
}) => {
  const buttonClass = `flex justify-center items-center gap-2 px-7 py-4 
    border font-montserrat leading-none rounded-full ${fullWidth && 'w-full'} ${
      backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 
      "bg-coral-red text-white border-coral-red" 
    }`;

  return (
    <button className={buttonClass}>
      {label}
      {iconURL && (
        <img src={iconURL} alt="arrowRight" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
