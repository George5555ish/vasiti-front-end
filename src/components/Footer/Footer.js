import React from "react";

import './Footer.css'
// import SubscribeBanner from `${process.env.PUBLIC_URL}/images/subscribe-banner1.svg`;

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core';

function Footer() {

  const useStyles = makeStyles({

    buttonGroup: {
      display: 'flex',
    flexDirection: 'row',
      height:'52px',
   
      
   
    
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '6px',
    }
,
    positionButton: {
      position:  'relative',
      flexBasis: '65%',
    },
   textField:  {
   position:'absolute',
   top:'-12px',
    
     display:  'flex',
     color:'#fff',
  
 
},
    footerButton: {
      color:  '#000',
      backgroundColor: '#FFF',
      display:  'flex',
      flexBasis:"35%",
      // width: '10px',
      
      // textAlign: 'center'

    }
  });

  
  const classes = useStyles();

  const footerArray = [
    {
      name: "Company",
      links: ["About us", "Term of Use", "Privacy Policy", "Press & Media"],
    },
    {
      name: "Products",
      links: ["Marketplace", "Magazine", "Seller", "Wholesale", "Services"],
    },

    {
      name: "Careers",
      links: [
        "Become a Campus Rep ",
        "Become a Vasiti Influencer",
        "Become a Campus writer",
        "Become an Affiliate",
      ],
    },
    {
      name: "Get in touch",
      links: [
        "Contact us",
        "Partner with us",
        "Advertise with us",
        "Help/FAQs",
      ],
    },
  ];
  return (
    <section className="footer">
      <div className="margin-class footer-main">
        <div className="footer-container">
          <li>
            {" "}
           <div className="img-parent">
           <img
              
              src={process.env.PUBLIC_URL + "/images/subscribe-banner1.svg"}
              alt="logo"
            />
           </div>
          </li>
        </div>

        <div>
          <h3>Be a member <br></br>of our community 🎉</h3>
          <p>
            {" "}
            We’d make sure you’re always first to know what’s happening on
            Vasiti—thus, the world.
          </p>

          <div className={classes.buttonGroup}>
              {/* <div className={classes.positionButton}> */}
              <div className={classes.positionButton}>  <TextField className={classes.textField} variant="filled" label="enter your email address" size="small" />
              </div> <Button className={classes.footerButton}> SUBSCRIBE</Button>
             {/* </div> */}
          </div>
        </div>
      </div>

      <div className="margin-class">

        <div className="footer-links">
        {footerArray.map((value, index) => {
          const { name, links } = value;
          return (
            <ul key={index} >
              <h3 className="footer-links-heading"><a>{name}</a></h3>

              {links.map((_, count) => {
                return <li className="footer-links-child" key={count}><a>{links[count]}</a></li>;
              })}
            </ul>
          );
        })}
        <ul>
          <h3 className="footer-links-heading">Join our community</h3>
          <div className="social-media-links">
            <li>
              {" "}
              <a>
              <img
                src={
                  process.env.PUBLIC_URL + "/images/social-media-icons/fb.svg"
                }
                alt="logo"
              />
               </a>
            </li>
            <li>
              {" "}
              <a>
              <img
                src={
                  process.env.PUBLIC_URL + "/images/social-media-icons/tw.svg"
                }
                alt="logo"
              /></a>
            </li>
            <li>
              {" "}
              <a>
              <img
                src={
                  process.env.PUBLIC_URL + "/images/social-media-icons/ig.svg"
                }
                alt="logo"
              /></a>
            </li>
            <li>
              {" "}
              <a>
              <img
                src={
                  process.env.PUBLIC_URL + "/images/social-media-icons/in.svg"
                }
                alt="logo"
              /></a>
            </li>
          </div>

          <p className="social-media-text">Email Newsletter</p>
        </ul>
        </div>
        
      </div>
    </section>
  );
}

export default Footer;
