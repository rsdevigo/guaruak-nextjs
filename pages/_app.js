import { ThemeProvider } from 'emotion-theming'
import theme from '../themes/default.js';
import GlobalStyles from './components/GlobalStyles/GlobalStyles.js';

function MyApp({ Component, pageProps }) {
  return( 
    <> 
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp;
