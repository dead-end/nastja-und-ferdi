<script lang="ts">
	import Card from './Card.svelte';
	import Form from './Form.svelte';
	import mama from '$lib/images/mama.jpg';
	import Location from './Location.svelte';
	import nastja_ferdi from '$lib/images/image.jpg';
	import ritter from '$lib/images/ritter.jpg';
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
					<h6 class="text-xl">&#x2665;&#xfe0f;</h6>
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
			<div class="h-[400px] overflow-hidden rounded-b-md">
				<img src={ritter} alt="Paar" />
			</div>
		</Card>
		<Card>
			<Location />
		</Card>
		<Card padding={false}>
			<div class="bg-gradient relative h-[400px] overflow-hidden rounded-md">
				<img
					class="absolute -top-20 rounded-md sm:-top-40 md:-top-60 lg:-top-80"
					src={mama}
					alt="Paar"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-white to-50%"></div>
				<div class="absolute inset-2 top-80 h-full text-center text-gray-900">
					<div class="text-3xl font-extrabold">Unterkunft</div>
					<div class="text-lg font-bold">Gemütlich übernachten.</div>
				</div>
			</div>
			<div class="flex flex-col gap-4 p-8">
				<div>Das Hotel Landhaus am See bietet eine Vielzahl an Zimmern.</div>
				<ul>
					<li>Einzelzimmer ab 80 € inkl. Frühstück</li>
					<li>Doppelzimmer ab 180 € inkl. Frühstück</li>
				</ul>
				<div>
					Fußläufig gibt es zudem die Pension Garbsen, das Hotel Café Galerie, das Löns Hotel und
					das Hotel Shelby Apartments. Im Umkreis gibt es weitere Hotels und einen Campingplatz, für
					die Abenteurer unter Euch ;-) Wir haben auch die Möglichkeit, einige von Euch in Hannover
					unterzubringen. Gebt uns gerne Bescheid.
				</div>
				<div>
					Um die Zimmer für das Hotel Landhaus am See zu reservieren, benötigen wir von Euch zeitnah
					eine Rückmeldung, ob ihr in der Hochzeitslocation übernachten wollt oder eine andere
					Übernachtungsmöglichkeit bevorzugt.
				</div>
			</div>
		</Card>
		<Card>
			<Form />
		</Card>
	</div>
</main>
