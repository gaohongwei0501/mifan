// Generated by CoffeeScript 1.7.1
"use strict";
angular.module("mifan").controller("homeCtrl", function($scope) {
  $scope.awesomeThings = ["HTML5 Boilerplate", "AngularJS", "Karma"];
  $scope.$on("$viewContentLoaded", function() {
    return Common.setCurrentPage("home");
  });
  return false;
});
