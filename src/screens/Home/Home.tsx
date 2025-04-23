import Nav from "../../components/Global/Nav/Nav";
import Grid from '@mui/material/Grid';
import './styles.css';
import { Link } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from "react";
import uPurple from '../../Images/Upurple_Hero.png';
import paint from '../../Images/background_paint.png';
import credit from '../../Images/credit_2.png';
import invest from '../../Images/forex.png';
import design from '../../Images/design_5.png'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import RotateRightOutlinedIcon from '@mui/icons-material/RotateRightOutlined';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from "@emotion/react";
import ColorTheme from "../../components/Global/Theme";
import Footer from "../../components/Global/Footer";
import ScrollToTop from "../../helpers/ScrollToTop";

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

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Home = () => {
    const [value, setValue] = useState(0);
    const [view, setView] = useState('bank');
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <ThemeProvider theme={ColorTheme}>
            <div>
                <ScrollToTop />
                <Nav />
                <Grid container id="home_container">
                    <Grid size={{ xs: 12, md: 6 }} >
                        <div className="hero_text_container">
                            <div>
                                <h1 className="hero_header">Save More</h1>
                                <p className="hero_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque, necessitatibus quae enim repellendus quod quasi ad quis laudantium quam pariatur aperiam? Molestiae ab, a tempore nostrum earum doloribus laborum.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{}}>
                        <div className="hero_image_container">
                            <img src={uPurple} className="hero_img" />
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }} sx={{ marginTop: '50px' }}>
                        <Link to="" className="offering_link">
                            <div className="offering_item">
                                <div>
                                    <AccountBalanceWalletOutlinedIcon sx={{ fontSize: '50px' }} />
                                    <p className="offering_item_name">Save</p>
                                    <p className="offering_item_description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, sapiente.</p>
                                </div>
                            </div>
                        </Link>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }} sx={{ marginTop: '50px' }}>
                        <Link to="" className="offering_link">
                            <div className="offering_item">
                                <div>
                                    <TrendingUpOutlinedIcon sx={{ fontSize: '50px' }} />
                                    <p className="offering_item_name">Invest</p>
                                    <p className="offering_item_description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, sapiente.</p>
                                </div>
                            </div>
                        </Link>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }} sx={{ marginTop: '50px' }}>
                        <Link to="" className="offering_link">
                            <div className="offering_item">
                                <div>
                                    <RotateRightOutlinedIcon sx={{ fontSize: '50px' }} />
                                    <p className="offering_item_name">Borrow</p>
                                    <p className="offering_item_description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, sapiente.</p>
                                </div>
                            </div>
                        </Link>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '50px' }}>
                        <div className="section">
                            <img src={paint} alt="" className="paint_img" />
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '100px' }}>
                        <div className="section section_text_container">
                            <div>
                                <h1 className="section_header align_center">Color Your Future with Smart Saving</h1>
                                <p className="section_text align_center">At <b>Ubank</b>, we believe that saving money should be as exciting and expressive as living life in full color. Just like every splash in the image, your financial journey is unique—and we’re here to help you paint a brighter future.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '50px' }}>
                        <div className="section section_text_container">
                            <div>
                                <h1 className="section_header_left align_center">Credit</h1>
                                <p className="section_text_left align_center">At <b>Ubank</b>, we believe that saving money should be as exciting and expressive as living life in full color. Just like every splash in the image, your financial journey is unique—and we’re here to help you paint a brighter future.</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '50px' }}>
                        <div className="section">
                            <img src={design} alt="" className="credit_img" />
                        </div>
                    </Grid>
                    <Grid container size={{ xs: 12 }} sx={{ marginTop: '50px' }} id="credit_calculator_section">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <div className="credit_calculator">
                                <h1 className="section_header" id="credit_calculator_header">Credit calculator</h1>
                                <p id="credit_calculator_text align_center">Thinking about the cost? Use our simple calculator to find out!</p>
                                <div className="calculator_input_container">
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-weight"
                                            endAdornment={<InputAdornment position="end">R</InputAdornment>}
                                            aria-describedby="outlined-weight-helper-text"
                                            inputProps={{
                                                'aria-label': 'weight',
                                            }}
                                            size="medium"
                                            placeholder="Amount"
                                        />
                                        <FormHelperText id="outlined-weight-helper-text">Enter an amount between 1000 - 500 000</FormHelperText>
                                    </FormControl>
                                </div>
                                <div className="calculator_input_container">
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-weight"
                                            endAdornment={<InputAdornment position="end">Months</InputAdornment>}
                                            aria-describedby="outlined-weight-helper-text"
                                            inputProps={{
                                                'aria-label': 'weight',
                                            }}
                                            size="medium"
                                            placeholder="Term"
                                        />
                                        <FormHelperText id="outlined-weight-helper-text">Enter a term between 7 - 84 months</FormHelperText>
                                    </FormControl>

                                </div>
                                <div className="calculator_input_container">
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <OutlinedInput
                                            id="outlined-adornment-weight"
                                            endAdornment={<InputAdornment position="end">%</InputAdornment>}
                                            aria-describedby="outlined-weight-helper-text"
                                            inputProps={{
                                                'aria-label': 'weight',
                                            }}
                                            size="medium"
                                            placeholder="Interest rate"
                                        />
                                        {/* <FormHelperText id="outlined-weight-helper-text">Enter an amount between 1000 - 500 000</FormHelperText> */}
                                    </FormControl>
                                </div>
                                <div className="">
                                    <p className="instalment_display_text">Your Monthly Instalment will display here</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ marginTop: '50px' }}>
                        <div className="section">
                            <img src={invest} alt="" className="invest_img" />
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div className="section section_text_container">
                            <div>
                                <h1 className="section_header align_center">Invest</h1>
                                <p className="section_text align_center">At <b>Ubank</b>, we believe that saving money should be as exciting and expressive as living life in full color. Just like every splash in the image, your financial journey is unique—and we’re here to help you paint a brighter future.</p>
                            </div>
                        </div>
                    </Grid>
                    {/* <Grid container size={{ xs: 12 }} sx={{ marginTop: '50px', height: '500px', backgroundColor: "#f1f1f1fb" }}>
                        <Grid size={{ xs: 12, md: 6 }}>

                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>

                        </Grid>
                    </Grid> */}
                    <Grid container size={{ xs: 12 }} sx={{marginTop:'50px',height:'200px',backgroundColor:'#827bd4'}}>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <div className="text_banner_container">
                                <h1>You deserve to bank simpler</h1>
                             </div> 
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }} sx={{}}>
                              <div className="text_banner_action_container">
                                  <Link to="/" className="text_banner_cta">Open an Account</Link>
                              </div>
                        </Grid>
                    </Grid>
                    <Grid size={{xs:12}}sx={{marginTop:'25px'}}>
                     <Footer />
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    )
}

export default Home;