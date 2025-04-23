import Grid from '@mui/material/Grid';
import Nav from '../../components/Global/Nav/Nav';
import all from '../../Images/All_cards_1.png'
import './styles.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Footer from '../../components/Global/Footer';
import { useState,useEffect } from 'react';
import ProductsPanel from '../../components/Global/ProductsPanel';
import ScrollToTop from '../../helpers/ScrollToTop';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}

      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
/*
 accounts = [{type:'students',accounts:[{name:''}]},{}]

*/
function a11yProps(index: number) {
  
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type Categories = string[];

const SavingsAccount = () => {
  const accountsList = [{category:'daily banking',accounts:[{name:'manyMore Banking Account',monthly_fee:'R115',income_required:'R25 000',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, in? Possimus quia aliquid amet dicta, dolorum eius et reprehenderit totam rerum voluptatem, odit officiis fugit tempora ut, quo itaque a.',type:'uPurple',account_type:'savings'},{name:'moreSave Banking Account',monthly_fee:'R7.50',income_required:'None',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, in? Possimus quia aliquid amet dicta, dolorum eius et reprehenderit totam rerum voluptatem, odit officiis fugit tempora ut, quo itaque a.',type:'uPurple',account_type:'savings'}]},{category:'private',accounts:[{name:'morePrivate Banking Account',monthly_fee:'R380',income_required:'R60 000',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, in? Possimus quia aliquid amet dicta, dolorum eius et reprehenderit totam rerum voluptatem, odit officiis fugit tempora ut, quo itaque a.',type:'uBlack',account_type:'savings'},{name:'more4Me Banking Account',monthly_fee:'R180',income_required:'None',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, in? Possimus quia aliquid amet dicta, dolorum eius et reprehenderit totam rerum voluptatem, odit officiis fugit tempora ut, quo itaque a.',type:'uBlack',account_type:'savings'}]},{category:'professional',accounts:[{name:'myPrivata Banking Account',monthly_fee:'R115',income_required:'R25 000',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, in? Possimus quia aliquid amet dicta, dolorum eius et reprehenderit totam rerum voluptatem, odit officiis fugit tempora ut, quo itaque a.',type:'uPurple',account_type:'savings'},{name:'Elegant Banking Account',monthly_fee:'R7.50',income_required:'None',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, in? Possimus quia aliquid amet dicta, dolorum eius et reprehenderit totam rerum voluptatem, odit officiis fugit tempora ut, quo itaque a.',type:'uSilver',account_type:'savings'}]},{category:'students',accounts:[{name:'LumpSum Banking Account',monthly_fee:'R115',income_required:'None',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, in? Possimus quia aliquid amet dicta, dolorum eius et reprehenderit totam rerum voluptatem, odit officiis fugit tempora ut, quo itaque a.',type:'uPurple',account_type:'savings'},{name:'SuperSave Banking Account',monthly_fee:'R7.5',income_required:'R25 000',description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, in? Possimus quia aliquid amet dicta, dolorum eius et reprehenderit totam rerum voluptatem, odit officiis fugit tempora ut, quo itaque a.',type:'uGold',account_type:'savings'}]}]
  
  
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
              <p className="hero_text_1">Explore Our <br />Savings Accounts</p>
              <p className="hero_text_2">Get a bank account that suits your lifestyle</p>
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ backgroundColor: '#fff' }} id="savings_hero_image_container">
          <img src={all} className="all_cards" />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <h1 className='main_header' id="bank_accounts_head">Bank accounts</h1>
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

export default SavingsAccount;