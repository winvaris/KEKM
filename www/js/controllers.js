angular.module('starter.controllers', ['ionic-datepicker'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $state) {

	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	// Form data for the login modal
	$scope.searchData = {};

	$scope.result = function () {
		$state.go("app.resultLocation");
	};

	// Triggered in the login modal to close it
	$scope.closeSearch = function () {
		$scope.modal.hide();
	};

	// Open the login modal
	$scope.search = function () {
		$scope.modal.show();
	};

	// Perform the login action when the user submits the login form
	$scope.doSearch = function () {
		console.log('Doing login', $scope.searchData);

		// Simulate a login delay. Remove this and replace with your login
		// code if using a login system
		$timeout(function () {
			$scope.closeSearch();
		}, 1000);
	};

	$scope.starTest = function () {
		console.log("TEST STAR");
	};
	$scope.toHome = function () {
		$window.location.href = '/#/app/home';
	};

})

.controller('homeCtrl', function ($scope, $stateParams, $state, $http) {
	// Control home page
})

.controller('interestCtrl', function ($scope, $stateParams, $state) {
	$scope.interests = ["Real Experience", "Enjoy & Eat", "Research & Labatory"];
	$scope.goToSeason = function (int) {
		$state.go("app.season");
	};
})

.controller('seasonCtrl', function ($scope, $stateParams, $state) {
	var currentDate = new Date();
	$scope.m = currentDate.getMonth();
	$scope.months = ['January', 'February', 'March', 'April', 'May',
                        'June', 'July', 'August', 'September', 'October',
                        'November', 'December'];

	$scope.checked = [];
	for (var i = 0; i < 12; i++) {
		$scope.checked[i] = false;
	}
	$scope.goToCat = function () {
		//val is date
		var ok = false;
		for (var i = 0; i < 12; i++) {
			if (ok === true) {
				break;
			}
			ok = $scope.checked[i];
		}
		if (ok === true) {
			$state.go("app.category");
		} else {
			alert("Please select at least one month");
		}
	};
})

.controller('categoryCtrl', function ($scope, $stateParams, $state) {
	$scope.categories = ["Industrial Crop", "Fruit & Vegetable", "Livestock", "Fishery"];
	$scope.goToResult = function (cat) {
		$state.go("app.result");
	};
})

.controller('welcomeCtrl', function ($scope, $stateParams, $state) {
	$scope.enter = function () {
		$state.go("app.home");
	};
})


.controller('resultCtrl', function ($scope, $stateParams, $state) {
	$scope.regions = ["Central", "North", "South", "East", "Northwest(E-san)", "West"];
	$scope.information = function (id) {
		$state.go("app.info");
	};
})

.controller('infoCtrl', function ($scope, $stateParams, $state) {

});
