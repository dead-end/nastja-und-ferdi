<script lang="ts">
	let { name, anschrift, stadt, telefon, email, url, maps } = $props();
</script>

<div class="rounded-md border border-gray-300 px-4 py-6">
	<div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
		<ul class="flex flex-col gap-1">
			<li class="text-lg font-bold">{name}</li>
			<li>{anschrift}</li>
			<li>{stadt}</li>
		</ul>
		<ul>
			<li>
				<div class="inline-block w-16">Telefon:</div>
				{telefon}
			</li>
			<li>
				<div class="inline-block w-16">E-Mail:</div>
				{email}
			</li>
			<li class="pt-2">
				<a href={maps} class="_link" target="_blank">Google Maps</a>
			</li>
		</ul>
	</div>
	<div class="pt-4">
		<a href={url} target="_blank" class="_button">Ansehen</a>
	</div>
</div>
