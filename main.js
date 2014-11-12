define(["knockout", "jquery", "./model",
	"knockout.punches",
	"template!./templates/index.html!place-picker-main",
	"template!./templates/choice.html!place-picker-choice",
], function (ko, $, ViewModel) {
	ko.punches.enableAll();
	ko.punches.interpolationMarkup.enable();
	ko.punches.attributeInterpolationMarkup.enable();

	ko.bindingHandlers.placePicker = {
		init: function (element) {
			return {
				controlsDescendantBindings: true
			};
		},
		update: function (element, valueAccessor, allBindings) {
			var unwrapped = ko.unwrap(valueAccessor());
			ko.renderTemplate("place-picker-main", new ViewModel(unwrapped), null, element, "replaceChildren");
		}
	};
	ko.virtualElements.allowedBindings.placePicker = true;
});