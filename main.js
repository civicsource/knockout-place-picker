define(["knockout", "jquery", "lodash", "./model",
	"knockout.punches",
	"template!./templates/index.html!place-picker-main",
	"template!./templates/choice.html!place-picker-choice",
	"less!./place-picker.less"
], function (ko, $, _, ViewModel) {
	ko.punches.enableAll();
	ko.punches.interpolationMarkup.enable();
	ko.punches.attributeInterpolationMarkup.enable();

	ko.bindingHandlers.placePicker = {
		init: function (element, valueAccessor, allBindings) {
			var model = new ViewModel(valueAccessor());

			model.instanceName = allBindings.get('id') || _.uniqueId("place-picker--");

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
});