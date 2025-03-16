<script lang="ts">
	import Card from './Card.svelte';
	import Form from './Form.svelte';

	import img from '$lib/images/image.jpg';
	import mama from '$lib/images/mama.jpg';
	import ritter from '$lib/images/ritter.jpg';
	import Location from './Location.svelte';
</script>

<main class="bg-white text-gray-800 sm:bg-radial sm:from-blue-100 sm:from-40% sm:to-blue-400">
	<div class="container m-auto flex w-full flex-col justify-around gap-8 py-8 lg:w-1/2">
		<Card padding={false}>
			<div class="bg-gradient relative h-[400px] overflow-hidden rounded-md">
				<img src={img} alt="Paar" class="rounded-md" />
				<div class="absolute inset-0 bg-gradient-to-t from-white to-70%"></div>
				<div class="absolute inset-2 top-80 h-full text-center text-gray-900">
					<div class="text-3xl font-extrabold">Nastja & Ferdi</div>
					<div class="text-lg">Wir haben uns getraut.</div>
				</div>
			</div>
			<div class="flex flex-col gap-4 p-4">
				<h2 class="text-center text-lg font-semibold">Das muss gefeiert werden!</h2>

				<div class="flex flex-col gap-4 p-8 md:flex-row md:justify-around">
					<div>
						<h4 class="pb-2 text-lg font-light text-gray-700">Wann?</h4>
						<p>26.08.2025 17:00 Uhr</p>
					</div>
					<div>
						<h4 class="pb-2 text-lg font-light text-gray-700">Wo?</h4>
						<p>Renthof in Kassel</p>
					</div>
				</div>
			</div>
		</Card>
		<Card>
			<Location />
		</Card>
		<Card padding={false}>
			<div class="bg-gradient relative h-[400px] overflow-hidden rounded-md">
				<img class="absolute -top-80 rounded-md" src={mama} alt="Paar" />
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
