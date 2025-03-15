<script lang="ts">
	let { label, sub } = $props();
</script>

<legend class="flex-raw flex items-baseline gap-4">
	<div class="text-2xl font-extrabold text-gray-900">{label}</div>
	<div class="text-sm font-light text-gray-600">{sub}</div>
</legend>
