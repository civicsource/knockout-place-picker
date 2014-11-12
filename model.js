define(["knockout", "jquery", "data", "knockout.init", "lodash", "app/user/current", "knockout.integer"], function (ko, $, data, init, _, user) {
	function ViewModel(modelData) {

		this.placesUrl = urls.fips + "places/";
		this.autoCompletePlacesUrl = placesUrl + "?q=%QUERY";
		this.authToken = user.authToken;
		this.templateName = "place-picker-choice";

		this.fipsMappingFunction = function (data) {
			var model = init(this, data);

			return model;
		}.bind(this);
	}

	return ViewModel;
});



