import React from 'react';

export default class Cuaca extends React.Component  {

    constructor(props) {
      super(props);
      console.log(`props : ${JSON.stringify(props)}`)
      this.lat = props.lat;
      this.long = props.long;

      this.state = {
        data : null
      };
    }

    componentWillMount() {
        this.renderMyData();
    }

    renderMyData(){
        // fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.lat},${this.long}?unitGroup=us&key=TBVHYL2WLMLB5TVG599PVCWKV`)
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.long}&appid=97acda72b4cec0dec58e74fc0cbbbba3&units=metric&lang=id`)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
              this.setState({ data : responseJson })
            })
            .catch((error) => {
              console.error(error);
            });
    }

    render(){
        return(
            <div>
                <h3>{this.state.data ? this.state.data.name : ""}</h3>
                <h1>{this.state.data ? this.state.data.main.temp + "°" : ""}</h1>
                <h3>{this.state.data ? this.state.data.weather[0].main : ""}</h3>
                <h4>{this.state.data ? this.state.data.weather[0].description + "" : ""}</h4>
                {/* {this.state.data ? <p>{JSON.stringify(this.state.data)}</p> : <p> Loading...</p> } */}
                {this.state.data ? "" : <p> Loading...</p> }
            </div>
        );
    }
}