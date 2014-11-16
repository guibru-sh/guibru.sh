var Vector = function(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

WebKitCSSMatrix.prototype.transformVector = function(v) {
  var xOut = this.m11*v.x + this.m12*v.y + this.m13*v.z;
  var yOut = this.m21*v.x + this.m22*v.y + this.m23*v.z;
  var zOut = this.m31*v.x + this.m32*v.y + this.m33*v.z;

  return new Vector(xOut, yOut, zOut);
};

var cube = $('#cube');
var matrix = new WebKitCSSMatrix();

function applyRotation(vector, angle) {
    var newMatrix = new WebKitCSSMatrix()
        .rotateAxisAngle(vector.x, vector.y, vector.z, angle)
        .multiply(matrix);

    cube.css('webkitTransform', newMatrix);
    matrix = newMatrix;
    console.log(
      (matrix + "")
          .replace(/\.000000/g, '')
          .replace(/(-?\d+, -?\d+, -?\d+, -?\d+,?)/g, '\n$1'));
}