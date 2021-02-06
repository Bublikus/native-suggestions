import NativeSuggestions from '../src/index'

document.addEventListener('DOMContentLoaded', mounted)

function mounted () {
  const form = document.getElementById('form')
  const inputs = form.querySelectorAll('input')

  const configs = {
    inp_1: {
      addOnInput: false,
    },
    inp_2: {},
    inp_3: {
      folder: 'personal'
    },
    inp_4: {
      mobileOnly: false
    },
    inp_5: {
      listLength: 1,
      saveLength: 1,
    }
  }

  NativeSuggestions.setStore( {
    inp_1: [
      '1st custom value',
      '2nd custom value',
      '3nd custom value'
    ]
  })

  NativeSuggestions.setStore( {
    inp_2: [
      'try to change',
      'input value'
    ]
  })

  inputs.forEach(input => new NativeSuggestions(input, configs[input.name]))
}
