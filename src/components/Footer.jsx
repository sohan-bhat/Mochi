import { Box, Container, Typography, Stack } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 4,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={1}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Mochi
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Always cook with care
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
