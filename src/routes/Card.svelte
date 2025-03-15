<script lang="ts">
	let { children } = $props();
</script>

<div class="rounded px-8 py-8 shadow">
	{@render children()}
</div>
