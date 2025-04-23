import Grid from '@mui/material/Grid';
import { ThemeProvider,createTheme } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import UPurple from '../../../Images/Upurple.png';
import UBlack from '../../../Images/Ublack.png';
import UGold from '../../../Images/Ugold.png';
import USilver from '../../../Images/Usilver.png';
import USilver_credit from '../../../Images/uSilver_credit.png';
import UBlack_credit from '../../../Images/uBlack_credit.png';
import UGold_credit from '../../../Images/uGold_credit.png';
import UPurple_credit from '../../../Images/uPurple_credit.png';
import { Link } from 'react-router-dom';
import './styles.css'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  interface Account{
    name:string,
    description:string,
    income_required?: string,
    monthly_fee?: string,
    type?: string,
    monthly_admin_fee?:string,
    interests_earnings?: string,
    opening_deposit?:string,
    access_to_funds?: string,
    credit_limit?:string,
    account_type?: string
  }

  interface CategoryAccounts{
    category?: string,
    accounts: Account[]
  }

  interface Accounts{
    accountsList: CategoryAccounts[];
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

const ProductsPanel = (accounts:Accounts) => {

    
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
      };
    return (
        <Grid container sx={{ marginTop: '50px', width:'100%'}}>
            <Grid size={{ xs: 12 }} >
          <Box sx={{}}>
    
             <ThemeProvider theme={createTheme({ palette: { primary: { main: '#8F87F1' } } })}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {accounts.accountsList && accounts.accountsList.map((item,index) => (
                  item.category && <Tab label={item.category} {...a11yProps(index)} key={index}/> 
                ))}
                </Tabs>
              </Box>
            </ThemeProvider>
    

          
            <div className='tab_panel' style={{}}>
              {accounts.accountsList && accounts.accountsList.map((item,index) => (
              <CustomTabPanel value={value} index={index} key={index}>
                <Grid container>
                 {item && item.accounts.map((account,index) => (
                 <Grid size={{ xs: 12, md: 6 }} key={index}>
                    <div className="account_container">
                      <div className="card_type_container">
                        {account.type === 'uPurple' && <img src={UPurple} className="card_img" />}
                        {account.type === 'uBlack' && <img src={UBlack} className="card_img" />}
                        {account.type === 'uSilver' && <img src={USilver} className="card_img" />}
                        {account.type === 'uGold' && <img src={UGold} className="card_img" />}
                        {account.type === 'uPurple credit' && <img src={UPurple_credit} className="card_img" />}
                        {account.type === 'uGold credit' && <img src={UGold_credit} className="card_img" />}
                        {account.type === 'uSilver credit' && <img src={USilver_credit} className="card_img" />}
                        {account.type === 'uBlack credit' && <img src={UBlack_credit} className="card_img" />}                        
                      </div>
                      <h3 className="account_name"><span className="name_text_underlined">{account.name.split(' ')[0]}</span> {account.name.split(' ').filter((item,index) => account.name.split(' ').indexOf(item) !== 0).join().replace(',',' ')}</h3>
                      <p className='account_description'>{account.description}</p>
                     {account.account_type === 'savings' && <div className="fees_income_container">
                        <p className='monthly_fee'><span id="price">{account.monthly_fee}</span><br />Monthly fee</p>
                        <p className="monthly_income"><span id="income">{account.income_required === 'None' ? 'No':account.income_required}</span><br />Min monthly income</p>
                      </div> }
                      {account.account_type === 'credit' && <><div className="fees_income_container">
                        <p className='monthly_fee'><span id="price">{account.monthly_fee}</span><br />Monthly fee</p>
                        <p className="monthly_income"><span id="income">{account.income_required === 'None' ? 'No':account.income_required}</span><br />Min monthly income</p>
                      </div> 
                      <div className="fees_income_container">
                       <p className="credit_limit"><span id="credit_limit">{account.credit_limit}</span><br />Credit limit</p>
                       <p className="interest"><span id="interest">{account.interests_earnings}</span><br />Interests rate</p>

                      </div>
                       </>
                      }
                       {account.account_type === 'investment' && <><div className="fees_income_container">
                        <p className='deposit'><span id="deposit">{account.opening_deposit}</span><br />Opening deposit</p>
                        <p className="funds_access"><span id="funds_access">{account.access_to_funds}</span><br />Access to funds</p>
                      </div> 
                      <div className="fees_income_container">
                       <p className="interest_rate"><span id="interest_rate">{account.interests_earnings}</span><br />Credit limit</p>
                       <p className="admin_fee"><span id="admin_fee">{account.monthly_admin_fee}</span><br />Monthly admin fee</p>

                      </div>
                       </>
                      }
                      <div className='actions_container'>
                        <Link to={`/personal/products-and-services/bank-accounts/${account.name.toLowerCase().replaceAll(' ','-')}/apply/personal`} data-link-name={`bank accounts | ${account.name.toLowerCase().replaceAll(' ','-')} | apply`} className="action_cta apply_cta">OPEN NOW</Link>
                        <Link to={`/personal/products-and-services/bank-accounts/${account.name.toLowerCase().replaceAll(' ','-')}`} data-link-name={`bank accounts | ${account.name.toLowerCase().replaceAll(' ','-')} | learn more`} className="action_cta qualify_cta">LEARN MORE</Link>
                      </div>
                    </div>
                  </Grid>
                 ))} 
                </Grid>
              </CustomTabPanel>
              ))}
            </div>
          </Box>
        </Grid>
        </Grid>
    )
}

export default ProductsPanel;