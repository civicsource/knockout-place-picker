define(["knockout", "jquery", "./model",
	"knockout.punches",
	"template!./templates/index.html!place-picker-main",
	"template!./templates/choice.html!place-picker-choice",
], function (ko, $, ViewModel) {
	ko.punches.enableAll();
	ko.punches.interpolationMarkup.enable();
	ko.punches.attributeInterpolationMarkup.enable();

	ko.bindingHandlers.placePicker = {
		init: function (element, valueAccessor) {
			var model = new ViewModel(valueAccessor());

			$(element)
				.on("focusout", function () {
					model.selected.valueHasMutated();
				})
				.on("typeahead:selected typeahead:autocompleted", function (e, suggestion) {
					model.selected(suggestion);
				});

			ko.renderTemplate("place-picker-main",model, null, element, "replaceChildren");

			return {
				controlsDescendantBindings: true
			};
		}
	};
	ko.virtualElements.allowedBindings.placePicker = true;
});