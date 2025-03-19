<script lang="ts">
	let { id, name, label, group = $bindable(), value } = $props();
</script>

<div class="flex items-center gap-x-3">
	<input
		{id}
		{name}
		type="radio"
		bind:group
		{value}
		class="_transition _outline _border relative size-4 appearance-none bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-blue-600 checked:bg-blue-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
	/>
	<label for={id} class="block text-gray-900">{label}</label>
</div>

<style>
	@reference "../app.css";

	._transition {
		@apply transition duration-300 ease-in-out;
	}

	._outline {
		@apply focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-blue-600;
	}

	._border {
		@apply rounded-full border border-gray-300;
	}
</style>
