<script lang="ts">
	import Checkbox from './Checkbox.svelte';
	import Input from './Input.svelte';

	let name = $state('');
	let surname = $state('');
	let email = $state('');
	let person = $state(0);

	let part = $state('party');
	let error = $state('');

	const doText = (personen: number) => {
		if (personen === 1) {
			return 'Ich komme alleine';
		}
		return `Wir kommen mit ${personen} Personen`;
	};

	const doSubject = (personen: number, name: string) => {
		return `${doText(personen)} - ${name}`;
	};

	// @ts-ignore
	const onsubmit = (e) => {
		e.preventDefault();
		console.log(surname, name, email, person);

		if (person < 0 || person > 20) {
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
		} else {
			subject += doSubject(person, name);
			body += doText(person);
		}

		body += `\nLiebe Grüße,\n${surname} ${name}`;

		window.open(
			`mailto:${m.join('')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
		);
	};
</script>

<form class="flex flex-col gap-5" {onsubmit}>
	<Checkbox
		id="location"
		name="part"
		value="party"
		label="Ich / wir kommen gerne"
		bind:group={part}
	/>
	<Checkbox
		id="not"
		name="part"
		value="not"
		bind:group={part}
		label="Ich / wir können leider nicht kommen"
	/>

	<Input id="vorname" label="Vorname" type="text" bind:value={surname} />
	<Input id="name" label="Name" type="text" bind:value={name} />
	<Input id="email" label="E-Mail Adresse" type="email" bind:value={email} />
	<Input id="personen" label="Anzahl Personen" type="number" bind:value={person} />
	{#if error}
		<p class="text-red-700">{error}</p>
	{/if}
	<div>
		<button class="_button" {onsubmit}>Absenden</button>
	</div>
</form>
