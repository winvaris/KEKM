angular.module('starter.controllers', ['ionic-datepicker'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.searchData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/search.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.result = function() {
    $state.go("app.resultLocation");
  };

  // Triggered in the login modal to close it
  $scope.closeSearch = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.search = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doSearch = function() {
    console.log('Doing login', $scope.searchData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeSearch();
    }, 1000);
  };

  $scope.starTest = function() {
    console.log("TEST STAR");
  };
  $scope.toHome = function(){
    $window.location.href = '/#/app/home';
  };

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 },
    { title: 'Reggae', id: 7 },
    { title: 'Chill', id: 8 },
    { title: 'Dubstep', id: 9 },
    { title: 'Indie', id: 10 },
    { title: 'Rap', id: 11 },
    { title: 'Cowbell', id: 12 }
  ];
})

.controller('LoginCtrl', function($scope, $stateParams, $state, $ionicModal) {
  $scope.signinData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/signin.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeSignin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.signin = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doSignin = function() {
    console.log('Doing login', $scope.signinData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeSignin();
    }, 1000);
  };

  //===============================Signup=====================================

  $scope.signupData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/signup.html', {
    scope: $scope
  }).then(function(modal2) {
    $scope.modal2 = modal2;
  });

  // Triggered in the login modal to close it
  $scope.closeSignup = function() {
    $scope.modal2.hide();
  };

  // Open the login modal
  $scope.signup = function() {
    $scope.modal2.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doSignup = function() {

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeSignup();
    }, 1000);
  };

  $ionicModal.fromTemplateUrl('templates/test.html', {
    scope: $scope
  }).then(function(modal3) {
    $scope.modal3 = modal3;
  });

})

.controller('homeCtrl', function($scope, $stateParams, $state) {
  $scope.first = function() {
    $state.go("app.interest");
  };
  $scope.aroundMe = function() {
    $state.go("app.aroundMe");
  };
})

.controller('interestCtrl', function($scope, $stateParams, $state){
    $scope.interests = ["Real Experience", "Enjoy & Eat", "Research & Labatory"];
    $scope.goToSeason = function(int){
      $state.go("app.season");
    };
})

.controller('categoryCtrl', function($scope, $stateParams, $state) {
  $scope.categories = ["Industrial Crop", "Fruit & Vegetable", "Livestock", "Fishery"];
  $scope.goToSeason = function(cat){
    $state.go("app.result");
  };
})

.controller('welcomeCtrl', function($scope, $stateParams, $state){
  $scope.enter = function(){
    $state.go("app.home");
  };
})

.controller('seasonCtrl', function($scope, $stateParams, $state){
  $scope.selectedDate = new Date();
  $scope.datepickerObject = {
      titleLabel: 'Title',  //Optional
      todayLabel: 'Today',  //Optional
      closeLabel: 'Close',  //Optional
      setLabel: 'Set',  //Optional
      setButtonType : 'button-balanced',  //Optional
      //todayButtonType : 'button-assertive',  //Optional
      closeButtonType : 'button-assertive',  //Optional
      // mondayFirst: true,    //Optional
      templateType: 'popup', //Optional
      showTodayButton: 'true', //Optional
      callback: function (val) {    //Mandatory
        datePickerCallback(val);
      }
    };
    var datePickerCallback = function (val) {
      if (typeof(val) === 'undefined') {
        console.log('No date selected');
      } else {
        console.log('Selected date is : ', val);
        $scope.selectedDate = val;
      }
    };
    $scope.goToCat = function(){
      $state.go("app.category");
    };
})

.controller('resultCtrl', function($scope, $stateParams, $state){
  $scope.regions = ["Central", "North", "South", "East", "Northwest(E-san)", "West"];
  $scope.information = function(id){
    $state.go("app.info");
  };
})

.controller('infoCtrl', function($scope, $stateParams, $state){

})
