<script lang="ts">
	import Checkbox from './Checkbox.svelte';
	import Input from './Input.svelte';
	import Legend from './Legend.svelte';

	let name = $state('');
	let surname = $state('');
	let email = $state('');
	let num = $state(2);

	let part = $state('party');
	let error = $state('');

	const personen = (num: number) => {
		if (num === 1) {
			return 'Ich komme alleine';
		}
		return `Wir kommen mit ${num} Personen`;
	};

	// @ts-ignore
	const onsubmit = (e) => {
		e.preventDefault();
		console.log(surname, name, email, num);

		if (num < 0 || num > 20) {
			error = 'Bitte geben Sie die Anzahl der Personen an.';
			return;
		}
		error = '';

		const m = ['kr', 'y', 'lo', 'va', '@', 'gm', 'x', '.', 'de'];

		let subject = 'Hochzeit - ';
		let body = `Hallo Ihr Lieben!,\n`;

		if (part === 'not') {
			subject += `Ich komme nicht - ${name}`;
			body += 'Ich kann leider nicht kommen.';
		} else if (part === 'party') {
			subject += `Party: ${num} - ${name}`;
			body += personen(num);
			body += ' und und kümmere mich selbst um die Unterkunft.';
		} else {
			subject += `Übernachtung: ${num} - ${name}`;
			body += personen(num);
			body += ' und beötigen eine Übernachtung.';
		}

		body += `\nLiebe Grüße,\n${surname} ${name}`;

		window.open(
			`mailto:${m.join('')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
		);
	};
</script>

<form class="flex flex-col gap-4" {onsubmit}>
	<Legend label="Wir / Ich" sub="(erforderlich)" />

	<Checkbox
		id="location"
		name="part"
		value="party"
		label="Ich / wir kommen gerne und möchten in der Hochzeitslocation übernachten"
		bind:group={part}
	/>
	<Checkbox
		id="other"
		name="part"
		value="sleep"
		bind:group={part}
		label="Ich / wir kommen gerne und übernachten woanders oder fahren wieder nach Hause"
	/>
	<Checkbox
		id="not"
		name="part"
		value="not"
		bind:group={part}
		label="Ich / wir können leider nicht kommen"
	/>

	<Legend label="Persönliche Daten" sub="(erforderlich)" />
	<Input id="vorname" label="Vorname" type="text" bind:value={surname} />
	<Input id="name" label="Name" type="text" bind:value={name} />
	<Input id="email" label="E-Mail Adresse" type="email" bind:value={email} />
	<Input id="anzahl" label="Personenzahl" type="number" bind:value={num} />
	{#if error}
		<p class="text-red-700">{error}</p>
	{/if}
	<div>
		<button class="_button" {onsubmit}>Submit</button>
	</div>
</form>
