import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Container, Row, Form, Card, Button } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userAPI';
import { Context } from '../';

const Auth = observer(() => {
  const { user } = useContext(Context);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { email, password } = { ...form };
  const location = useLocation();
  const history = useHistory();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const signInHandler = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        // eslint-disable-next-line
        data = await registration(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      history.push(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center "
      style={{ height: window.innerHeight - 54 }}
    >
      <Card className="p-5 form-container">
        <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Enter your email..."
            name="email"
            value={email}
            onChange={changeHandler}
          />
          <Form.Control
            className="mt-3"
            placeholder="Enter your password..."
            name="password"
            value={password}
            onChange={changeHandler}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Don't have an account?{' '}
                <NavLink to={REGISTRATION_ROUTE}>Register now!</NavLink>
              </div>
            ) : (
              <div>
                Already have an account?{' '}
                <NavLink to={LOGIN_ROUTE}>Login!</NavLink>
              </div>
            )}
            <Button variant={'outline-success'} onClick={signInHandler}>
              {isLogin ? 'Login' : 'Register now'}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
