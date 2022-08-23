import React from 'react';

export default class Cuaca extends React.Component {

    constructor(props) {
        super(props);
        this.lat = props.lat;
        this.long = props.long;
        this.kabko = props.kabko;
        this.state = {
            data: null
        };

    }

    componentWillMount() {
        this.renderData();

        setTimeout(()=>{
            if(this.state.data.name=="Globe")this.props.cekCB();
        }, 2000)
    }

    componentDidUpdate(prevProps) {
        if (this.props.lat !== prevProps.lat) {
            this.renderData();
        }
    }

    renderData() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.props.lat}&lon=${this.props.long}&appid=97acda72b4cec0dec58e74fc0cbbbba3&units=metric&lang=id`)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({ data: responseJson })
            })
            .catch((error) => {
                console.error(error);
            });
    }

     toUpLowerCase(str){
        if(str==undefined)return ""
        var a = str.split(" ")
        var b = ""
        a.forEach(e => {
          b+=e.substr(0,1).toUpperCase() + e.substr(1).toLowerCase() +" "
        });
        return b
      }

    render() {
        return (
            <div className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-indigo-100 shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <div className="lg:text-center">
                                <h2 className="text-lg text-indigo-600 font-semibold">
                                    {(this.props.kabko !== "" ? this.toUpLowerCase(this.props.kabko) : this.state.data ? this.state.data.name : "")}
                                </h2>
                                <p className="mt-2 text-5xl leading-8 font-bold tracking-tight text-gray-900 sm:text-6xl sm:tracking-tight">
                                    {this.state.data ? parseInt(this.state.data.main.temp, 0) + "°" : ""}
                                </p>
                                <img className="m-auto" src={`http://openweathermap.org/img/wn/${this.state.data ? this.state.data.weather[0].icon : ""}@2x.png`} />
                                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                                    {this.state.data ? this.state.data.weather[0].description : ""}
                                </p>
                                <p className="mt-2 items-center text-sm text-gray-500">
                                    Kelembaban : {this.state.data ? this.state.data.main.humidity : ""}%</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}