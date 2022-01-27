import {useState,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import aastulogo from '../../Images/AASTU_LOGO.jpg';
import Drawer from '@mui/material/Drawer';
import InputBase from '@mui/material/InputBase';
import {Link} from 'react-router-dom';
import List from '@mui/material/List';
import SearchIcon from '@mui/icons-material/Search';
import {styled, alpha,createTheme,ThemeProvider} from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HoverPage from '../HoverPage';
import Triangle from '../Triangle';
import './header.css';
import {links,aboutAASTULinks,admissionLinks,lifeAASTULinks,academicLinks,researchLinks} from '../data';

const ResponsiveAppBar = (props) => {
  const [style,setStyle] = useState({});
  const [hoverDiv,setHoverDiv] = useState({display:'none'});
  const [state, setstate] = useState(false);
  const [passedLinks,setPassedLinks] = useState([]);
  useEffect(()=>{
    setHoverDiv({display:'none'})
    setStyle({display:'none'})
  },[props.style])
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setstate(open);
  };
  const pages = links;
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
        {pages.map((text) => (
           <Accordion key={text}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color={'GrayText'}>{text}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={'darkgray'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        ))}
      </List>
    </Box>
  );
  const customTheme = createTheme({
    palette:{
      secondary:{
        main:'#ffffff'
      }
    }
  });
  const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
  return (
    <ThemeProvider theme={customTheme} >
    <AppBar position="fixed" onMouseOver={(e)=>{
      e.stopPropagation();
      setStyle({display:'none'});
      setHoverDiv({display:'none'})
      props.setHoverDisplay()
    }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
          <Link to='/'><img src={aastulogo} alt='logo' height={'70'}/></Link>
         </Box>
         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} paddingTop={"5px"} className='btnContainer'>
            {pages.map((page) => (
              <Link
                to={`/${page.toLowerCase().replace(' ','-')}`}
                key={page}
                className='links'
                onMouseOver={(e)=>{
                  e.stopPropagation();
                  if(page==='About AASTU'){
                    setPassedLinks(aboutAASTULinks); 
                    setStyle({display:'block',left:'225px'})
                    setHoverDiv({display:'block'});
                  }
                  else if(page==='Admissions'){
                    setPassedLinks(admissionLinks);
                    setStyle({display:'block',left:'333px'})
                    setHoverDiv({display:'block'});
                  }
                  else if(page==='Academics'){
                    setPassedLinks(academicLinks);
                    setStyle({display:'block',left:'435px'})
                    setHoverDiv({display:'block'});
                  }
                  else if(page==='University Life'){
                    setPassedLinks(lifeAASTULinks);
                    setStyle({display:'block',left:'550px'})
                    setHoverDiv({display:'block'});
                  }
                  else if(page==='Research'){
                     setPassedLinks(researchLinks);
                     setStyle({display:'block',left:'655px'})
                     setHoverDiv({display:'block'});
                  }
                }}
                sx={{color: 'white', display: 'block' }}
              >
                {page}
              </Link>
            ))}
          </Box>
          <Box className={'search_and_login'} sx={{display:{xs:'none',md:'flex'}}} onMouseOver={(e)=>e.stopPropagation()}>
                <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Link to={'/login'} className={'link'} sx={{color:'white'}}>Login</Link>
          </Box>
          <Box sx={{flexGrow:1,display:{xs:'flex',md:'none'}}}></Box>
          <Box sx={{display:{xs:'flex',md:'none'}}}>
              <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color='secondary'
            >
              <MenuIcon />
            </IconButton>
            <Drawer
            anchor={'right'}
            open={state}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Box onMouseOver={(e)=>e.stopPropagation()}>
      <Triangle style={style}/>
    </Box>
     <Box onMouseOver={(e)=>e.stopPropagation()}>
                <HoverPage style={hoverDiv} links={passedLinks}/>
     </Box>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;