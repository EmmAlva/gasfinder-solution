'use strict';

import $ from "jquery";
const GoogleMapsApiLoader = require('google-maps-api-loader');

const Map = {
  render: (station) => {
    const html = $('<div id="map"></div>');

    GoogleMapsApiLoader({
      libraries: ['places'],
      apiKey: 'AIzaSyAYFSOFfx1vA-RGbnTVVSu6pQmqdXu1-hc'
    }).then(function(googleApi) {
      var map = new googleApi.maps.Map(html.get(0), {
        center: {lat: -34.397, lng: 150.644},
        scrollwheel: false,
        zoom: 8
      });
    }, function(err) {
        console.error(err);
    });

    return html;
  }
}

export default Map;
