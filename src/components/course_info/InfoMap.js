import React from 'react';
import GoogleMapReact from 'google-map-react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapPin} from '@fortawesome/free-solid-svg-icons'


const Marker = () => <FontAwesomeIcon icon={faMapPin} size="2x" />;

{/* api key need to be added later */}

const InfoMap = ({lat, lng})=>{
    const center = [lat, lng];
    const zoom = 16;
    return(
        <div style={{height: '300px'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: ''}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <Marker
                    lat={lat}
                    lng={lng}
                />
            </GoogleMapReact>
        </div>
    )
}

export default InfoMap;
