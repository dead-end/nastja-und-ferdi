<script lang="ts">
	import Label from './Label.svelte';

	let { id, label, type } = $props();
</script>

<div class="">
	<Label {id} {label} />
	<input
		{type}
		name={id}
		{id}
		autocomplete="family-name"
		class="_transition _base _base-colors _outline-focus _outline px-3 py-1.5 text-base sm:text-sm/6"
	/>
</div>

<style>
	@reference "../app.css";

	._base {
		@apply block w-full rounded-md;
	}

	._transition {
		@apply transition duration-300 ease-in-out;
	}

	._base-colors {
		@apply bg-white text-gray-900 placeholder:text-gray-400;
	}

	._outline {
		@apply outline-1 -outline-offset-1 outline-gray-300;
	}

	._outline-focus {
		@apply focus:outline-1 focus:-outline-offset-1 focus:outline-blue-600;
	}
</style>
