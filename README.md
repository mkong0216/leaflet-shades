# leaflet-shades
Leaflet plugin for creating gray overlay in unselected areas

This plugin adds onto Leaflet.Editable which makes geometries editable in Leaflet (https://github.com/Leaflet/Leaflet.Editable)

Leaflet shades specifically expands on the Rectange Editor of Leaflet.Editable. 
Originally, Leaflet.Editable's geometries have a blue overlay within the geometry. 
Using Leaflet shades, the area inside the geometry now has a transparent overlay while the unselected regions have a gray overlay. This is so that the selected region can be seen while the unselected regions are slightly hidden. 

To use this plugin, Leaflet.Editable, Leaflet, and Leaflet.Path.Drag are required. The rectangle using Leaf.Editable needs to be drawn before Leaflet shades is created by adding: `var shades = new LeafletShades()` after `map.editTools.startRectangle()`
