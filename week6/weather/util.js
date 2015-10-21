Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// map one number range to another http://stackoverflow.com/a/10756409
function convertToRange(value, srcRange, dstRange){
	// value is outside source range return
	if (value < srcRange[0] || value > srcRange[1]){
		return NaN; 
	}

	var srcMax = srcRange[1] - srcRange[0],
	  dstMax = dstRange[1] - dstRange[0],
	  adjValue = value - srcRange[0];

	return (adjValue * dstMax / srcMax) + dstRange[0];

}