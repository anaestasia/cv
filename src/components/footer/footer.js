import * as FaIcons from "react-icons/fa"

import './footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className="icons">
                <a href="https://github.com/anaestasia" className="link"><FaIcons.FaGithub /></a>
                <a href="https://www.linkedin.com/in/anaestasia-mathieu-b87b31164/" className="link"><FaIcons.FaLinkedin /></a>
            </div>
            <span>Icons theme by <span className="link">BNM</span></span>
            <span>Copyright © 2021 Privacy Policy</span>
        </div>
    );
}

export default Footer;