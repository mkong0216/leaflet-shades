var L = require('leaflet');
require('leaflet-editable');

var LeafletShades = L.Layer.extend({

	initialize: function(options) {
		map.on('editable:drawing:commit', this.onDrawingFinished.bind(this));
	},

	onAdd: function(map) {
		this._map = map;

		this._shadesContainer = L.DomUtil.create('div', 'leaflet-areaselect-container leaflet-zoom-hide');
		this._topShade = L.DomUtil.create('div', 'leaflet-areaselect-shade', this._shadesContainer);
		this._bottomShade = L.DomUtil.create('div', 'leaflet-areaselect-shade', this._shadesContainer);
		this._leftShade = L.DomUtil.create('div', 'leaflet-areaselect-shade', this._shadesContainer);
		this._rightShade = L.DomUtil.create('div', 'leaflet-areaselect-shade', this._shadesContainer);

		map.getPanes().overlayPane.appendChild(this._shadesContainer);
	},

	onDrawingFinished: function(event) {
		var bounds = event.layer.getBounds();
		// this._updateShades(bounds).bind(this);
	},

	// _updateShades: function (bounds) {
	// 	var size = map.getSize();
	// 	var northEastPoint = map.latLngToContainerPoint(bounds.getNorthEast());
	// 	var southWestPoint = map.latLngToContainerPoint(bounds.getSouthWest());

	// 	this._setDimensions(this._topShade, {
	//     width: size.x,
	//     height: (northEastPoint.y < 0) ? 0 : northEastPoint.y,
	//     top: 0,
	//     left: 0
	//   })

	// }

	// _setDimensions: function(element, dimensions) {
	// 	element.style.width = dimensions.width + 'px';
	//   element.style.height = dimensions.height + 'px';
	//   element.style.top = dimensions.top + 'px';
	//   element.style.left = dimensions.left + 'px';
	// }

})

window.LeafletShades = LeafletShades;
