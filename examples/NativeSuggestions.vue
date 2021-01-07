<template>
	<div ref="wrapper">
		<slot/>
	</div>
</template>

<script>
  import NativeSuggestions from '@bublikus/native-suggestions'

  export default {
    name: 'NativeSuggestions',

    mounted() {
      const config = this.$attrs // spread all props to config
      const inputs = this.$refs.wrapper.querySelectorAll('input')

      inputs.forEach(input => new NativeSuggestions(input, config))
    }
  }
</script>
