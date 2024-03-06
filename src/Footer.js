function Footer() {
    return (
    <footer class="footer">
        <div class ="footer_segment">
            <img src="restauranfood.jpg" alt="Restaurant and Food" style={{ width: '25%', height: 'auto' }}></img>
        </div>
        <nav class ="footer_segment_menu">
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
        <address class ="footer_segment">
             Contact information
        </address>
        <div class ="footer_segment">FooterSocials</div>
    </footer>
    );
  }
  export default Footer;