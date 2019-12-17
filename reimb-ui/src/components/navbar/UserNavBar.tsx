import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
 
} from 'reactstrap';
import { Link } from 'react-router-dom';

const UserNavBar = (props:any) => {
  const [isOpen, setIsOpen] = useState(false);//this is a hook

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="lightgrey" light expand="md">
        <NavItem>
          <Link to='/'>Employee Reimbursement</Link>
        </NavItem>

        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Pages
              </DropdownToggle>
              <DropdownMenu right>
                {/* <DropdownItem>
                  <Link to='/chucknorris'>ChuckNorrisJoke</Link>
                </DropdownItem> */}
                <DropdownItem>
                  <Link to='/users/display'>Users</Link>
                </DropdownItem>
                <DropdownItem divider />
                {/* <DropdownItem>
                  <Link to='/tictactoe'>Tic-Tac-Toe</Link>
                </DropdownItem> */}
                <DropdownItem>
                  <Link to='/status/:statusId'>Reimbursements</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavItem>
              <Link to='/login'>Login</Link>
            </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default UserNavBar;

