import {Component} from 'react';
import Typography from  '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import './footer.css';
import { aboutAASTULinks, academicLinks, researchLinks } from '../data';

export default class Footer extends Component{
    render(){
        return(<Box className='footer' sx={{display:{xs:'grid',md:'flex'},height:{xs:'500px',md:'300px'}}} justifyContent={'space-around'} alignItems={'center'} rowGap={'2rem'}>
            <div>
                <Typography color={'white'}>
               Addis Ababa Science and Technology University
                </Typography>
                <p>&copy; 2022 Addis Ababa Science and Technology Addis Ababa, Ethiopia</p>
            </div>
            <div>
                <Link to='/admissions'><Typography>Study at AASTU</Typography></Link>
                <ul>
                    {academicLinks.map((link,ind)=><li key={ind} ><Link to={`/${link.toLowerCase().replace(' ','-')}`}><Typography>{link}</Typography></Link></li>)}
                </ul>
            </div>
             <div>
                <Link to='/about-aastu'><Typography>About AASTU</Typography></Link>
                <ul>
                    {aboutAASTULinks.map((link,ind)=><li key={ind} ><Link to={`/${link.toLowerCase().replace(' ','-')}`}><Typography>{link}</Typography></Link></li>)}
                </ul>
            </div>
            <div>
                <Link to='/research'><Typography >Research</Typography></Link>
                <ul>
                    {researchLinks.map((link,ind)=><li key={ind} ><Link to={`/${link.toLowerCase().replace(' ','-')}`}><Typography>{link}</Typography></Link></li>)}
                </ul>
            </div>
        </Box>)
    }
}