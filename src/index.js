/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var love_triangles = 0;
  for (var i = 0; i < preferences.length; i++){
    var lover1 = i + 1;
    var lover2 = preferences[i];
    var lover3 = preferences[lover2 - 1];
    var lover = preferences[lover3 - 1];
    if (lover1 == lover) {
      love_triangles++;
    }
  }
  return Math.floor(love_triangles/3);
};
