import ContentArea from "./components/ContentArea";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from "react-redux";
import configureStore from "./redux/Store";



const theme = createTheme({
  palette: {
    mode: 'dark',
    background : '#1A2027',
    backgroundSecondary : '#FFFFFF',
    text :{
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
    }
  },
});

function App() {
  return (
    <Provider store={configureStore()}>
   <ThemeProvider theme={theme}>
      <ContentArea />
    </ThemeProvider>
   </Provider>
  );
}

export default App;
