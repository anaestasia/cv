import photo from '../../img_profil.png';
import './header.scss';

function Header() {
    return (
        <div className="header">
            <img src={photo} alt="Anaestasia Mathieu" />
            <h1 className="name">ANAESTASIA MATHIEU</h1>
            <span>Bienvenue sur mon site !</span>
        </div>
    );
}

export default Header;