# Native Suggestions
Datalist with native suggestions for text input fields.

You can customize native autocomplete suggestions with your own values.

- For mobile devices suggestions take part of the browser native keyboard.
- For desktop it expands native autocomplete drop-down.

|Safari keyboard|Safari select|Chrome keyboard|Chrome select|
|-------------|-------------|-------------|-------------|
|<img src="https://raw.githubusercontent.com/Bublikus/native-suggestions/master/assets/safari-boxes.png" width="200" alt="Safari IOS screenshot" title="Safari IOS"/>|<img src="https://raw.githubusercontent.com/Bublikus/native-suggestions/master/assets/safari-select.png" width="200" alt="Safari IOS screenshot" title="Safari IOS"/>|<img src="https://raw.githubusercontent.com/Bublikus/native-suggestions/master/assets/chrome-boxes.png" width="200" alt="Chrome IOS screenshot" title="Chrome IOS"/>|<img src="https://raw.githubusercontent.com/Bublikus/native-suggestions/master/assets/chrome-select.png" width="200" alt="Chrome IOS screenshot" title="Chrome IOS"/>|
#
### Installing

```npm
npm i @bublikus/native-suggestions
```
#
### Usage

How to use:

[with React](examples/NativeSuggestions.jsx)  
[with Vue](examples/NativeSuggestions.vue)  
[with Svelte](examples/NativeSuggestions.svelte)

...or pure js:

Simple registration

```javascript 
import NativeSuggestions from '@bublikus/native-suggestions'

const form = document.getElementById('form')
const inputs = form.querySelectorAll('input')

inputs.forEach(input => new NativeSuggestions(input))
```

Template example

```html
<form id="form">
    <input name="name1" type="text"/>
    <input name="name2" type="email"/>
    <input name="name3" type="tel"/>
    <input name="name4" type="search"/>
    <input name="name5" type="number"/>
</form>
```
#
### Config

```javascript 
new NativeSuggestions(input: HTMLInputElement, config?: Config))

// Default Config:
{
    storageKey: 'native-suggestions',
    folder: 'other',
    inputKey: null, // Custom or generated from an input name attribute!
    listLength: 10,
    saveLength: 10,
    mobileOnly: true,
    inputTypes: ['text', 'number', 'search', 'email', 'tel'],
}
```
#
### Behavior

On `change` event it puts an array of your last typed values to the `localStorage` under `[storageKey]` key and `[folder]` subkey specifically tying to an input based on its `name` attribute.

It creates next structure:
```javascript
{
  [storageKey]: {
    [folder]: {
      [inputKey]: ['value 1']
    },
    other: {
      [inputKey]: ['value 2', 'value 3']
    }
  }
}
```
#
