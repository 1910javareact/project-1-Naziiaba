import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand,

} from 'reactstrap';

import { Link } from 'react-router-dom';
 
const UserNavBar = (props:any) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
    <Navbar color="faded" light>
      <NavbarBrand to="/" className="mr-auto">Employee Reimbursement</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
          <Link to='/users/display'>Users</Link>
          </NavItem>
          <NavItem>
          <Link to='/status/:statusId'>Reimbursements</Link>
          </NavItem>
          <NavItem>
            <Link to='/login'>Login</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  );
}

export default UserNavBar;

