import { Box, Paper, Typography } from '@mui/material';
import { forwardRef } from 'react';
import Markdown from 'react-markdown';

const RecipeResponse = forwardRef(({ content }, ref) => {
  if (!content) return null;

  return (
    <Box ref={ref} sx={{ mt: 6 }}>
      <Typography variant="overline" color="primary.main" sx={{ display: 'block', mb: 1.5 }}>
        Suggestions for you
      </Typography>
      <Paper
        variant="outlined"
        sx={{
          p: { xs: 3, md: 5 },
          borderRadius: 3,
          backgroundColor: 'background.paper',
          animation: 'fadeUp 480ms ease',
          '@keyframes fadeUp': {
            from: { opacity: 0, transform: 'translateY(12px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
          '& h1, & h2, & h3': {
            fontFamily: '"Fraunces", serif',
            fontWeight: 600,
            letterSpacing: '-0.01em',
            marginTop: '1.25em',
            marginBottom: '0.5em',
          },
          '& h1:first-of-type, & h2:first-of-type, & h3:first-of-type': {
            marginTop: 0,
          },
          '& p': {
            fontFamily: '"Inter", sans-serif',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'text.primary',
            marginBlock: '0.5em',
          },
          '& strong': { color: 'primary.dark' },
          '& ul, & ol': { paddingLeft: '1.25rem', marginBlock: '0.75em' },
          '& li': { marginBottom: '0.4em', lineHeight: 1.65 },
          '& hr': { border: 0, borderTop: '1px solid', borderColor: 'divider', my: 3 },
        }}
      >
        <Markdown>{content}</Markdown>
      </Paper>
    </Box>
  );
});

RecipeResponse.displayName = 'RecipeResponse';

export default RecipeResponse;
