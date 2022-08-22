import React from 'react';
/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import {
    BriefcaseIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    LinkIcon,
    LocationMarkerIcon,
    PencilIcon,
} from '@heroicons/react/solid'
import Droplet from './droplet.svg'

const features = [
    {
        name: 'Competitive exchange rates',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: GlobeAltIcon,
    },
    {
        name: 'No hidden fees',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: ScaleIcon,
    },
    {
        name: 'Transfers are instant',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: LightningBoltIcon,
    },
    {
        name: 'Mobile notifications',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: AnnotationIcon,
    },
]

export default class Cuaca extends React.Component {

    constructor(props) {
        super(props);
        this.lat = props.lat;
        this.long = props.long;

        this.state = {
            data: null
        };
    }

    componentWillMount() {
        this.renderMyData();
    }

    componentDidUpdate(prevProps) {
        if(this.props.lat !== prevProps.lat) 
        {
          this.renderMyData();
        }
      } 

    renderMyData() {
        // fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.lat},${this.long}?unitGroup=us&key=TBVHYL2WLMLB5TVG599PVCWKV`)
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

    render() {
        return (
            <div className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-indigo-100 shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <div className="lg:text-center">
                                <h2 className="text-lg text-indigo-600 font-semibold">{this.state.data ? this.state.data.name : ""}</h2>
                                <p className="mt-2 text-5xl leading-8 font-bold tracking-tight text-gray-900 sm:text-6xl sm:tracking-tight">
                                    {this.state.data ? parseInt(this.state.data.main.temp, 0) + "°C" : ""}
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




                    {/* <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div> */}


                </div>
            </div>
            // <div>
            //     <h3>{this.state.data ? this.state.data.name : ""}</h3>
            //     <h1>{this.state.data ? this.state.data.main.temp + "°" : ""}</h1>
            //     <h3>{this.state.data ? this.state.data.weather[0].main : ""}</h3>
            //     <h4>{this.state.data ? this.state.data.weather[0].description + "" : ""}</h4>
            //     {/* {this.state.data ? <p>{JSON.stringify(this.state.data)}</p> : <p> Loading...</p> } */}
            //     {this.state.data ? "" : <p> Loading...</p> }
            // </div>
        );
    }
}