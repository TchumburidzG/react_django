import tiktokIcon from '../../assets/icons/tiktok.svg';

export const TikTok = () => {
  const tiktokUrl = `https://www.tiktok.com/@cleaningtools.ge`;

  return (
    <a className='messenger-container padding' href={tiktokUrl} target="_blank" rel="noopener noreferrer">
      <img className='draging' src={tiktokIcon} alt="tiktok"/>
    </a>
  );
};
