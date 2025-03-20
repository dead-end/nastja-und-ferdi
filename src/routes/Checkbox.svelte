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
		class="_ring _transition _outline _border relative size-4 appearance-none bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-gray-800 checked:bg-gray-800 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
	/>
	<label for={id} class="block text-gray-900">{label}</label>
</div>

<style>
	@reference "../app.css";

	._transition {
		@apply transition duration-300 ease-in-out;
	}

	._ring {
		@apply ring-gray-800 focus:ring-gray-800 focus-visible:ring-gray-800;
	}

	._outline {
		@apply focus:outline-gray-800 focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-gray-800;
	}

	._border {
		@apply rounded-full border border-gray-300 text-gray-800;
	}
</style>
