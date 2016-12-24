(function () {
'use strict';

angular.module('assignNumber1App', [])

.controller('MyFirstController', function ($scope) {

  $scope.inMessage = "";
  $scope.outMessage = "";

  $scope.calculateFood = function () {
   if ($scope.inMessage.length > 0 ) {
     var result = getResult($scope.inMessage);
     $scope.outMessage = result;
   } else {
     $scope.outMessage = "Please enter data first";
   }
 };


 function getResult(string) {
   var arrayOfStrings = string.split(",");
   console.log(arrayOfStrings);

   if (arrayOfStrings[arrayOfStrings.length-1] === "") {
     console.log("must trim");
     arrayOfStrings.pop();
   }
   var m = "";
   if (arrayOfStrings.length < 4) {
     m =  "Enjoy!";
   } else {
     m = "Too much!";
   }
   return m;
 }

});
})();
