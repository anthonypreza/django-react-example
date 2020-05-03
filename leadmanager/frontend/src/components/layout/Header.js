import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  NavbarText,
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Header = (props) => {
  const { authenticated, user } = props.auth;
  const authLinks = (
    <Nav
      className="mr-auto justify-content-end"
      style={{ width: "100%" }}
      navbar
    >
      <NavItem>
        <NavbarText>
          <strong>{user ? `Welcome ${user.username}` : null}</strong>
        </NavbarText>
      </NavItem>
      <NavItem>
        <NavLink>
          <Button className="btn-info btn-sm text-dark" onClick={props.logout}>
            Logout
          </Button>
        </NavLink>
      </NavItem>
    </Nav>
  );
  const guestLinks = (
    <Nav
      className="mr-auto justify-content-end"
      style={{ width: "100%" }}
      navbar
    >
      <NavItem>
        <NavLink tag={Link} to="/register">
          Register
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/login">
          Login
        </NavLink>
      </NavItem>
    </Nav>
  );
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Lead Manager</NavbarBrand>
        {authenticated ? authLinks : guestLinks}
      </Navbar>
    </div>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
