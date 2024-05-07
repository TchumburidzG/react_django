export const Modal = ({  onClose, children }) => {
  const closeModal = () => {
    onClose(false);
  };
  return (
    <div className="modal-overlay" onClick={closeModal}>
 
        {children}
    
    </div>
  );
};