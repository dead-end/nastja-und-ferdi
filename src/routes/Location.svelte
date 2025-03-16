<script>
	import Maps from './Maps.svelte';
</script>

<div class="mb-6 flex flex-col gap-4">
	<h2 class="mb-4 text-2xl font-extrabold text-gray-900">Location</h2>

	<div class="flex flex-col md:flex-row md:items-end md:justify-between">
		<ul class="flex flex-col gap-1">
			<li class="text-lg font-bold">Renthof GmbH</li>
			<li>Renthof 3</li>
			<li>34117 Kassel Deutschland</li>
		</ul>
		<ul>
			<li>
				<div class="inline-block w-16">Telefon:</div>
				+49 561 50668 0
			</li>
			<li>
				<div class="inline-block w-16">E-Mail:</div>
				info@renthof-kassel.de
			</li>
			<li>
				<div class="inline-block w-16">Website:</div>
				<a href="https://renthof-kassel.de/" target="_blank" class="text-blue-600 underline"
					>https://renthof-kassel.de/</a
				>
			</li>
		</ul>
	</div>
	<div>
		<a href="https://renthof-kassel.de/" target="_blank" class="_button">Location ansehen</a>
	</div>
	<p>
		Der Renthof bietet unterschiedlicheZimmerkategorien an. Je nachdem, wie viele Gästinnen und
		Gäste dort übernachten, kann es zu einer kleinen Vergünstigung kommen.
	</p>
	<ul>
		<li>Einzelzimmer ab 149 € inkl. Frühstück</li>
		<li>Doppelzimmer ab 164 € inkl. Frühstück</li>
	</ul>
</div>
<Maps />
