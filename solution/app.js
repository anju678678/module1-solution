(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController ($scope, $filter) {
    $scope.list = "";

    $scope.getItem = function () {

    $scope.mySplit = function(string) {
      var array = string.split(',');
      var message;
        if (array == "" ) {
          message = "Please enter data first";
        }
        else if (array.length < 4) {
          message = "Enjoy";
        }
        else  {
          message = "Too much";
        }
        return message;
    }

    }

  }

})();
