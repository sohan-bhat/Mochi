import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  ToggleButton,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const IngredientCategory = ({ category, selected, onChange, defaultExpanded }) => {
  const toggleItem = (item) => {
    const next = selected.includes(item)
      ? selected.filter((i) => i !== item)
      : [...selected, item];
    onChange(category.id, next);
  };

  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      sx={{ borderTop: '1px solid', borderColor: 'divider' }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ flex: 1 }}>
          <Box
            component="img"
            src={category.icon}
            alt=""
            sx={{ width: 32, height: 32, objectFit: 'contain' }}
          />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {category.title}
          </Typography>
          {selected.length > 0 && (
            <Typography
              variant="caption"
              sx={{
                ml: 'auto',
                px: 1.25,
                py: 0.25,
                borderRadius: 999,
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                fontWeight: 600,
              }}
            >
              {selected.length}
            </Typography>
          )}
        </Stack>
      </AccordionSummary>

      <AccordionDetails>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {category.items.map((item) => (
            <ToggleButton
              key={item}
              value={item}
              selected={selected.includes(item)}
              onChange={() => toggleItem(item)}
              size="small"
            >
              {item}
            </ToggleButton>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default IngredientCategory;
