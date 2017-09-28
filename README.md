# leaflet-shades
Leaflet plugin for creating gray overlay in unselected areas.
This plugin adds onto Leaflet.Editable which makes geometries editable in Leaflet (https://github.com/Leaflet/Leaflet.Editable)

Leaflet shades specifically expands on the Rectange Editor of Leaflet.Editable. 
Originally, Leaflet.Editable's geometries have a blue overlay within the geometry. 
Using Leaflet shades, the area inside the geometry now has a transparent overlay while the unselected regions have a gray overlay. This is so that the selected region can be seen while the unselected regions are slightly hidden. 

<h1> Requirements </h1>
Leaflet, Leaflet.Editable, and Leaflet.Path.Drag are all embedded in the plugin and are required. 

<h1> Basic Usage: </h1>
<b> Step 1: </b> In HTML, import the required Leaflet Javascript and CSS files along with the Javascript and CSS files for the leaflet-shades plugin. 

```html
<!-- Load Leaflet and Leaflet-Shades stylesheets -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" />
<link rel="stylesheet" href="./src/css/leaflet-shades.css" />
 
<!-- Load Javascript files for Leaflet and Leaflet-Shades -->
<script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script>
<script src="./dist/leaflet-shades.js"></script>
```

<b> Step 2: </b> In Javascript, initialize your Leaflet Map and enable editable in your initialization

```javascript
var map = L.map('map', {editable: true});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
map.setView([0,0], 5);
```

<b> Step 3: </b> In Javascript, start drawing your rectangle using Leaflet.Editable 
```
map.editTools.startRectangle();
```

<b> Step 4: </b> In Javascript, create your shades and add it onto your map 

```javascript
var shades = new LeafletShades();
shades.addTo(map); 
```

<h1> API Documentation: </h1>
Leaflet-Shades only has one public method which is the `setDimensions(element, dimensions)` method. 
This method takes an element and an object containing the desired dimensions for this element. 
For example, if you wanted to manually set the dimensions for the left side of the selected region you can do this:

```javascript
// Defining the width and height of the shade along with the top and left position of the shade
var dimensions = {
  width: 500,
  height: 500,
  top: 10,
  left: 10
}

// Element passed into this method can be either 
// shades._leftShade, shades._rightShade, shades._topShade, or shades._bottomShade 
shades.setDimensions(shades._leftShade, dimensions);
```
This will change the left shade to become 500px by 500px at position 10px from the top and 10px to the left.

