# Knockout Place Picker

> Knockout component to pick a [FIPs place](https://github.com/civicsource/fips).

## Installation

```
npm install knockout-place-picker --save
```

## How to Use

`require` the script and use it as a binding handler:

```html
<span data-bind="placePicker: myPlace"></span>
```

where `myPlace` is an observable you want two-way bound to the component. In the case of place picker, this is an object containing the selected suggestion from typeahead results, or `undefined` if nothing is selected.

This component complements and can be used with the [Knockout Place Viewer](https://github.com/civicsource/knockout-place-viewer)