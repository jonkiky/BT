/* eslint-disable */
// material-ui
import { Typography } from '@mui/material';
import { Box, Grid, Button, Container} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import { IconArrowNarrowRight, IconBrandGithub } from '@tabler/icons';

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
import SharePic from '../../assets/images/landing/share.png';
import CalendarPic from '../../assets/images/landing/calendar.jpg';
import executePic from '../../assets/images/landing/execute.jpg';
import MapPic from '../../assets/images/landing/map.jpg';
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

const BlackMediaLoginButton = styled(Button)(() => ({
  color: '#fff',
  width: '300px',
  margin: 'auto 10px',
  borderRadius: '25px',
  fontSize: '20px',
  backgroundColor: '#212121',
  '&:hover': {
    backgroundColor: '#212121',
  },
}));

const BlackMediaOutlineLoginButton = styled(Button)(() => ({
  color: '#212121',
  width: '300px',
  margin: 'auto 10px',
  borderRadius: '25px',
  fontSize: '20px',
  border: '#212121 solid 2px',
  '&:hover': {
    border: '#212121 solid 2px',
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
                  <Box component="span"  sx={{ textAlign: 'center',color:'#000',float: 'right', width: '50px',ml: 2, mr: 1, background:'#fff'}}>
                    <IconBrandGithub/>
                  </Box>
                  <Box component="span"  sx={{ textAlign: 'center',color:'#fff',float: 'right', width: '50px', mr: 0, background:'#212121',paddingTop: '8px'}}}>
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


    <Grid container spacing={gridSpacing} sx={{ background: '#f8f8f8', mt:15, mb:10}}>
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
        <Grid container spacing={3} sx={{ backgroundImage:{introPic} }} sx={{mt:3, mb:8}}>
            <Grid item lg={6} md={12} sm={12} xs={12} >
                <Box sx={{ lineHeight: '45px', fontSize: '45px', color: 'black', fontWeight: '600', pt:5,pb:5}}>
                     Plan your time and event
                </Box>
                <Box sx={{ fontSize: '25px', lineHeight: '30px',color: 'black' , pr: 10, mb:3}}>
                    Plan your event and propose several time slots to them to book your time on your schedule.
                 </Box>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
                <img src={CalendarPic} width="100%"/>
            </Grid>
        </Grid>



         <Grid container spacing={3} sx={{ backgroundImage:{introPic} }} sx={{mt:3, mb:8}}>
             
            <Grid item lg={6} md={12} sm={12} xs={12} >
                <Box sx={{ lineHeight: '45px', fontSize: '45px', color: 'black', fontWeight: '600', pt:10,pb:5}}>
                      Share your time book 
                </Box>
                <Box sx={{ fontSize: '25px', lineHeight: '30px',color: 'black' , pr: 10, mb:3}}>
                    Sent you timebook out, Let them know your schedule.
                 </Box>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
                <img src={SharePic} width="100%"/>
            </Grid>
        </Grid>


 <Grid container spacing={3} sx={{ backgroundImage:{introPic} }} sx={{mt:3, mb:8}}>
            <Grid item lg={6} md={12} sm={12} xs={12} >
                <Box sx={{ lineHeight: '45px', fontSize: '45px', color: 'black', fontWeight: '600', pt:10,pb:5}}>
                      Best time fit everyone's schedule
                </Box>
                <Box sx={{ fontSize: '25px', lineHeight: '30px',color: 'black' , pr: 10, mb:3}}>
                   Everyone marks their available time, find the one can fit all. 
                 </Box>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
                <img src={executePic} width="80%"/>
            </Grid>
        </Grid>

   
    </Container>


     <Container maxWidth="lg" >
        <Grid container spacing={3} sx={{ backgroundImage:{introPic} }} sx={{mt:25, mb:30,  textAlign: 'center'}}>
            <Grid item lg={12} md={12} sm={12} xs={12} >
                <Box sx={{lineHeight: '45px', fontSize: '45px', color: 'black', fontWeight: '600', pt:10,pb:5}}>
                     Focus on your real work, we help the coordination. 
                </Box>
                <Box sx={{ fontSize: '25px', lineHeight: '30px',color: 'black' , pr: 10, mb:3}}>
                    BT is a faster way to  coordination people to find the Best time fit everyone's schedule. Let you focus on real work . 
                 </Box>
            </Grid>
             <Box sx={{margin: 'auto', mt:7}}>
                    <BlackMediaLoginButton variant="contained" > Get Started
  </BlackMediaLoginButton>


   <BlackMediaOutlineLoginButton variant="outlined" > Sign up for free
                     
  </BlackMediaOutlineLoginButton>

                 </Box>
        </Grid>

   
    </Container>

         <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}  sx={{textAlign:'center', backgroundImage: `url(${MapPic})`, color:'#fff', pt:5, pb:5, m:0}}>
             <Container maxWidth="lg">
                  <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{textAlign:'center', lineHeight: '280px'}}>
                        <Box sx={{lineHeight: '45px', fontSize: '45px', color: '#fff', fontWeight: '600', pt:10,pb:5}}>
                    jonkiky@gmail.com
                      </Box>
                    </Grid>
                 </Grid>
              </Container>
            </Grid>
        </Grid>
        

        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}  sx={{textAlign:'center', high:'300px', background: '#212121', color:'#fff', pt:5, pb:2, m:0}}>
             <Container maxWidth="lg">
                  <Grid container>
                    <Grid item lg={12} md={12} sm={12} xs={12} >
                        <Logo />  

                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}  sx={{ pt:3, m:0}} >
                      Copyright © 2022 Y&L Solution LLC.  All Rights Reserved. Design BY &hearts; Jonkiky 
                    </Grid>
                     <Grid item lg={12} md={12} sm={12} xs={12}  sx={{ pt:3, m:0}} >
                            <Box sx={{margin: 'auto',lineHeight: '25px', fontSize: '18px', color: '#fff', fontWeight: '600', pt:1,pb:1, width:"200px",border: '#fff solid 3px',borderRadius: '25px'}}>
                                   Beta version
                            </Box>
                    </Grid>
                 </Grid>

              </Container>
            </Grid>
        </Grid>
        
    </>
);

} 

export default HomePage;
