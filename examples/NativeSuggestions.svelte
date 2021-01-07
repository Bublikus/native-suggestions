<script>
	import { onMount } from 'svelte'

	let wrapper

	onMount(async () => {
		// Use dynamic import because of `self is not defined` issue.
		const { default: NativeSuggestions } = await import('@bublikus/native-suggestions')

		const config = $$props // spread all props to config
		const inputs = wrapper.querySelectorAll('input')

		inputs.forEach(input => new NativeSuggestions(input, config))
	})
</script>

<div bind:this={wrapper}>
	<slot/>
</div>
