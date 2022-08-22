import React from 'react';

export default class Lokasi extends React.Component  {

    constructor(props) {
      super(props);
      console.log(`lokasi : ${JSON.stringify(props)}`)

      this.state = {
        data : null
      };
    }

    componentWillMount() {
        this.renderMyData();
    }

    renderMyData(){
        // fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.lat},${this.long}?unitGroup=us&key=TBVHYL2WLMLB5TVG599PVCWKV`)
        fetch(`https://weather.com/api/v1/p/redux-dal`, {
            method: 'POST',
        
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify([
                    {
                      "name": "getSunV3LocationSearchUrlConfig",
                      "params": {
                        "query": "sumedang",
                        "language": "id-ID",
                        "locationType": "locale"
                      }
                    }
                  ]
            ),
            referrerPolicy: 'origin'
            
        })
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
                {this.state.data ? "" : <p> Loading...</p> }
            </div>
        );
    }
}