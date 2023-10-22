import Image from 'next/image';
// import azclogo from '../../public/azc_100x100.png'
import azclogodark from '../../public/azc_100x100_dark.png'

type LogoAZCprops = {
  className?: string
}

const LogoAZC = ({className}: LogoAZCprops) => {
  return (
    <Image
      src={azclogodark} // Path to your image inside the 'public' directory
      alt="AZ Copywriting Logo" 
      height={50} // original size is 100x100
      width={50}
      className={className}
    />
  );
};

export default LogoAZC;
