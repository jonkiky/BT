/* eslint-disable */
// material-ui
import { Typography } from '@mui/material';
import { Box, Grid, Button, Container} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import { IconArrowNarrowRight } from '@tabler/icons';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import { gridSpacing } from '../../store/constant';
import Logo from 'ui-component/Logo';
import introPic from '../../assets/images/landing/intro.jpg';
import BuzzPic from '../../assets/images/landing/business.jpg';
import StuPic from '../../assets/images/landing/student_activities.jpg';
import AcitivePic from '../../assets/images/landing/Activities.jpg';
// project imports


const BlackBigLoginButton = styled(Button)(() => ({
  color: '#fff',
  width: '70%',
  margin: 'auto 10px',
  borderRadius: '25px',
  fontSize: '20px',
  backgroundColor: '#212121',
  '&:hover': {
    backgroundColor: '#212121',
  },
}));


const BlackSMLoginButton = styled(Button)(() => ({
  color: '#212121',
  width: '150px',
  margin: 'auto 10px',
  borderRadius: '25px',
  fontSize: '15px',
  border: '#212121 solid 2px',
  '&:hover': {
    backgroundColor: '#212121',
    color: '#fff',
  },
}));



const HomePage = () => {
    

const theme = useTheme();
    
return (
    <>
     <Grid container spacing={3} sx={{ background: '#f8f8f8', color: '#212121', lineHeight: '40px', height:'40px',marginTop: '0'}}>
      <Container maxWidth="lg">
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Box component="span" sx={{ textAlign: 'center',color: '#212121',width: '50px',ml: 2}}>
                    It starts with when - the new Doodle is here. Find out more
                  </Box>

                  <Box component="span"  sx={{ textAlign: 'center',color:'#fff',float: 'right', width: '50px', mr: 1, background:'#212121'}}>
                    Login 
                  </Box>
                </Grid>
        </Container>
     </Grid>
      
      <Container maxWidth="lg">
        <Grid container spacing={1} direction="row" sx={{ mt: 2, mb: 1}}>
            <Grid item>
                    <Logo />  
            </Grid>
            <Grid item  lg={4} md={4} sm={4} >
              <Box sx={{ lineHeight: '40px', fontSize: '25px', color: 'black', fontWeight: 'bolder'}}>
                      BookTime
                </Box>
            </Grid>
           
            <Grid item lg={7} md={7} sm={7} >
                <Box sx={{ float: 'right',mt: 0}}>
                   <BlackSMLoginButton variant="outlined">Sign up free</BlackSMLoginButton>
                  </Box>
            </Grid>
            
        </Grid>
       
        <Grid container spacing={3} sx={{ backgroundImage:{introPic} }}>
            <Grid item lg={6} md={12} sm={12} xs={12} >
                <Box sx={{ lineHeight: '70px', fontSize: '65px', color: 'black', fontWeight: '600', pt:12,pb:4}}>
                      Professional scheduling made easy
                </Box>
                <Box sx={{ fontSize: '20px', lineHeight: '30px',color: 'black' , pr: 12, mb:5}}>
                    Doodle is the fastest and easiest way to schedule anything — from meetings to the next great collaboration.
                 </Box>
                  <Box>
                    <BlackBigLoginButton variant="contained" > Create a timesheet
                     <IconArrowNarrowRight 
    size={36} // set custom `width` and `height`
    color="#fff" // set `stroke` color
    stroke={3}  // set `stroke-width`
    strokeLinejoin="miter" // override other SVG props
  />

  </BlackBigLoginButton>
                 </Box>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
                <img src={introPic} width="100%"/>
            </Grid>
        </Grid>

   
    </Container>


    <Grid container spacing={gridSpacing} sx={{ background: '#f8f8f8', mt:15, mb:12}}>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt:1, mb:1}}>
              <Box sx={{ textAlign: 'center',lineHeight: '40px', fontSize: '40px', color: 'black', fontWeight: '600', pt: 8,pb:8}}>
                     No more back and forth to coordinate time for all. 
                </Box>
            </Grid>

            <Container maxWidth="lg" sx={{ textAlign: 'center',mb:20}}>
             <Grid container spacing={5}>
                  <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card sx={{ width: '100%', border: '#212121 solid 1px', p :1 }}>
                        <CardMedia
                          component="img"
                          alt="business"
                          height="200"
                          image={BuzzPic}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h3" component="div">
                            Get to talking to prospects faster
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                      Make it easy for prospects and clients to book your time. All with a completely professional experience.
                          </Typography>
                        </CardContent>
                      </Card>
                  </Grid>
                   <Grid item lg={4} md={4} sm={12} xs={12}>
                      <Card sx={{ height: '385px',width: '100%', border: '#212121 solid 1px', p :1 }}>
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          height="200"
                          image={AcitivePic}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h3" component="div">
                            Find the right time for any number of people
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Get board activities scheduled quickly, no matter how complicated their schedules are.
                          </Typography>
                        </CardContent>
                      </Card>
                  </Grid>
                   <Grid item lg={4} md={4} sm={12} xs={12}>
                      <Card sx={{ width: '100%', border: '#212121 solid 1px', p :1 }}>
                        <CardMedia
                          component="img"
                          alt="green iguana"
                          height="200"
                          image={StuPic}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h3" component="div">
                            Focus on learning, not scheduling
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Easy scheduling for just about any kind of educational meeting—so your staff can focus on the real work.
                          </Typography>
                        </CardContent>
                      </Card>
                  </Grid>
              </Grid>
            </Container>
        </Grid>

        <Container maxWidth="lg" >
        <Grid container spacing={3} sx={{ backgroundImage:{introPic} }} sx={{mt:10, mb:8}}>
            <Grid item lg={6} md={12} sm={12} xs={12} >
                <Box sx={{ lineHeight: '45px', fontSize: '45px', color: 'black', fontWeight: '600', pt:10,pb:5}}>
                      Professional scheduling made easy
                </Box>
                <Box sx={{ fontSize: '25px', lineHeight: '30px',color: 'black' , pr: 10, mb:3}}>
                    Doodle is the fastest and easiest way to schedule anything — from meetings to the next great collaboration.
                 </Box>
                  <Box>
                    <BlackBigLoginButton variant="contained" > Create a timesheet
                     <IconArrowNarrowRight 
    size={36} // set custom `width` and `height`
    color="#fff" // set `stroke` color
    stroke={3}  // set `stroke-width`
    strokeLinejoin="miter" // override other SVG props
  />

  </BlackBigLoginButton>
                 </Box>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
                <img src={introPic} width="100%"/>
            </Grid>
        </Grid>

   
    </Container>


     <Container maxWidth="lg" >
        <Grid container spacing={3} sx={{ backgroundImage:{introPic} }} sx={{mt:20, mb:25,  textAlign: 'center'}}>
            <Grid item lg={12} md={12} sm={12} xs={12} >
                <Box sx={{lineHeight: '45px', fontSize: '45px', color: 'black', fontWeight: '600', pt:10,pb:5}}>
                      Professional scheduling made easy
                </Box>
                <Box sx={{ fontSize: '25px', lineHeight: '30px',color: 'black' , pr: 10, mb:3}}>
                    Doodle is the fastest and easiest way to schedule anything — from meetings to the next great collaboration.
                 </Box>
                  <Box>
                    <BlackBigLoginButton variant="contained" > Create a timesheet
                     <IconArrowNarrowRight 
    size={36} // set custom `width` and `height`
    color="#fff" // set `stroke` color
    stroke={3}  // set `stroke-width`
    strokeLinejoin="miter" // override other SVG props
  />

  </BlackBigLoginButton>
                 </Box>
            </Grid>
        </Grid>

   
    </Container>

        

        <Grid container>
            <Grid item lg={12} md={6} sm={6} xs={6}  sx={{textAlign:'center', high:'300px', background: '#212121', color:'#fff', pt:10, pb:8, m:0}}>
             <Container maxWidth="lg">
                  <Grid container>
                    <Grid item>
                        <Logo />  
                    </Grid>
                 </Grid>
              </Container>
            </Grid>
        </Grid>
        
    </>
);

} 

export default HomePage;
