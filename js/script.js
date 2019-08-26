var Last = angular.module("Last",[])


	Last.controller("Listado",function($scope,$rootScope,$http){
	$scope.Musica = [];
	for(var m=1; m<=20;m++){


	$http({
		meth: "GET",
		url: "/2.0/?method=user.getrecenttracks&user=rj&api_key=YOUR_API_KEY&format=json" +m
	}).then(function success(x){
		$scope.Musica.push(x);
	})
 }
})
