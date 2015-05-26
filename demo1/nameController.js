angular.module('xx', [])
  .controller('nameController', ['$scope', function($scope) {
    $scope.names = [
      {name:'aa',country:'china'},
      {name:'bb',country:'wr'},
      {name:'cc',country:'fdsf'}
    ]
  }])