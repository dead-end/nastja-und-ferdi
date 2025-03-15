<script lang="ts">
	import Card from './Card.svelte';
	import Form from './Form.svelte';

	import img from '$lib/images/image.jpg';
</script>

<main class="container m-auto flex w-full flex-col lg:w-1/2">
	<Card>
		<div class="bg-gradient relative h-96 overflow-hidden rounded">
			<img src={img} alt="Paar" class="rounded-md" />
			<div class="absolute inset-0 bg-gradient-to-t from-white to-60%"></div>
			<div class="absolute inset-2 top-80 h-full text-center text-3xl font-extrabold text-gray-900">
				Nastja und Ferdi
			</div>
		</div>
	</Card>
	<Card>
		<Form />
	</Card>
</main>
