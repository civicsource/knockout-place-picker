var ko = require("knockout");
var $ = require("jquery");
var _ = require("lodash");
var ViewModel = require("./model");

require("knockout.punches");
require("knockout-template?name=place-picker-main!html!./templates/index.html");
require("knockout-template?name=place-picker-choice!html!./templates/choice.html");
require("./place-picker");

ko.punches.enableAll();
ko.punches.interpolationMarkup.enable();
ko.punches.attributeInterpolationMarkup.enable();

ko.bindingHandlers.placePicker = {
	init: function (element, valueAccessor, allBindings) {
		var model = new ViewModel(valueAccessor());

		model.instanceName = allBindings.get("id") || _.uniqueId("place-picker--");

		$(element)
			.on("focusout", function () {
				model.selected.valueHasMutated();
			})
			.on("typeahead:selected typeahead:autocompleted", function (e, suggestion) {
				model.selected(suggestion);
				$(element).find("a").first().focus();
			});

		ko.renderTemplate("place-picker-main", model, null, element, "replaceChildren");

		return {
			controlsDescendantBindings: true
		};
	}
};
