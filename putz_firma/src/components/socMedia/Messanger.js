
import messengerIcon from '../../assets/icons/messenger.svg';
export const Messenger = () => {
  const messengerUrl = 'https://www.facebook.com/Cleaningtoolstbilisi?mibextid=eQY6cl';

  return (
    <a className='messenger-container padding' href={messengerUrl} target="_blank" rel="noopener noreferrer">
      <img className='draging' src={messengerIcon} alt="facebook" />
    </a>
  );
};