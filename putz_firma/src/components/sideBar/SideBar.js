import { Sidebar } from 'flowbite-react';
import { Modal } from '../Modal/Modal';
import { Link } from "react-router-dom";
import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as Contact } from '../../assets/icons/contact.svg';

const SideBar = ({ showMenu, setShowMenu }) => {

  return (
    <Modal onClose={setShowMenu}>
      <div className={`sidebar-container ${showMenu ? 'sidebar-open' : ''}`}>
        <Sidebar className="vertical-sidebar">
          <Sidebar.Items className="vertical-items">
            <Sidebar.ItemGroup className="vertical-sidebar group">
              <Sidebar.Item  className='sidebar-names'>
                <Link to="/"> <Home className='sidebar-icon' /> მთავარი</Link> </Sidebar.Item>
              <Sidebar.Item  className='sidebar-names'>
                <Link to="/contact"><Contact className='sidebar-icon' />კონტაქტი</Link>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </Modal>
  );
};

export default SideBar;
