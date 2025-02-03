import logo from './logo.svg';
import './App.css';
import MaterialUI from "./MaterialUI";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import WeatherApp from './WeatherApp';
function App() {
  return (
    <div className="App">
       {/* <MaterialUI/> 
       <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>Outlined</Button> */}
      <WeatherApp/>
    </div>
  );
}

export default App;
