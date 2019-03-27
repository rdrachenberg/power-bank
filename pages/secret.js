import PropTypes from 'prop-types';
import SecureTemplate from '../static/secure-template';
import Btc from '../components/Btc';
import Table from '../components/Table';


const Secret = ({ loggedInUser}) => (
  <div>
    <div>
      <style jsx>{`
      pre {
        width: 90%;
        background: white;
        font-size: 25px;
        margin-left: 20px;
        }
      img {
        border-radius: 50%;
        float: right;
        margin-top: -20px;
        margin-right: 20px;
      }
      `}
      </style>
      <img src={ loggedInUser.picture } width="4%" />
      <pre>Hi { loggedInUser.given_name }! </pre>
      <Btc/>
      {/* <pre>{ JSON.stringify(loggedInUser, null, 2) }</pre> */}
      <Table />
    </div>
  </div>
)

Secret.propTypes = {
  loggedInUser: PropTypes.object
};

export default SecureTemplate(Secret);