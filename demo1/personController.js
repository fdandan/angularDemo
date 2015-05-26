angular.module('myModule', ['xx'])
  .controller('personController', ['$scope', function($scope) {
    $scope.person = {
      firstName: 'John',
      lastName: 'Doe',
      fullName: function() {
        var x
        x = $scope.person
        return x.firstName + ',' + x.lastName
      }
    }
    $scope.fullName = function() {
      var x
      x = $scope.person
      return x.firstName + " " + x.lastName
    }
  }])
  // .controller('nameController', ['$scope', function($scope) {
  //   $scope.names = [
  //     {name:'aa',country:'china'},
  //     {name:'bb',country:'wr'},
  //     {name:'cc',country:'fdsf'}
  //   ]
  // }])
  .controller('customersController', ['$scope','$http', function($scope, $http) {
    $http.jsonp('http://www.w3cschool.cc/try/angularjs/data/Customers_JSON.php?callback=JSON_CALLBACK')
    .success(function(response) {
      console.log(response)
      $scope.names = response
    })
    console.log('aaaaaaaaa')
  }])