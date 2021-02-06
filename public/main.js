import NativeSuggestions from '../src/index'

document.addEventListener('DOMContentLoaded', mounted)

function mounted () {
  const clearBtn = document.getElementById('clear')
  const form = document.getElementById('form')
  const inputs = form.querySelectorAll('input')

  clearBtn.addEventListener('click', () => {
    localStorage.removeItem('native-suggestions')
    defineCustomValues()
  })

  defineCustomValues()

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

  inputs.forEach(input => new NativeSuggestions(input, configs[input.name]))
}

function defineCustomValues () {
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
}
