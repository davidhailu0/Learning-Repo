import React from 'react';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import './hoverpage.css';

export default function HoverPage(props){
    return  (<div className='hoverDiv' style={props.style}>
        <Typography variant="h5" gutterBottom component="div" textAlign={'center'} sx={{mb:'5'}}>
       In this Section
      </Typography>
      <div className='divider'></div>
      <ul className='about_aastu'>
         {props.links.map((link,ind)=> <li key={ind}><Link to={`/${link.toLowerCase().replace(' ','-')}`}><Typography variant="h6" gutterBottom component="div" margin={0} padding={0}>
       {link}</Typography></Link></li>)}
      </ul>
        </div>);
} 