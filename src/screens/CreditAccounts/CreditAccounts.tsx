import Grid from '@mui/material/Grid';
import Nav from '../../components/Global/Nav/Nav';
import uPurple from '../../Images/uPurple_credit.png'
// import './styles.css'
import * as React from 'react';
import Footer from '../../components/Global/Footer';
import { useState,useEffect } from 'react';
import ProductsPanel from '../../components/Global/ProductsPanel';


const CreditAccounts = () => {
  const accountsList = [{accounts:[{name:'uGold Credit',monthly_fee:'R115',income_required:'R25 000',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, in? Possimus quia aliquid amet dicta, dolorum eius et reprehenderit totam rerum voluptatem, odit officiis fugit tempora ut, quo itaque a.',type:'uGold credit',account_type:'credit',interests_earnings:'6.5%',credit_limit:'R150 000'},{name:'uSilver Credit',monthly_fee:'R7.50',income_required:'None',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, in? Possimus quia aliquid amet dicta, dolorum eius et reprehenderit totam rerum voluptatem, odit officiis fugit tempora ut, quo itaque a.',type:'uSilver credit',account_type:'credit',interests_earnings:'7.5%',credit_limit:'R150 000'},{name:'uBlack Credit',monthly_fee:'R7.50',income_required:'None',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, in? Possimus quia aliquid amet dicta, dolorum eius et reprehenderit totam rerum voluptatem, odit officiis fugit tempora ut, quo itaque a.',type:'uBlack credit',account_type:'credit',interests_earnings:'8.5%',credit_limit:'R150 000'},{name:'uPurple Credit',monthly_fee:'R7.50',income_required:'None',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, in? Possimus quia aliquid amet dicta, dolorum eius et reprehenderit totam rerum voluptatem, odit officiis fugit tempora ut, quo itaque a.',type:'uPurple credit',account_type:'credit',interests_earnings:'6.5%',credit_limit:'R150 000'}]}]
  
  
  const [value, setValue] = useState(0);



  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Nav />
      <Grid container id="savings_container">
        <Grid size={{ xs: 12, md: 6 }} sx={{ backgroundColor: '#fff' }}>
          <div className="savings_accounts_hero_text">
            <div>
              <p className="hero_text_1">Explore Our <br />Credit Accounts</p>
              <p className="hero_text_2">Get a bank account that suits your lifestyle</p>
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ backgroundColor: '#fff' }} id="savings_hero_image_container">
          <div className="credit_hero_img_container">
          <img src={uPurple} className="all_cards" id="credit_hero"/>

          </div>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <h1 className='main_header' id="bank_accounts_head">Credit accounts</h1>
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

export default CreditAccounts;