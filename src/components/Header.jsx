import { AppBar, Box, Container, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const onRecipes = location.pathname.startsWith('/recipes');

  return (
    <AppBar position="sticky" color="transparent">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: 72 }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{ display: 'flex', alignItems: 'center', gap: 1.5, textDecoration: 'none', color: 'text.primary' }}
          >
            <Box
              component="img"
              src="/foodify.png"
              alt="Foodify"
              sx={{ width: 36, height: 36, transform: 'rotate(45deg)' }}
            />
            <Typography
              variant="h6"
              sx={{ fontFamily: '"Fraunces", serif', fontWeight: 600, letterSpacing: '-0.01em' }}
            >
              Foodify
            </Typography>
          </Box>

          <Button
            component={RouterLink}
            to={onRecipes ? '/' : '/recipes'}
            variant={onRecipes ? 'text' : 'contained'}
            color="primary"
            size="small"
          >
            {onRecipes ? 'Home' : 'Get started'}
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
