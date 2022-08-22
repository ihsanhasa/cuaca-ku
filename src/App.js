import logo from './logo.svg';
import './App.css';
import { useGeolocated } from "react-geolocated";
import Cuaca from "./Cuaca"
import Lokasi from "./Lokasi"
import Example from './Nav';
// import Isi from './Isi';

const Demo = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <table>
      <tbody>
        <tr>
          <td>latitude</td>
          <td>{coords.latitude}</td>
        </tr>
        <tr>
          <td>longitude</td>
          <td>{coords.longitude}</td>
        </tr>
        {/* <tr>
          <td>altitude</td>
          <td>{coords.altitude}</td>
        </tr> */}
        {/* <tr>
          <td>heading</td>
          <td>{coords.heading}</td>
        </tr>
        <tr>
          <td>speed</td>
          <td>{coords.speed}</td>
        </tr> */}
      </tbody>
    </table>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

function App() {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  return (
    <div className="App">
      <Example />
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <Demo></Demo> */}
        {
          !isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
          ) : !isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
          ) : coords ? 
          (
            <Cuaca lat={coords.latitude} long={coords.longitude} />
          ) : (
            <div className='font-bold'>Getting the location data&hellip; </div>
          )
        }
        <Lokasi />

      {/* </header> */}
    </div>
  );
}

export default App;
