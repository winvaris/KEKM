angular.module('starter.controllers', ['ionic-datepicker'])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $state, $rootScope) {

	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:

	// Form data for the login modal
	$scope.searchData = {};

	$scope.toHome = function () {
		$window.location.href = '/#/app/home';
	};

	$rootScope.interest = "";
	$rootScope.months = [];
	$rootScope.type = "";
	$rootScope.results = [];
})

.controller('welcomeCtrl', function ($scope, $stateParams, $state) {
	$scope.enter = function () {
		$state.go("app.home");
	};
})

.controller('homeCtrl', function ($scope, $stateParams, $state, $http, $rootScope) {
	// Control home page
	$scope.viewAll = function(){
		$rootScope.interest = "";
		$rootScope.months = [];
		$rootScope.type = "";
		$rootScope.results = [];
	};
})

.controller('interestCtrl', function ($scope, $stateParams, $state, $rootScope) {
	//$scope.interests = ["Real Experience", "Enjoy & Eat", "Research & Labatory"];
	$scope.goToSeason = function (inter) {
		$rootScope.interest = inter;
		$state.go("app.season");
	};
})

.controller('seasonCtrl', function ($scope, $stateParams, $state, $rootScope) {
	var currentDate = new Date();
	$scope.m = currentDate.getMonth();
	$scope.months = ['January', 'February', 'March', 'April', 'May',
                        'June', 'July', 'August', 'September', 'October',
                        'November', 'December'];

	$scope.checked = [];
	for (var i = 0; i < 12; i++) {
		$scope.checked[i] = false;
	}

	$scope.selectMonths = [];
	$scope.goToCat = function () {
		for (var i = 0; i < 12; i++) {
			if ($scope.checked[i] === true) {
				$scope.selectMonths.push(i + 1);
			}
		}
		if ($scope.selectMonths.length > 0) {
			for (var j = 0; j < $scope.selectMonths.length; j++) {
				var obj = {
					"name": $scope.selectMonths[j]
				};
				$rootScope.months.push(obj);
			}
			$state.go("app.category");
		} else {
			alert("Please select at least one month");
		}
	};
})

.controller('categoryCtrl', function ($scope, $stateParams, $state, $rootScope) {

	//$scope.categories = ["Industrial Crop", "Fruit & Vegetable", "Livestock", "Fishery"];
	$scope.goToResult = function (type) {
		$rootScope.type = type;
		console.log($rootScope.interest);
		console.log($rootScope.type);
		console.log($rootScope.months);
		$state.go("app.result");
	};
})

.controller('resultCtrl', function ($scope, $stateParams, $state, $ionicLoading, $http, $rootScope) {
	$scope.show = function () {
		$ionicLoading.show({
			template: 'Loading...'
		});
	};
	$scope.hide = function () {
		$ionicLoading.hide();
	};
	$scope.regions = ["Central", "North", "South", "East", "Northeast", "West"];

	$scope.request = function () {
		if( $rootScope.interest === ""){
			$scope.interest = [{name: "research"}, {name: "real"}, {name: "eat"}];
		}
		else{
			$scope.interest = [{ name: $rootScope.interest }];
		}

		if( $rootScope.months.length === 0){
			for( var i = 0; i < 12; i++){
				var obj = {
					name: i
				};
				$scope.months.push(obj);
			}
		}
		else{
			$scope.months = $rootScope.months;
		}

		if( $rootScope.type === ""){
			$scope.type = [{name: "industry"}, {name: "fruit"}, {name: "fishery"}, {name: "fruit"}];
		}
		else{
			$scope.type = [{ "name": $rootScope.type }];
		}
		var send = {
				activities: $scope.interest,
				month: $scope.months,
				type: $scope.type
		};

		console.log(send);
		$http.post('http://158.108.239.106:9998/api/query', send)
			.success(function (data) {
				$rootScope.results = data;
				console.log($rootScope.results);
				$scope.hide();
			})
			.error(function (data) {
				console.log(data);
			});
	};
	$scope.request();
	$scope.show();
})

.controller('infoCtrl', function ($scope, $stateParams, $state, $rootScope) {
	$scope.id = $stateParams.id;
	$scope.getResult = function () {
		for (var i = 0; i < $rootScope.results.length; i++) {
			if ($rootScope.results[i].id === $scope.id) {
				$scope.result = $rootScope.results[i];
				break;
			}
		}
	};
	$scope.getResult();

});
