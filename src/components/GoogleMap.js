import React, {Component} from 'react'
import {Gmaps, Marker} from 'react-gmaps';
import C from '../constants/credentials/GoogleMapsConfig'
import S from '../constants/GoogleMapsStyle'

const coords = {
  lat: 36.9876873,
  lng: -122.0298032
}

export default class GoogleMap extends Component {

  onMapCreated(map) {
    map.setOptions({disableDefaultUI: true, clickableIcons: true, styles: S});
  }

  onMarkerClick(e) {
    window.open("https://www.google.com/maps/dir//1060+River+St+%23112,+Santa+Cruz,+CA+95060/@36.9867018,-122.0647113,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x808e4037ab7bf8ab:0xdb9dc8e0e174b70b!2m2!1d-122.029606!2d36.986707")
  }

  render() {
    return (
      <div className="map">
        <Gmaps scrollwheel={false} className="google-map" lat={coords.lat} lng={coords.lng} zoom={17} loadingMessage={'Be happy'} params={{
          v: '3.exp',
          key: C.key
        }} onMapCreated={this.onMapCreated}>
          <Marker lat={coords.lat} lng={coords.lng} draggable={false} onClick={this.onMarkerClick} icon="/assets/icon-highlight-small.png"/>

        </Gmaps>
      </div>
    );
  }

}
