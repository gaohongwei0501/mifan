// Generated by CoffeeScript 1.7.1
"use strict";
Mifan.controller("rootCtrl", function($scope) {
  $scope.currentPage = "home";
  $scope.username = "";
  $scope.supportNum = "1万";
  $scope.dropdownOpen = false;
  $scope.toggleDropdown = function() {
    return $scope.dropdownOpen = !$scope.dropdownOpen;
  };
  $scope.support = function() {
    return alert(1);
  };
  $scope.$on("pageChange", function(e, msg) {
    return $scope.currentPage = msg;
  });
  return false;
});