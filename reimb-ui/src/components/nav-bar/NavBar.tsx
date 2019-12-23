import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';

// const NavBar = (props:any) => {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleNavbar = () => setCollapsed(!collapsed);
  const NavBar = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

    return (
      <div id= "headmenu">
        <Navbar style={{backgroundColor: '#6699cc'}} light expand="md">
        {/* <Nav className="navbar navbar-light" style={{backgroundColor: 'blue'}}> */}
          {/* <input style={{backgroundColor: 'blue'}} type="text" /> */}
          
          <NavbarBrand href="/"><h3>ORION</h3></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {/* <NavItem className="nav">
                <Link className="a" to='/login'>Login</Link>
              </NavItem> */}
              {/* <NavItem className="nav">
                <Link to='/users/display/id/'>UserById</Link>
              </NavItem>
              <NavItem className="nav">
                <Link to='/users/display'>Users</Link>
              </NavItem>
              <NavItem className="nav">
                <Link to='/reimbursements/status/'>ReimbursementStatus</Link>
              </NavItem> */}
              <NavItem className="nav">
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret right>
                User
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <Link to='/users/display'>All Users</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/usersbyid'>User By ID</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/usersupdate'>Update User</Link> 
                {/* change the path */}
                </DropdownItem>
               
                
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret right>
                Reimbursement
              </DropdownToggle>
              <DropdownMenu right>
              <DropdownItem>
                <Link to='/reimbursement/user'>Reimbursement By User</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to='/reimbursement/status/'>Reimbursement By Status</Link>
                </DropdownItem>   
                <DropdownItem>
                  <Link to='/reimbursement/update/'>Update Reimbursement</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to='/reimbursement/new'>New Reimbursement</Link>
                </DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>
            </NavItem>
            </Nav>
          </Collapse>
          <NavItem className="nav">
            <Link to='/login' style={{color: 'black'}}>LOGIN</Link>
          </NavItem>
        </Navbar>

  
        <br />
  
  
      </div>
    );

  // return (
  //   <div> 
  //     <Navbar color="faded" light>
  //       <NavItem>
  //         <Link to='/'>Orion ERS</Link>
  //       </NavItem>
  //       <NavbarToggler onClick={toggleNavbar} className="mr-2" />
  //       <Collapse isOpen={!collapsed} navbar>
  //         <Nav navbar>
  //           <NavItem>
  //             <Link to='/login'>Login</Link>
  //           </NavItem>
  //           <NavItem>
  //             <Link to='/usersbyid'>Users By Id</Link>
  //           </NavItem>
  //           <NavItem>
  //           <NavItem>
  //             <Link to='/usersupdate'>User Update</Link>
  //           </NavItem>
  //             <Link to='/users'>Users</Link>
  //           </NavItem>
  //           <NavItem>
  //             <Link to='/reimbursement/user'>Reimbursements By User</Link>
  //           </NavItem>
  //           <NavItem>
  //             <Link to='/reimbursement/status'>Reimbursements By Status</Link>
  //           </NavItem>
  //         </Nav>
  //       </Collapse>
  //     </Navbar>
  //   </div>
  // );
}

export default NavBar;

  