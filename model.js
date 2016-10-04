var ko = require("knockout");
var init = require("knockout.init");
var $ = require("jquery");

var fipsUrl = window && window.civicsource && window.civicsource.payload && window.civicsource.payload.urls ? window.civicsource.payload.urls.fips + "places/" : null;

function ViewModel(selected) {

	this.placesUrl = fipsUrl;
	this.autoCompletePlacesUrl = `${this.placesUrl  }?q=%QUERY*&types=City&types=County`;
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
		$.ajax(fipsUrl + place.fips + "/", {
			type: "GET",
			contentType: "application/json",
			context: this
		}).then(function (data) {
			this.selected(data);
		});
	}
}

module.exports = ViewModel;
