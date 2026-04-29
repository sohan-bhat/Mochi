import { Box, Link, Paper, Stack, Typography } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import { forwardRef, useMemo } from 'react';
import Markdown from 'react-markdown';

const RECIPE_SOURCES = {
  primary: {
    name: 'AllRecipes',
    url: (q) => `https://www.allrecipes.com/search?q=${encodeURIComponent(q)}`,
  },
  alternates: [
    {
      name: 'Bon Appétit',
      url: (q) => `https://www.bonappetit.com/search?q=${encodeURIComponent(q)}`,
    },
    {
      name: 'Serious Eats',
      url: (q) => `https://www.seriouseats.com/search?q=${encodeURIComponent(q)}`,
    },
    {
      name: 'Tasty',
      url: (q) => `https://tasty.co/search?q=${encodeURIComponent(q)}`,
    },
  ],
};

const stripFormatting = (text) =>
  text.replace(/^#+\s*/, '').replace(/\*\*?/g, '').trim();

const parseRecipes = (content) => {
  const recipes = [];
  let current = null;
  for (const rawLine of content.split('\n')) {
    const line = rawLine.trimEnd();
    const headingMatch = line.match(/^#{1,4}\s+(.+)$/);
    if (headingMatch) {
      if (current) recipes.push(current);
      current = { title: stripFormatting(headingMatch[1]), description: '' };
    } else if (current) {
      current.description += rawLine + '\n';
    }
  }
  if (current) recipes.push(current);
  return recipes
    .map((r) => ({ ...r, description: r.description.trim() }))
    .filter((r) => r.title);
};

const RecipeCard = ({ recipe }) => {
  const primaryHref = RECIPE_SOURCES.primary.url(recipe.title);

  return (
    <Box
      sx={{
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
        '&:first-of-type': { borderTop: 0, pt: 0 },
        '&:last-of-type': { pb: 0 },
      }}
    >
      <Typography
        variant="h5"
        component="h3"
        sx={{ mb: 1.25, fontFamily: '"Fraunces", serif', fontWeight: 600 }}
      >
        <Link
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          underline="always"
          sx={{
            color: 'primary.dark',
            textDecorationColor: (t) => t.palette.primary.light,
            textDecorationThickness: '2px',
            textUnderlineOffset: '4px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
            transition: 'color 160ms ease',
            '&:hover': {
              color: 'primary.main',
              textDecorationColor: (t) => t.palette.primary.main,
            },
          }}
        >
          {recipe.title}
          <OpenInNew sx={{ fontSize: '0.7em', opacity: 0.6 }} />
        </Link>
      </Typography>

      {recipe.description && (
        <Box
          sx={{
            color: 'text.secondary',
            '& p': {
              fontFamily: '"Inter", sans-serif',
              fontSize: '1rem',
              lineHeight: 1.65,
              marginBlock: '0.25em',
            },
            '& strong': { color: 'text.primary', fontWeight: 600 },
          }}
        >
          <Markdown>{recipe.description}</Markdown>
        </Box>
      )}

      <Stack
        direction="row"
        spacing={1.5}
        alignItems="center"
        flexWrap="wrap"
        sx={{ mt: 1.5, rowGap: 0.5 }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            fontWeight: 600,
          }}
        >
          Also on
        </Typography>
        {RECIPE_SOURCES.alternates.map((source, idx) => (
          <Box key={source.name} sx={{ display: 'flex', alignItems: 'center' }}>
            <Link
              href={source.url(recipe.title)}
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
              sx={{
                fontSize: '0.85rem',
                color: 'text.secondary',
                fontWeight: 500,
                transition: 'color 160ms ease',
                '&:hover': { color: 'primary.main' },
              }}
            >
              {source.name}
            </Link>
            {idx < RECIPE_SOURCES.alternates.length - 1 && (
              <Typography
                component="span"
                sx={{ ml: 1.5, color: 'divider', fontSize: '0.85rem' }}
              >
                ·
              </Typography>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

const RecipeResponse = forwardRef(({ content }, ref) => {
  const recipes = useMemo(() => (content ? parseRecipes(content) : []), [content]);

  if (!content) return null;

  const hasStructuredRecipes = recipes.length > 0;

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
        }}
      >
        {hasStructuredRecipes ? (
          recipes.map((recipe) => <RecipeCard key={recipe.title} recipe={recipe} />)
        ) : (
          <Box sx={{ '& p': { lineHeight: 1.7 } }}>
            <Markdown>{content}</Markdown>
          </Box>
        )}

        <Typography
          variant="caption"
          sx={{
            display: 'block',
            mt: 4,
            pt: 2,
            borderTop: '1px solid',
            borderColor: 'divider',
            color: 'text.secondary',
            fontStyle: 'italic',
          }}
        >
          Tap a recipe name to open directions on the recipe site.
        </Typography>
      </Paper>
    </Box>
  );
});

RecipeResponse.displayName = 'RecipeResponse';

export default RecipeResponse;
