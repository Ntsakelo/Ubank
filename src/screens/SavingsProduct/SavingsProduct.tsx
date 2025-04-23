import * as React from 'react';
import './styles.css'
import Nav from '../../components/Global/Nav/Nav';
import Grid from '@mui/material/Grid'
import UPurple from '../../Images/Upurple.png'
import { Link } from 'react-router-dom';
import forex from '../../Images/forex-1.jpg'
import Footer from '../../components/Global/Footer';
import ScrollToTop from '../../helpers/ScrollToTop';

const SavingsProduct = () => {
    return (
        <div>
            <ScrollToTop />
            <Nav />
            <Grid container id="product_container">
                <Grid size={{ xs: 12 }} sx={{ marginTop: '80px' }}>
                    <h3 className='product_name'>manyMore Banking Account</h3>
                </Grid>
                <Grid container size={{ xs: 12 }} sx={{ border: '1px solid #fff', width: '90%', margin: 'auto', borderRadius: '10px', backgroundColor: '#fff' }}>
                    <Grid size={{ xs: 12, md: 4 }} >
                        <div className="product_image_container">
                            <div>
                                <img src={UPurple} className='product_image' alt="" />
                            </div>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <div className="product_details">
                            <div className="details">
                                <p className="product_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, sed voluptates temporibus ullam dolor unde? Numquam totam cum ab vero quas, nam a necessitatibus quibusdam perferendis ea recusandae esse ex!</p>
                                <div className='product_fees_income'>
                                    <p className='product_monthly_fee'>R115<br /><span className="product_text_styled">MONTHLY FEE</span></p>
                                    <p className='product_monthly_income'>R8 000<br /><span className="product_text_styled">MONTHLY FEE</span></p>
                                </div>
                                <Grid container>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Link to="" className="action_link call_me_link">CALL ME BACK</Link>
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <Link to="" className='action_link open_now_link'>OPEN NOW</Link>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container size={{ xs: 12 }} sx={{ width: '90%', margin: 'auto' }}>
                    <Grid size={{ xs: 12 }}>
                        <h3 className="benefits_head">Some of the benefits</h3>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4, lg: 3 }}>
                        <div className="benefit normal_white_clr">
                            <div>
                                <h3 className="secondary_header">Constant Growth</h3>
                                <p className="secondary_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati corrupti sequi optio voluptates ullam!</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4, lg: 3 }}>
                        <div className="benefit normal_purple_clr">
                            <h3 className="secondary_header">Access Anytime</h3>
                            <p className="secondary_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati corrupti sequi optio voluptates ullam!</p>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4, lg: 3 }}>
                        <div className="benefit normal_white_clr">
                            <h3 className="secondary_header">Secure</h3>
                            <p className="secondary_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati corrupti sequi optio voluptates ullam!</p>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4, lg: 3 }}>
                        <div className="benefit normal_purple_clr">
                            <h3 className="secondary_header">Free Personal Cover</h3>
                            <p className="secondary_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati corrupti sequi optio voluptates ullam!</p>
                        </div>
                    </Grid>
                    <Grid size={{xs:12}}>
                        <h3 className="learn_more_head">Learn more about growing your savings</h3>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <div className="content_zone">
                            <Grid container>
                                <Grid size={{ xs: 12, md: 6 }}>
                                   <div className="banner_content">
                                     <div>
                                   <p className='banner_text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore suscipit dignissimos libero aspernatur rem quidem, fugiat molestias sint molestiae impedit. Eius optio tempore voluptatem inventore ad necessitatibus illo fugit tempora, repellat eveniet vero reiciendis earum blanditiis expedita sunt aperiam doloribus dolores nostrum, commodi suscipit! Officiis sunt dolorum architecto repellat nisi!</p>
                                     <Link to="/" className="action_link learn_more_link" id="learn_more_link">LEARN MORE</Link>
                                     </div>
                                   </div> 
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <div className="banner_img_container">
                                        <img src={forex} alt="" className="banner_img" />
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
                    <Grid size={{xs:12}}>
                        <Footer />
                    </Grid>

            </Grid>
        </div>
    )
}

export default SavingsProduct;