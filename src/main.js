import NativeSuggestions from './native-suggestions'

document.addEventListener('DOMContentLoaded', mounted)

function mounted () {
  const form = document.getElementById('form')
  const inputs = Array.from(form.querySelectorAll('input'))

  console.log(inputs)

  inputs.forEach((input, i) => new NativeSuggestions(input, { folder: i ? null : 'personal' }))
}
