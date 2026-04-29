import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { AutoAwesome, RestartAlt } from '@mui/icons-material';

import { INGREDIENT_CATEGORIES, MEAL_TYPES } from '../data/ingredients';
import { generateRecipes } from '../lib/groq';
import IngredientCategory from './IngredientCategory';
import IngredientSearch from './IngredientSearch';
import RecipeResponse from './RecipeResponse';

const buildEmptySelection = () =>
  Object.fromEntries(INGREDIENT_CATEGORIES.map((c) => [c.id, []]));

const IngredientsList = () => {
  const [selectionByCategory, setSelectionByCategory] = useState(buildEmptySelection);
  const [notes, setNotes] = useState('');
  const [mealType, setMealType] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const responseRef = useRef(null);

  const allSelected = useMemo(
    () => Object.values(selectionByCategory).flat(),
    [selectionByCategory],
  );

  const totalCount = allSelected.length;

  const handleCategoryChange = (categoryId, values) => {
    setSelectionByCategory((prev) => ({ ...prev, [categoryId]: values }));
  };

  const handleSearchAdd = ({ categoryId, label }) => {
    setSelectionByCategory((prev) => {
      const existing = prev[categoryId] || [];
      if (existing.includes(label)) return prev;
      return { ...prev, [categoryId]: [...existing, label] };
    });
  };

  const handleClear = () => {
    setSelectionByCategory(buildEmptySelection());
    setNotes('');
    setMealType('');
    setResponse('');
    setError(null);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setResponse('');
    try {
      const content = await generateRecipes({
        ingredients: allSelected,
        mealType,
        notes,
      });
      setResponse(content);
    } catch (err) {
      console.error(err);
      setError('Something went wrong while generating recipes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (response && responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [response]);

  const canSubmit = totalCount > 0 && !loading;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
      <Stack spacing={1.5} sx={{ mb: 5, maxWidth: 720 }}>
        <Typography variant="overline" color="primary.main">
          Build your kitchen
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}>
          What’s in your pantry today?
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Pick anything you have on hand. Add a meal type and any dietary notes, and we’ll suggest a few
          recipes you can actually cook tonight.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr' },
          gap: { xs: 4, md: 6 },
          alignItems: 'start',
        }}
      >
        <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 }, borderRadius: 3 }}>
          <Box sx={{ pb: { xs: 1, md: 2 } }}>
            <IngredientSearch
              selectionByCategory={selectionByCategory}
              onAdd={handleSearchAdd}
            />
          </Box>
          {INGREDIENT_CATEGORIES.map((category, idx) => (
            <IngredientCategory
              key={category.id}
              category={category}
              selected={selectionByCategory[category.id]}
              onChange={handleCategoryChange}
              defaultExpanded={idx === 0}
            />
          ))}
        </Paper>

        <Stack
          spacing={3}
          sx={{
            position: { md: 'sticky' },
            top: { md: 96 },
          }}
        >
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="overline" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
              Selected · {totalCount}
            </Typography>

            {totalCount === 0 ? (
              <Typography variant="body2" color="text.secondary">
                Choose ingredients on the left to start building your recipe.
              </Typography>
            ) : (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {allSelected.slice(0, 30).map((item) => (
                  <Chip key={item} label={item} size="small" />
                ))}
                {allSelected.length > 30 && (
                  <Chip label={`+${allSelected.length - 30} more`} size="small" variant="outlined" />
                )}
              </Box>
            )}

            <Stack spacing={2} sx={{ mt: 2 }}>
              <TextField
                label="Meal type"
                select
                value={mealType}
                onChange={(e) => setMealType(e.target.value)}
                fullWidth
              >
                <MenuItem value="">Any</MenuItem>
                {MEAL_TYPES.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                label="Other ingredients or dietary notes"
                placeholder="e.g. vegan, gluten-free, has cilantro"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                fullWidth
                multiline
                minRows={2}
              />

              <Stack direction="row" spacing={1.5}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={loading ? <CircularProgress size={18} color="inherit" /> : <AutoAwesome />}
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  sx={{ flex: 1 }}
                >
                  {loading ? 'Generating…' : 'Find recipes'}
                </Button>
                <Button
                  variant="text"
                  color="inherit"
                  startIcon={<RestartAlt />}
                  onClick={handleClear}
                  disabled={loading || (totalCount === 0 && !notes && !mealType)}
                  sx={{ color: 'text.secondary' }}
                >
                  Clear
                </Button>
              </Stack>
            </Stack>
          </Paper>

          {error && (
            <Alert severity="error" variant="outlined">
              {error}
            </Alert>
          )}
        </Stack>
      </Box>

      <RecipeResponse ref={responseRef} content={response} />
    </Container>
  );
};

export default IngredientsList;
