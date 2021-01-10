# Native Suggestions
Datalist with native suggestions for text input fields.

You can customize native autocomplete suggestions with your own values.

- For mobile devices suggestions take part of the browser native keyboard.
- For desktop it expands native autocomplete dropdown.

| Safari | Safari | Chrome | Chrome |
|---------------|---------------|---------------|---------------|
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
new NativeSuggestions(input: HTMLInputElement, config?: Config)

// Default Config:
{
    storageKey: 'native-suggestions',
    folder: 'other',
    inputKey: null,
    listLength: 10,
    saveLength: 10,
    mobileOnly: true,
    addOnInput: true,
    inputTypes: ['text', 'number', 'search', 'email', 'tel'],
}
```
<br>

| Prop        | Description                                      |
|-------------|--------------------------------------------------|
| storageKey  | General key in `localStorage`
| folder      | Specific key for a set of inputs
| inputKey    | Custom or generated from an input name attribute!
| listLength  | How many suggestions to show in select
| saveLength  | How many suggestions to save for 1 input
| mobileOnly  | I want to see only within keyboard (not dropdown)
| addOnInput  | Turn off if you want to use only your own values
| inputTypes  | Allowed types for suggestions

#
### Custom suggestions

You can setup your own suggestions in the storage.

> Turn off `addOnInput` if you don't want to add new values on input.

```javascript
NativeSuggestions.setStore(values, config?)

// Values:
{
    name1: ['value 1'],
    name2: ['value 2', 'value 3'],
}

// Default Config:
{
    storageKey: 'native-suggestions',
    folder: 'other',
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

The benefit of that structure is that you **can define specific** suggestions for an active **organization** or a **user**. 
#
