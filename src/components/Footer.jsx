import logoFooter from "./../assets/logo-footer.svg"
const Footer=() => {
    return (
        <footer className="footer">
            <div className="footerContainer">
        <img src={logoFooter} alt="footerImg" className="footerImg" />
        <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );

}
export default Footer;