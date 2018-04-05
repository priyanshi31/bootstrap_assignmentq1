function hexToRgb(hex) {
   hex   = hex.replace('#', '');
   var r = parseInt(hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
   var g = parseInt(hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
   var b = parseInt(hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';

}
var x=hexToRgb('#00f00');
console.log(x);
