import * as React from 'react';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

const BreakPointsContext = React.createContext();

const BreakPointsProvider =  ({ children })  => {
  const theme = useTheme();
  const mdMatches = useMediaQuery(theme.breakpoints.up('(min-width:960px)'));
  const smMatches = useMediaQuery(theme.breakpoints.up('(min-width:450px)'));

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
