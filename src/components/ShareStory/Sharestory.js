import React, {useState} from 'react';
import './Sharestory.css';
import{Paper, Typography, TextField, Button} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FileBase from 'react-file-base64';
import {makeStyles} from '@material-ui/core';
function Sharestory() {

    const [postData, setPostData] = useState({
    
        
        firstName: '', 
        lastName: '', 
        selectedFile: '',
        story: '',
        customer: true, 
        university: false
    });

    const [vendor, setVendor] = useState('Vendor');
    const [submitted, setSubmitted] = useState(false);


    const handleChange = (e) => {

       
        setVendor(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setSubmitted(!submitted);
    }
    const useStyles = makeStyles((theme) => (
        {
            root: {
                '& .MuiTextField-root': {
                  margin: theme.spacing(1),
                },
              },
              paper: {
                padding: theme.spacing(2),
              },
              typo: {
                fontSize: '2rem',
                textAlign: 'left',
                fontWeight: 'bold'
              },
              form: {
                display: 'flex',
                flexWrap: 'wrap',
                margin: '10px 10px',
                // justifyContent: 'center',
                alignContent: 'flex-start'
              },
              fileInput: {
                width: '97%',
                margin: '10px 0',
                padding: '10px 0',
                
              },
              buttonSubmit: {
                marginBottom: 10,
                backgroundColor: "#ff5c00",
                color: '#fff'
              },
          }
    ));
    
      const classes = useStyles();

  
    return (
        <div className="margin-class padding">
            <div className="share-story-main main-share ">
               

                <Paper className={classes.paper} component="h2">
     
     
      <FormControl
        component="fieldset"
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        {
            submitted === false ? <div>
                    <Typography variant="h2" className={classes.typo}> Share your amazing story!</Typography>

            <div className={classes.fileInput}>
            <FileBase 
                type="image" 
                multiple={false}
                label="Choose Image"
                onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
            />
        </div>
   
        <label >First Name</label>
            <TextField
          name="fName"
          variant="outlined"
          label="First Name"
          fullWidth
          value={postData.message}
          onChange ={(e)=> setPostData({...postData, message: e.target.value})}
        />

<label >Last Name</label>
            <TextField
          name="lName"
          variant="outlined"
          label="Last Name"
          fullWidth
          value={postData.tags}
          onChange ={(e)=> setPostData({...postData, tags: e.target.value.split(',')})}
        />

        <label >Share your story</label>
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange ={(e)=> setPostData({...postData, message: e.target.value})}
        />

<div>
    <p className="form-control">What did you interact with Vasiti as?</p>

    <RadioGroup row aria-label="position" name="position" defaultValue="top">
      
<FormControlLabel value="Customer" control={

<Radio color="primary"
    onChange={handleChange}
    checked={vendor === 'Customer' ? true : false}

 />} label="Customer" />

   
      </RadioGroup>

       <RadioGroup row aria-label="position" name="position" defaultValue="top">
      
<FormControlLabel value="Vendor" control={<Radio color="primary"

checked={vendor === 'Vendor' ? true : false}
onChange={handleChange}
 />} label="Vendor"

 />

   
      </RadioGroup>
</div> 
            </div>: <div className="submitted-story">
                <div className="submitted">
                    <p>🎉</p>
                    <img />
                </div>

                <h2>Thank you for sharing your story!</h2>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        }
        
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth onClick={handleSubmit}>{submitted ? 'Share another Story': 'Share Story'}</Button>
      </FormControl>
    </Paper>
            </div>
        </div>
    )
}

export default Sharestory
