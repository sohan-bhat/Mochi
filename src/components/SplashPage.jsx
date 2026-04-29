import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const features = [
  {
    label: 'Pick what you have',
    body: 'Browse a curated set of pantry staples, produce, proteins, and more: no typing required.',
  },
  {
    label: 'Tell us your craving',
    body: 'Choose a meal type and add dietary notes. The model will respect every restriction you mention.',
  },
  {
    label: 'Cook in minutes',
    body: 'Get three to four recipe ideas tailored to what you actually have in your kitchen.',
  },
];

const SplashPage = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'background.default',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(60% 60% at 20% 0%, rgba(31,77,44,0.07) 0%, rgba(31,77,44,0) 70%), radial-gradient(50% 50% at 90% 30%, rgba(184,132,90,0.08) 0%, rgba(184,132,90,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', py: { xs: 8, md: 14 } }}>
        <Stack spacing={6} alignItems="center" textAlign="center" maxWidth={780} mx="auto">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.75rem', sm: '3.5rem', md: '4.5rem' },
            }}
          >
            Turn what you have into{' '}
            <Box component="span" sx={{ fontStyle: 'italic', color: 'primary.main' }}>
              what you’ll cook tonight.
            </Box>
          </Typography>

          <Typography variant="body1" sx={{ fontSize: '1.125rem', color: 'text.secondary', maxWidth: 580 }}>
            Foodify takes the ingredients already in your kitchen and suggests recipes you can actually make
            tuned to your meal of choice and any dietary preferences.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              component={RouterLink}
              to="/recipes"
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
            >
              Find a recipe
            </Button>
            <Button
              component="a"
              href="#how-it-works"
              variant="text"
              size="large"
              color="inherit"
              sx={{ color: 'text.secondary' }}
            >
              How it works
            </Button>
          </Stack>
        </Stack>

        <Box
          id="how-it-works"
          sx={{
            mt: { xs: 10, md: 16 },
            display: 'grid',
            gap: 3,
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={feature.label}
              sx={{
                p: 4,
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'background.paper',
              }}
            >
              <Typography
                variant="overline"
                sx={{ color: 'text.secondary', display: 'block', mb: 1.5 }}
              >
                Step {String(index + 1).padStart(2, '0')}
              </Typography>
              <Typography variant="h5" sx={{ mb: 1 }}>
                {feature.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.body}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default SplashPage;
