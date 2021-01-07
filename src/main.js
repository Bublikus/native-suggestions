import NativeSuggestions from './native-suggestions'

document.addEventListener('DOMContentLoaded', mounted)

function mounted () {
  const form = document.getElementById('form')
  const inputs = Array.from(form.querySelectorAll('input'))

  console.log(inputs)

  document.getElementById('btn').addEventListener('click', () => form.remove())

  inputs.forEach((input, i) => new NativeSuggestions(input, { folder: i ? null : 'personal' }))
}
