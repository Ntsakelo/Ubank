import React from "react";
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import './styles.css';


const Nav = () => {
    return (
        <div className="navigation">
            <Grid container>
                <Grid size={{sm:12,md:6}}>
                    <Link className="nav_link" to="/personal/products-and-services/investment-savings-accounts">Invest</Link>
                    <Link className="nav_link" to="/personal/products-and-services/credit-cards">Credit</Link>
                    <Link className="nav_link" to="/personal/products-and-services/bank-accounts">Bank Accounts</Link>
                </Grid>
                <Grid size={{sm:12,md:6}}>
                   {/* <Link to='/'>LOGIN</Link> */}
                </Grid>
            </Grid>
        </div>
    )
}

export default Nav;