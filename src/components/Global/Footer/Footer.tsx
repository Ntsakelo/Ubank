import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import logo from '../../../Images/logo.png';
import './styles.css';

const Footer = () => {
    return (
        <footer className="footer">
        <Grid container>
            <Grid size={{xs:12,md:4}}>
                <div className="footer_logo_container">
                    <Link to="/" className="footer_logo_link">
                 <img src={logo} alt=""  className="footer_logo"/>
                    
                    </Link>
                </div>
            </Grid>
            <Grid size={{xs:12,md:4}}>
               <h3 className="footer_header">Get in touch</h3>
                <Link className="footer_link" to="">Contact Us</Link>
                <Link className="footer_link" to="">Lost or stolen card</Link>
                <Link className="footer_link" to="">Find a branch</Link>
            </Grid>
            <Grid size={{xs:12,md:4}}>
            <h3 className="footer_header">Bank with us</h3>
            <Link className="footer_link" to="">Savings Account</Link>
            <Link className="footer_link" to="">Investment Account</Link>
            <Link className="footer_link" to="">Credit Account</Link>
            </Grid>
        </Grid>
    </footer>
    )
}

export default Footer;