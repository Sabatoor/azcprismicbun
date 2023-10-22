import Image from 'next/image';
import azclogodark from '../../public/azc_100x100_dark.png';
import azclogolight from '../../public/azc_100x100.png'; // Import the light logo

type LogoAZCprops = {
  className?: string;
  theme?: 'dark' | 'light'; // Add a theme prop
}

const LogoAZC = ({ className, theme = 'dark' }: LogoAZCprops) => {
  const logoSrc = theme === 'light' ? azclogolight : azclogodark;
  
  return (
    <Image
      src={logoSrc} // Use the logoSrc based on the theme prop
      alt="AZ Copywriting Logo" 
      height={50}
      width={50}
      className={className}
    />
  );
};

export default LogoAZC;
