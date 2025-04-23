import Grid from '@mui/material/Grid';
import Nav from '../../components/Global/Nav/Nav';
import all from '../../Images/All_cards_1.png'
import forex from '../../Images/forex.png'
// import './styles.css'
import * as React from 'react';
import Footer from '../../components/Global/Footer';
import { useState,useEffect } from 'react';
import ProductsPanel from '../../components/Global/ProductsPanel';
import ScrollToTop from '../../helpers/ScrollToTop';


const InvestmentAccounts = () => {
  const accountsList = [{category:'Flexible portion access',accounts:[{name:'SemiPlan Investment',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, in? Possimus quia aliquid amet dicta, dolorum eius et reprehenderit totam rerum voluptatem, odit officiis fugit tempora ut, quo itaque a.',opening_deposit:'R1 000',access_to_funds:'Anytime',interests_earnings:'7.5%',monthly_admin_fee:'R0',account_type:'investment'},]},{category:'access anytime',accounts:[{name:'moreSave Investment',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, in? Possimus quia aliquid amet dicta, dolorum eius et reprehenderit totam rerum voluptatem, odit officiis fugit tempora ut, quo itaque a.',opening_deposit:'R1 000',access_to_funds:'Anytime',interests_earnings:'7.5%',monthly_admin_fee:'R0',account_type:'investment'},{name:'classic Investment',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, in? Possimus quia aliquid amet dicta, dolorum eius et reprehenderit totam rerum voluptatem, odit officiis fugit tempora ut, quo itaque a.',opening_deposit:'R1 000',access_to_funds:'Anytime',interests_earnings:'7.5%',monthly_admin_fee:'R0',account_type:'investment'}]}]
  
  
  const [value, setValue] = useState(0);



  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <ScrollToTop />
      <Nav />
      <Grid container id="savings_container">
        <Grid size={{ xs: 12, md: 6 }} sx={{ backgroundColor: '#fff' }}>
          <div className="savings_accounts_hero_text">
            <div>
              <p className="hero_text_1">Explore Our <br />Investment Accounts</p>
              <p className="hero_text_2">Get a bank account that suits your lifestyle</p>
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ backgroundColor: '#fff' }} id="savings_hero_image_container">
          <img src={forex} className="all_cards" id="forex_hero"/>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <h1 className='main_header' id="bank_accounts_head">Investment Accounts</h1>
          <p className="main_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptas saepe, itaque, consectetur fugit adipisci voluptatum quas quibusdam nemo quidem deserunt sequi alias non reiciendis ducimus minima, porro nesciunt? Fugiat?</p>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ marginTop: '50px' }}>
          <div className="benefit_item normal_white_clr">
            <div>
              <h3 className="secondary_header">Safe and secure</h3>
              <p className="secondary_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati corrupti sequi optio voluptates ullam!</p>
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ marginTop: '50px' }}>
          <div className="benefit_item normal_purple_clr">
            <div>
              <h3 className="secondary_header">Ubank Rewards</h3>
              <p className="secondary_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati corrupti sequi optio voluptates ullam!</p>
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ marginTop: '50px' }}>
          <div className="benefit_item normal_white_clr">
            <div>
              <h3 className="secondary_header">Take control</h3>
              <p className="secondary_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati corrupti sequi optio voluptates ullam!</p>
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ marginTop: '50px' }}>
          <div className="benefit_item normal_purple_clr">
            <div>
              <h3 className="secondary_header">Choose banking style</h3>
              <p className="secondary_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati corrupti sequi optio voluptates ullam!</p>
            </div>
          </div>
        </Grid>
        <ProductsPanel accountsList={accountsList}/>
        <Grid size={{ xs: 12 }}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  )
}

export default InvestmentAccounts;