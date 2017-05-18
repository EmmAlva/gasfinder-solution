'use strict';

import $ from "jquery";

const StationDetails = {
  render: (station) => {
    const node = $('<div class="station">'+
                    '<h1>'+station.name+'</h1>'+
                    (station.products.map((p) => { return '<span>'+p+'</span>';}).join(""))+
                  '</div>');
    return node;
  }
}

export default StationDetails;
