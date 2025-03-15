<script lang="ts">
	let { children, padding = true } = $props();
</script>

{#if padding}
	<div class="rounded-md bg-white px-8 py-8 shadow-md">
		{@render children()}
	</div>
{:else}
	<div class="rounded-md bg-white shadow-md">
		{@render children()}
	</div>
{/if}
