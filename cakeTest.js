//'use strict';
var blocks = require("blocks");

function cakex(radius, layerHeight)
{
	this.cylinder(blocks.wool.red, radius, layerHeight);
}
require('drone').extend(cakex);