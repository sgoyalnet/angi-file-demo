(function () {
	angular.module ("net.sgoyal.example",['ngMessages', 'net.sgoyal.angi-file'])
	.controller ("AppCtrl", function ($scope) {
		console.log ("app");
		$scope.form = {resume:'',name:''};

		$scope.saveUser = function (userform) {
			console.log ($scope.form.file);
			if (userform.$valid)
				alert ("Form saved");
		};
	});
})();
