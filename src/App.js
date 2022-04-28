import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalFonts } from './config/font';
import { Reset } from 'styled-reset';
import Main from './pages/Main';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Reset />
      <GlobalFonts />
      <Main />
    </QueryClientProvider>
  );
}

export default App;
