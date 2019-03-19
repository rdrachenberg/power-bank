import PropTypes from 'prop-types';
import { getToken } from '../static/auth.js';
import template from '../static/template';
import Button from '@material-ui/core/Button';

const Index = ({ isLoggedIn }) => (
  <div>
    <h1>Power Bank</h1>
    <h2> Welcome to your future!</h2>
    { !isLoggedIn && (
    <Button href="/login" variant="contained" color="primary" className="loginButton">
      Please Login
    </Button>
    )}
  </div>
);

Index.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default template(Index);