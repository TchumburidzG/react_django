import whatsAppIcon from '../../assets/icons/whatsapp.svg';
export const WhatsApp = () => {
  const phoneNumber = '+995511334477'
  const message = 'გამარჯობა'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a className='whatsapp-container  padding' href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <img className='draging' src={whatsAppIcon} alt="whatsapp"/>
    </a>
  );
};
