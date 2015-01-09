define(["knockout", "app/urls", "knockout.init"], function (ko, urls, init) {
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

		this.selected.subscribe(ensurePlace, this);

		ensurePlace.call(this, this.selected());
	}

	function ensurePlace(place) {
		if (place && !place.fullName) {
			$.ajax(urls.fips + "places/" + place.fips + "/", {
				type: "GET",
				contentType: "application/json",
				context: this
			}).then(function (data) {
				this.selected(data);
			});
		}
	}

	return ViewModel;
});