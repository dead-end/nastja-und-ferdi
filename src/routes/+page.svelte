<script lang="ts">
	import Card from './Card.svelte';
	import Form from './Form.svelte';
	import nastja_ferdi from '$lib/images/image.jpg';
	import mama from '$lib/images/mama.jpg';
	import Hotel from './Hotel.svelte';
	import nastja from '$lib/images/nastja.jpg';
</script>

<main
	class="font-roboto bg-white text-base text-gray-800 sm:bg-radial sm:from-blue-100 sm:from-40% sm:to-blue-400"
>
	<div class="container m-auto flex w-full flex-col justify-around gap-8 py-8 lg:w-1/2">
		<Card padding={false}>
			<div class="h-[400px] overflow-hidden">
				<img src={nastja_ferdi} alt="Paar" class="rounded-md" />
			</div>
			<div class="flex flex-col gap-4 p-4">
				<div class="flex flex-col items-center border-b border-gray-300 pt-2 pb-6">
					<h4 class="text-6xl">Nastja</h4>
					<h6 class="text-4xl">&#x2665;&#xfe0e;</h6>
					<h4 class="text-6xl">Ferdi</h4>
				</div>
				<div class="flex flex-col items-center gap-6">
					<h4 class="text-4xl font-bold">Save the date</h4>

					<table class=" text-center">
						<tbody>
							<tr>
								<td>&nbsp</td>
								<td class="text-xl">Freitag</td>
								<td>&nbsp</td>
							</tr>
							<tr>
								<td class="px-2 text-xl">29</td>
								<td class="border-r border-l border-gray-300 px-2 text-xl">08</td>
								<td class="px-2 text-xl">2025</td>
							</tr></tbody
						>
					</table>

					<p class="">Wir freuen uns, gemeinsam mit Euch im Renthof in Kassel zu feiern ❤️‍🔥</p>
				</div>
			</div>
			<div class="h-[500px] overflow-hidden">
				<img src={mama} alt="Paar" />
			</div>

			<div class="flex flex-col gap-8 px-8 py-8">
				<h2 class="text-2xl font-extrabold text-gray-900">Übernachtung</h2>
				<Hotel
					name="Renthof GmbH"
					anschrift="Renthof 3"
					stadt="34117 Kassel Deutschland"
					telefon="+49 561 50668 0"
					email="info@renthof-kassel.de"
					url="https://renthof-kassel.de/"
					maps="https://maps.app.goo.gl/Y2qgEehHAkA7Jh9y8"
				/>
				<div class="flex flex-col gap-4">
					<p>
						Der Renthof bietet unterschiedliche Zimmerkategorien an. Je nachdem, wie viele Gästinnen
						und Gäste dort übernachten, kann es zu einer kleinen Vergünstigung kommen.
					</p>
					<ul>
						<li class="pb-1 pl-2">Einzelzimmer ab 149 € inkl. Frühstück</li>
						<li class="pl-2">Doppelzimmer ab 164 € inkl. Frühstück</li>
					</ul>

					<p>In der Umgebung gibt es zudem unter anderem folgende Hotels:</p>
					<ul>
						<li class="py-1 pl-2">
							<a target="_blank" class="_link" href="https://www.hotel-schweizerhof-kassel.de"
								>Hotel Schweizer Hof</a
							>
						</li>
						<li class="py-1 pl-2">
							<a target="_blank" class="_link" href="https://www.amsonnenhang.net"
								>Hotel am Sonnenhang</a
							>
						</li>

						<li class="py-1 pl-2">
							<a target="_blank" class="_link" href="https://stadthotel-kassel.de/"
								>Stadthotel Kassel</a
							>
						</li>
						<li class="py-1 pl-2">
							<a target="_blank" class="_link" href="https://hotelamrathauskassel.de/"
								>Hotel am Rathaus</a
							>
						</li>
						<li class="py-1 pl-2">
							<a target="_blank" class="_link" href="https://www.hotel-bb.com">B&B Hotel Kassel</a>
						</li>
					</ul>
				</div>

				<div class="text-lg font-bold">
					Teilt uns bitte bis zum 13. April mit, ob ihr im Renthof übernachten möchtet.
				</div>

				<Form />
				<div>
					Wir freuen uns 🪩 Wir starten um 17 Uhr mit einem Sektempfang und kleinen Snacks. Es folgt
					das Abendessen und danach wird das Tanzbein geschwungen!
				</div>
			</div>
		</Card>
	</div>
</main>
