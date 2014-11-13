define(["knockout", "app/urls", "jquery", "data", "knockout.init"],
	function (ko, urls, $, data, init) {
		function ViewModel(selected) {

			this.placesUrl = urls.fips + "places/";
			this.autoCompletePlacesUrl = this.placesUrl + "?q=%QUERY*&types=City&types=County";
			this.templateName = "place-picker-choice";

			this.selected = ko.isObservable(selected) ? selected : ko.observable(selected);
			this.selected.clear = function () {
				this.selected(undefined);
			}.bind(this);

			this.mapping = function (data) {
				var model = init(this, data);

				return model;
			}.bind(this);
		}

		return ViewModel;
	});



