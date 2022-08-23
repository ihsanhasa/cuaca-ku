import './outputApp.css';
import { useGeolocated } from "react-geolocated";
import Cuaca from "./Cuaca"
import Nav from './Nav';
import { useState, } from 'react';


function App() {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {enableHighAccuracy: true,},
      userDecisionTimeout: 5000,
    });
  const [saatIni, setSaatIni] = useState("Hari ini")
  const [kotaSaatIni, setKotaSaatIni] = useState({
    lat: coords ? coords.latitude : 0,
    long: coords ? coords.longitude : 0,
    kabko:""
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
            saatIni == "Hari ini" ? <Cuaca lat={kotaSaatIni.lat} long={kotaSaatIni.long} kabko={kotaSaatIni.kabko} cekCB={()=>setKotaSaatIni({
              lat: coords ? coords.latitude : 0,
              long : coords ? coords.longitude : 0,
              kabko : ""
            })}/> : "Forecast belum beres karena keterbatasan Waktu dan Limit API untuk testing"
          ) : (
            <div className='font-bold mt-5'>Mendapatkan data dari API...&hellip; </div>
          )
      }
    </div>
  )
} 

export default App;
