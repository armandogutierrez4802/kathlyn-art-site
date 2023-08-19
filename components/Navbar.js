import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav className="navbar">
            <h3>Kathlyn Gutierrez</h3>
            <FontAwesomeIcon icon={faBars} style={{ fontSize: 30, color: 'red' }} />
        </nav>
    )
}
