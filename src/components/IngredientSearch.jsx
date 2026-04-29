import { useMemo } from 'react';
import {
  Autocomplete,
  Box,
  InputAdornment,
  ListSubheader,
  TextField,
  Typography,
} from '@mui/material';
import { Search, Check } from '@mui/icons-material';

import { INGREDIENT_CATEGORIES } from '../data/ingredients';

const buildOptions = () => {
  const seen = new Map();
  for (const category of INGREDIENT_CATEGORIES) {
    for (const item of category.items) {
      const key = item.toLowerCase();
      if (!seen.has(key)) {
        seen.set(key, {
          label: item,
          categoryId: category.id,
          categoryTitle: category.title,
        });
      }
    }
  }
  return Array.from(seen.values()).sort((a, b) =>
    a.categoryTitle.localeCompare(b.categoryTitle) || a.label.localeCompare(b.label),
  );
};

const IngredientSearch = ({ selectionByCategory, onAdd }) => {
  const options = useMemo(buildOptions, []);

  const isSelected = (option) => {
    const list = selectionByCategory[option.categoryId];
    return Array.isArray(list) && list.includes(option.label);
  };

  return (
    <Autocomplete
      options={options}
      groupBy={(option) => option.categoryTitle}
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={(opt, val) =>
        opt.label === val.label && opt.categoryId === val.categoryId
      }
      value={null}
      blurOnSelect
      clearOnBlur
      autoHighlight
      onChange={(_event, newValue) => {
        if (newValue && !isSelected(newValue)) {
          onAdd(newValue);
        }
      }}
      renderGroup={(params) => (
        <li key={params.key}>
          <ListSubheader
            component="div"
            sx={{
              backgroundColor: 'background.paper',
              color: 'text.secondary',
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              lineHeight: '32px',
              px: 2,
            }}
          >
            {params.group}
          </ListSubheader>
          <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
            {params.children}
          </Box>
        </li>
      )}
      renderOption={(props, option) => {
        const selected = isSelected(option);
        const { key, ...rest } = props;
        return (
          <Box
            component="li"
            key={key}
            {...rest}
            sx={{
              ...rest.sx,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2,
              py: 1,
              fontSize: '0.9rem',
              color: selected ? 'text.disabled' : 'text.primary',
              cursor: selected ? 'default' : 'pointer',
            }}
            aria-disabled={selected || undefined}
          >
            <Typography
              component="span"
              sx={{
                fontSize: '0.9rem',
                textTransform: 'capitalize',
                color: 'inherit',
              }}
            >
              {option.label}
            </Typography>
            {selected && (
              <Check sx={{ fontSize: 16, color: 'primary.main', ml: 1 }} />
            )}
          </Box>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search ingredients…"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start" sx={{ ml: 0.5, mr: -0.5 }}>
                <Search sx={{ fontSize: 20, color: 'text.secondary' }} />
              </InputAdornment>
            ),
          }}
        />
      )}
      slotProps={{
        paper: {
          sx: {
            mt: 1,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            boxShadow: '0 12px 32px rgba(22, 26, 23, 0.08)',
          },
        },
        listbox: {
          sx: {
            maxHeight: 360,
            py: 0.5,
          },
        },
      }}
      sx={{ width: '100%' }}
    />
  );
};

export default IngredientSearch;
