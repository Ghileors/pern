import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { NavLink, useHistory } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Context } from '..';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="logo" to={SHOP_ROUTE}>
          Kamazon
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button
              variant={'outline-light'}
              onClick={() => history.push(ADMIN_ROUTE)}
            >
              Admin Panel
            </Button>
            <Button
              variant={'outline-light'}
              onClick={() => logOut()}
              className="ml-2"
            >
              Logout
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant={'outline-light'}
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
