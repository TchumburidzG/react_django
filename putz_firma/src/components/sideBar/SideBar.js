import { Sidebar } from 'flowbite-react';
import { Modal } from '../Modal/Modal';
import { Link } from "react-router-dom";
import home from '../../assets/icons/home.svg';
import contact from '../../assets/icons/contact.svg';

const SideBar = ({ showMenu, setShowMenu }) => {

  return (
    <Modal onClose={setShowMenu}>
      <div className={`sidebar-container ${showMenu ? 'sidebar-open' : ''}`}>
        <Sidebar className="vertical-sidebar">
          <Sidebar.Items className="vertical-items">
            <Sidebar.ItemGroup className="vertical-sidebar group">
              <Sidebar.Item  className='sidebar-names'>
                <Link to="/">
                  <img className='sidebar-icon' src={home} alt="home page"/> მთავარი</Link>
              </Sidebar.Item>
              <Sidebar.Item  className='sidebar-names'>
                <Link to="/contact">
                  <img className='sidebar-icon' src={contact}  alt="contact page"/>კონტაქტი</Link>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </Modal>
  );
};

export default SideBar;
