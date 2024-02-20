import { AppBar, Box, CssBaseline, Drawer, IconButton, ListItem, ListItemButton, ListItemText, Toolbar, Divider, Typography, CardContent, CardActionArea, CardMedia } from '@mui/material';
import { Button, Card, List } from 'antd';
import * as React from 'react';
import './Home.css'

const drawerWidth = 240;
const navItems = ['Home', 'Tickets', 'OrderStatus'];

export default function DrawerAppBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
        Amigo Cinemazzz
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f0f0' }}>
        <CssBaseline />
        <AppBar position="fixed" component="nav" sx={{ background: '#333' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              {/* Put an icon component here */}
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
            >
              Amigo Cinemazzz
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: '#fff' }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontSize: 30, fontWeight: 600, color: '000000', textAlign: 'center' }}>
            <h1>Welcome to Amigo Cinemazz</h1>
          </Typography>
          <Button className='button' variant="contained" style={{ backgroundColor: " #368de5" }} disableElevation sx={{ marginTop: 2 }}>
            Book Ticket
          </Button>
          <div >
            <div className="bannercontainer">
              <Button className='hbutton'>Now Showing </Button>
              <Button className='hbutton' variant="contained" color="success">
                Next Change
              </Button>
              <Button className='hbutton' variant="outlined" color="error">
                Comming Soon
              </Button>
            </div>
          </div>
        </Box>

      </Box>
      <div className="card">
        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Premalu-Malayalam
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </div>
    </>


  );
}
