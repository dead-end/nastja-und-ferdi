<script lang="ts">
	import Card from './Card.svelte';
	import Form from './Form.svelte';
	import nastja_ferdi from '$lib/images/image.jpg';
	import ritter from '$lib/images/ritter.jpg';
	import Hotel from './Hotel.svelte';
	import Maps from './Maps.svelte';
</script>

<main
	class="font-roboto bg-white text-gray-800 sm:bg-radial sm:from-blue-100 sm:from-40% sm:to-blue-400"
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
					<h4 class="text-2xl font-light">Save the date</h4>

					<table class=" text-center">
						<tbody>
							<tr>
								<td>&nbsp</td>
								<td>Freitag</td>
								<td>&nbsp</td>
							</tr>
							<tr>
								<td class="px-2">29</td>
								<td class="border-r border-l border-gray-300 px-2">08</td>
								<td class="px-2">2025</td>
							</tr></tbody
						>
					</table>

					<p class="">Wir freuen uns, gemeinsam mit Euch im Renthof in Kassel zu feiern ❤️‍🔥</p>
				</div>
			</div>
			<div class="h-[400px] overflow-hidden">
				<img src={ritter} alt="Paar" />
			</div>

			<div class="flex flex-col gap-8 px-8 py-8">
				<h2 class="text-2xl font-extrabold text-gray-900">Location</h2>
				<Hotel
					name="Renthof GmbH"
					anschrift="Renthof 3"
					stadt="34117 Kassel Deutschland"
					telefon="+49 561 50668 0"
					email="info@renthof-kassel.de"
					url="https://renthof-kassel.de/"
				>
					<div>
						<h4 class="pb-2 font-semibold">Informationen</h4>
						<p class="pb-4">
							Der Renthof bietet unterschiedliche Zimmerkategorien an. Je nachdem, wie viele
							Gästinnen und Gäste dort übernachten, kann es zu einer kleinen Vergünstigung kommen.
						</p>
						<ul>
							<li class="pb-1 pl-2">Einzelzimmer ab 149 € inkl. Frühstück</li>
							<li class="pl-2">Doppelzimmer ab 164 € inkl. Frühstück</li>
						</ul>
					</div>
				</Hotel>
				<Maps />
				<p>In der Umgebung gibt es zudem unter anderem</p>

				<Hotel
					name="Hotel Schweizer Hof"
					anschrift="Wilhelmshöher Allee 288"
					stadt="34131 Kassel Deutschland"
					telefon="+49 (0) 561 936 90"
					email="info@hotel-schweizerhof-kassel.de"
					url="https://www.hotel-schweizerhof-kassel.de"
				/>

				<p>oder</p>
				<Hotel
					name="Hotel Am Sonnenhang"
					anschrift="Aspenstraße 6 / Am Sonnenhang 4"
					stadt="34128 Kassel Deutschland"
					telefon="+49 561 96988-0"
					email="info@amsonnenhang.net"
					url="https://www.amsonnenhang.net"
				/>

				<div>Teilt uns bitte bis zum 13. April mit, ob ihr im Renthof übernachten möchtet.</div>

				<Form />
				<div>Wir freuen uns 🪩</div>
			</div>
		</Card>
	</div>
</main>
