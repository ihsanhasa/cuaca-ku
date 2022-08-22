import logo from './logo.svg';
import './outputApp.css';
import { useGeolocated } from "react-geolocated";
import Cuaca from "./Cuaca"
import Lokasi from "./Lokasi"
import Nav from './Nav';
import { useState } from 'react';
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
  const [saatIni, setSaatIni] = useState("Hari ini")
  const [kotaSaatIni, setKotaSaatIni] = useState({
    lat: coords ? coords.latitude : 6.8284127,
    long: coords ? coords.longitude : 107.1482911
  })

  return (
    <div className="App">
      <Nav 
        cb={(x) => {setSaatIni(x)}}
        cbKota={(x)=>{
          setKotaSaatIni(x)
        }}
        />
      {
        !isGeolocationAvailable ? (
          <div>Browsermu tidak support</div>
        ) : !isGeolocationEnabled ? (
          <div>Lokasi tidak diaktifkan</div>
        ) : coords ?
          (
            saatIni == "Hari ini" ? <Cuaca lat={kotaSaatIni.lat} long={kotaSaatIni.long} /> : "Forecast"
          ) : (
            <div className='font-bold mt-5'>Mendapatkan data API...&hellip; </div>
          )
      }
    </div>
  )
} 

export default App;
