<script>
	import Checkbox from './Checkbox.svelte';
	import Input from './Input.svelte';
	import Legend from './Legend.svelte';
</script>

<form class="flex flex-col gap-4">
	<Legend label="Wir / Ich" sub="(erforderlich)" />
	<Checkbox
		id="location"
		name="part"
		label="Ich / wir kommen gerne und möchten in der Hochzeitslocation übernachten"
		checked={true}
	/>
	<Checkbox
		id="other"
		name="part"
		label="Ich / wir kommen gerne und übernachten woanders oder fahren wieder nach Hause"
	/>
	<Checkbox id="not" name="part" label="Ich / wir können leider nicht kommen" />

	<Legend label="Persönliche Daten" sub="(erforderlich)" />
	<Input id="vorname" label="Vorname" type="text" value="" />
	<Input id="name" label="Name" type="text" value="" />
	<Input id="mail" label="E-Mail Adresse" type="email" value="" />
	<Input id="anzahl" label="Personenzahl" type="number" value="2" />

	<div>
		<button class="_button">Submit</button>
	</div>
</form>
