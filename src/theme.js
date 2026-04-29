import { createTheme, alpha } from '@mui/material/styles';

const palette = {
  sage: '#59b381',
  sageDark: '#2C6B47',
  sageSoft: '#7DA88B',
  mochi: '#D6EEB1',
  mochiHover: '#C2E193',
  amber: '#B8845A',
  bg: '#FAFAF7',
  paper: '#FFFFFF',
  ink: '#161A17',
  inkSoft: '#5C6660',
  border: '#E5E2D8',
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: palette.sage,
      dark: palette.sageDark,
      light: palette.mochi,
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: palette.amber,
      contrastText: '#FFFFFF',
    },
    background: {
      default: palette.bg,
      paper: palette.paper,
    },
    text: {
      primary: palette.ink,
      secondary: palette.inkSoft,
    },
    divider: palette.border,
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1.05,
    },
    h2: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 500,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
    },
    h3: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 500,
      letterSpacing: '-0.015em',
    },
    h4: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 500,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '-0.005em',
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '-0.005em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.005em',
    },
    overline: {
      letterSpacing: '0.18em',
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: palette.bg,
          color: palette.ink,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
      },
    },
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: alpha(palette.bg, 0.85),
          backdropFilter: 'saturate(180%) blur(12px)',
          color: palette.ink,
          borderBottom: `1px solid ${palette.border}`,
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 20,
          paddingBlock: 10,
        },
        sizeLarge: {
          paddingInline: 28,
          paddingBlock: 14,
          fontSize: '1rem',
        },
        containedPrimary: {
          backgroundColor: palette.mochi,
          color: palette.sageDark,
          boxShadow: 'none',
          '&:hover': { backgroundColor: palette.mochiHover, boxShadow: 'none' },
          '&.Mui-disabled': {
            backgroundColor: alpha(palette.mochi, 0.5),
            color: alpha(palette.sageDark, 0.5),
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 999,
          border: `1px solid ${palette.border}`,
          paddingInline: 14,
          paddingBlock: 6,
          fontSize: '0.875rem',
          fontWeight: 500,
          color: palette.ink,
          transition: 'all 160ms ease',
          '&:hover': {
            backgroundColor: alpha(palette.sage, 0.04),
            borderColor: alpha(palette.sage, 0.3),
          },
          '&.Mui-selected': {
            backgroundColor: palette.sage,
            color: '#FFFFFF',
            borderColor: palette.sage,
            '&:hover': {
              backgroundColor: palette.sageDark,
            },
          },
        },
      },
    },
    MuiAccordion: {
      defaultProps: { elevation: 0, disableGutters: true },
      styleOverrides: {
        root: {
          background: 'transparent',
          border: 'none',
          '&:before': { display: 'none' },
          '&.Mui-expanded': { margin: 0 },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
          minHeight: 56,
          '&.Mui-expanded': { minHeight: 56 },
        },
        content: {
          margin: '12px 0',
          '&.Mui-expanded': { margin: '12px 0' },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: { padding: '4px 0 16px' },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        outlined: {
          borderColor: palette.border,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: palette.paper,
        },
        notchedOutline: {
          borderColor: palette.border,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 500,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          padding: 8,
        },
      },
    },
  },
});

export default theme;
