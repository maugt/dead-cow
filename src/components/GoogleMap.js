import React, {
	Component
} from 'react'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';


const coords = {
	lat: 36.9876873,
	lng: -122.0298032
}

export default class GoogleMap extends Component{

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true,
			clickableIcons: false,
			styles: [
  {
    "featureType": "administrative",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    return (
      <Gmaps
				scrollwheel={false}
        width={'100%'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={17}

        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyCSmmzX-LTdrEP6GqrxMzrJ1E7swNi-51I'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={false}
          onDragEnd={this.onDragEnd}
					icon="/assets/icon-small.png"
				/>

      </Gmaps>
    );
  }

}
