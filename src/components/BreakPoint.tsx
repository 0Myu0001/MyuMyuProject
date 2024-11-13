import * as React from 'react';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

const BreakPointsContext = React.createContext({ mdMatches: false, smMatches: false });

const BreakPointsProvider = ({ children }) => {
  const theme = useTheme();
  const mdMatches = useMediaQuery(theme.breakpoints.up('md'));
  const smMatches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <BreakPointsContext.Provider value={{ mdMatches, smMatches }}>
      {children}
    </BreakPointsContext.Provider>
  );
}

const useBreakPoints = () => {
  const context = React.useContext(BreakPointsContext);
  if (!context) {
    throw new Error('useBreakPoints must be used within a BreakPointsProvider');
  }
  return context;
}; 

export { BreakPointsProvider, useBreakPoints}
