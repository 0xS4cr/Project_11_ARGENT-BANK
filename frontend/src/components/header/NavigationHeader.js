import LOGO from '../../assets/img/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
// Redux
import { useDispatch } from 'react-redux';
import { resetUser } from '../../Slices/redux';

export default function NavigationHeader({ name }) {
  const dispatch = useDispatch();

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={LOGO}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item unclikable" to="/sign-in">
          <FontAwesomeIcon className="fa" icon={faUserCircle} />
          {name}
        </Link>
        <Link
          className="main-nav-item"
          to="/sign-in"
          onClick={() => {
            dispatch(resetUser());
            localStorage.clear();
          }}
        >
          <FontAwesomeIcon className="fa" icon={faRightFromBracket} />
          Log out
        </Link>
      </div>
    </nav>
  );
}

