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
    $scope.myVar = false
    $scope.toggle = function() {
      $scope.myVar = !$scope.myVar
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
    $http.get('data.json')
    .success(function(response) {
      $scope.names = response
    })
  }])

  .controller('formController', ['$scope', function($scope) {
    $scope.master = {firstName:'denise', lastName:'feng'}
    $scope.reset = function() {
      $scope.user = angular.copy($scope.master)
    }
    $scope.reset()
  }])

  .controller('validateCtrl', ['$scope', function($scope) {
    $scope.username = 'denisefeng'
    $scope.email = 'denisefeng@qiyi.com'
  }])

