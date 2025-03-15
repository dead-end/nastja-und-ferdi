<script lang="ts">
	import Card from './Card.svelte';
	import Form from './Form.svelte';

	import img from '$lib/images/image.jpg';
	import Location from './Location.svelte';
</script>

<main class="bg-radial from-blue-100 from-40% to-blue-400 text-gray-800">
	<div class="container m-auto flex w-full flex-col justify-around gap-8 py-8 lg:w-1/2">
		<Card padding={false}>
			<div class="bg-gradient relative h-[400px] overflow-hidden rounded-md">
				<img src={img} alt="Paar" class="rounded-md" />
				<div class="absolute inset-0 bg-gradient-to-t from-white to-70%"></div>
				<div class="absolute inset-2 top-80 h-full text-center text-gray-900">
					<div class="text-3xl font-extrabold">Nastja & Ferdi</div>
					<div class="text-lg font-bold">Wir haben uns getraut.</div>
				</div>
			</div>
		</Card>
		<Card>
			<Location />
		</Card>
		<Card>
			<Form />
		</Card>
	</div>
</main>
