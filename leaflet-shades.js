L.LeafletShades = L.Layer.extend({
	options: { 
		shades = true; 
	},

	initialize: function(rect, options) {
		_createShades(rect);
	}

	_createShades: function(rect) {
	  const regionSelector = map._panes.overlayPane;
	  map._shadeContainer = L.DomUtil.create('div', 'leaflet-areaselect-container', regionSelector);
	  map._topShade = L.DomUtil.create('div', 'leaflet-areaselect-shade', map._shadeContainer);
	  map._bottomShade = L.DomUtil.create('div', 'leaflet-areaselect-shade', map._shadeContainer);
	  map._leftShade = L.DomUtil.create('div', 'leaflet-areaselect-shade', map._shadeContainer);
	  map._rightShade = L.DomUtil.create('div', 'leaflet-areaselect-shade', map._shadeContainer);
	  updateShades(rect);
	},

	_setDimensions: function(element, dimension) {
	  element.style.width = dimension.width + 'px';
	  element.style.height = dimension.height + 'px';
	  element.style.top = dimension.top + 'px';
	  element.style.left = dimension.left + 'px';
	},

	_getOffset: function(northEastPoint, southWestPoint) {
	  // Getting the transformation value through style attributes
	  let transformation = map.getPanes().mapPane.style.transform;
	  const startIndex = transformation.indexOf('(');
	  const endIndex = transformation.indexOf(')');
	  transformation = transformation.substring(startIndex + 1, endIndex).split(',');
	  const offset = {
	    x: Number(transformation[0].slice(0, -2) * -1),
	    y: Number(transformation[1].slice(0, -2) * -1)
	  }
	  return offset
	},

	_updateShades: function(rect) {
	  const rectBounds = rect.getBounds();
	  const size = map.getSize();
	  const offset = getOffset();

	  const northEastPoint = map.latLngToContainerPoint(rectBounds.getNorthEast());
	  const southWestPoint = map.latLngToContainerPoint(rectBounds.getSouthWest());

	  setDimensions(map._topShade, {
	    width: size.x,
	    height: (northEastPoint.y < 0) ? 0 : northEastPoint.y,
	    top: offset.y,
	    left: offset.x
	  })

	  setDimensions(map._bottomShade, {
	    width: size.x,
	    height: size.y - southWestPoint.y,
	    top: southWestPoint.y + offset.y,
	    left: offset.x
	  })

	  setDimensions(map._leftShade, {
	    width: (southWestPoint.x < 0) ? 0 : southWestPoint.x,
	    height: southWestPoint.y - northEastPoint.y,
	    top: northEastPoint.y + offset.y,
	    left: offset.x
	  })

	  setDimensions(map._rightShade, {
	    width: size.x - northEastPoint.x,
	    height: southWestPoint.y - northEastPoint.y,
	    top: northEastPoint.y + offset.y,
	    left: northEastPoint.x + offset.x
	  })
	}
})