import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Context } from '..';
import { ADMIT_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink
          style={{
            color: 'white',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
          to={SHOP_ROUTE}
        >
          Kamazon
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto">
            <Button
              variant={'outline-light'}
              onClick={() => history.push(ADMIT_ROUTE)}
            >
              Admin Panel
            </Button>
            <Button
              variant={'outline-light'}
              onClick={() => history.push(LOGIN_ROUTE)}
              className="ml-2"
            >
              Logout
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant={'outline-light'}
              onClick={() => user.setIsAuth(true)}
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
