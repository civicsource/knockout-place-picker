define(["knockout", "app/urls", "jquery", "data", "knockout.init", "lodash", "app/user/current",
	"knockout.integer"],
	function (ko, urls, $, data, init, _, user) {
		function ViewModel(modelData) {

			this.placesUrl = urls.fips + "places/";
			this.autoCompletePlacesUrl = this.placesUrl + "?q=%QUERY";
			this.authToken = user.authToken;
			this.templateName = "place-picker-choice";

			this.mapping = function (data) {
				var model = init(this, data);

				return model;
			}.bind(this);
		}

		return ViewModel;
	});



