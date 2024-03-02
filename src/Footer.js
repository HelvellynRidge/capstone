function Footer() {
    return (
    <footer className="four-coloumn-footer">
        <div className="FooterImage">
            <img src="restauranfood.jpg" alt="Restaurant and Food" style={{ width: '8%', height: 'auto' }}></img>
        </div>
        <nav className="FooterNavigation">
        <ul>
            <li>
                <a href="Home">Home
                </a>
            </li>
            <li><a href="About"> About
                </a>
            </li>
            <li><a href="Menu"> Menu
                </a>
            </li>
            <li><a href="Reservations"> Reservations
                </a>
            </li>
            <li><a href="Order Online"> Order Online
                </a>
            </li>
            <li><a href="Login"> Login
                </a>
            </li>
        </ul>
        </nav>
        <address className="FooterContact">
             Contact information
        </address>
        <div className="FooterSocials">FooterSocials</div>
    </footer>
    );
  }
  export default Footer;