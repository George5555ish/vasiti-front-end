import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core';

function Appbar() {


  const useStyles = makeStyles({
    materialBtn: {
      backgroundColor: "#FF5C00",
      color: "#fff",
      boxShadow: '1px 4px 8px rgba(239, 88, 3, 0.2)',
      borderRadius: '4',
  }
  })

  const classes = useStyles();
    return (
     <div>
          <div className="margin-class container">
         <a href="/"><img src={process.env.PUBLIC_URL + "/images/vasiti-logo.svg"} alt="logo"/>
</a> 
          <nav className="appbar-nav">
              <ul>
                <li><a>ABOUT US</a></li>
                <li><a>STORIES</a></li>
                <li><a>CONTACT</a></li>
                <li><a>LOG IN</a></li>
              
                <Button
                className={classes.materialBtn}
                color="primary"
                
              
                >SIGN UP</Button>
                
              </ul>
          </nav>
        </div>
     </div>
    )
}

export default Appbar
