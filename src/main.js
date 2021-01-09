import NativeSuggestions from './index'

document.addEventListener('DOMContentLoaded', mounted)

function mounted () {
  const form = document.getElementById('form')
  const inputs = form.querySelectorAll('input')

  NativeSuggestions.setStore( {
    inp_1: ['my value', 'second one']
  }, { folder: 'personal' })

  NativeSuggestions.setStore( {
    inp_2: ['my value', 'second one']
  })

  inputs.forEach((input, i) => new NativeSuggestions(input, { folder: i ? null : 'personal' }))

  document.getElementById('btn').addEventListener('click', () => form.remove())
}
