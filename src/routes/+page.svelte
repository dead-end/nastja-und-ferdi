<script lang="ts">
	import Card from './Card.svelte';
	import Form from './Form.svelte';
	import nastja_ferdi from '$lib/images/image.jpg';
	import Hotel from './Hotel.svelte';

	const reservationMail = 'reservation@renthof-kassel.de';
	const reservationSub = 'Nastja & Ferdi 29.08.2025';
	const resevationMailto = `mailto:${reservationMail}?subject=${encodeURIComponent(reservationSub)}`;

	const nastja = ['kryl', 'ova', '@gm', ' x.', 'de'];
	const bene = ['bene', 'diktbloch', '@', 'goo', 'glema', 'il.com'];
	const ghazaleh = ['ghaz', 'alehbeni', '@y', 'aho', 'o.de'];
</script>

<main class="font-roboto _bg bg-white text-base text-gray-800 sm:bg-radial sm:from-40%">
	<div class="container m-auto flex w-full flex-col justify-around gap-8 py-8 lg:w-1/2">
		<Card padding={false}>
			<div class="h-[400px] overflow-hidden">
				<img src={nastja_ferdi} alt="Paar" class="rounded-md" />
			</div>
			<div class="flex flex-col gap-4 p-4">
				<div class="mb-2 flex flex-col items-center border-b border-gray-300 pt-2 pb-6">
					<h4 class="text-6xl">Nastja</h4>
					<h6 class="text-2xl">&#x2764;&#xfe0f;</h6>
					<h4 class="text-6xl">Ferdi</h4>
				</div>
				<div class="flex flex-col items-center gap-6">
					<h4 class="text-center text-4xl font-bold">
						Wir haben geheiratet und möchten mit Euch feiern ❤️‍🔥
					</h4>

					<table class=" text-center">
						<tbody>
							<tr>
								<td>&nbsp</td>
								<td class="pb-2 text-2xl font-semibold">Freitag</td>
								<td>&nbsp</td>
							</tr>
							<tr>
								<td class="px-4 text-2xl font-semibold">29</td>
								<td class="border-r-2 border-l-2 border-gray-300 px-2 text-2xl font-semibold">08</td
								>
								<td class="px-4 text-2xl font-semibold">2025</td>
							</tr></tbody
						>
					</table>

					<p class="text-center">
						Um 17:00 Uhr starten wir im Renthof Kassel mit einem Sektempfang und kleinen Snacks. Es
						folgt das Abendessen und danach wird das Tanzbein geschwungen!
					</p>
				</div>
			</div>

			<div class="flex flex-col gap-8 px-8 py-8">
				<h2 class="text-2xl font-extrabold text-gray-900">Renthof</h2>
				<Hotel
					name="Renthof Kassel"
					anschrift="Renthof 3"
					stadt="34117 Kassel Deutschland"
					telefon="+49 561 50668 0"
					email="info@renthof-kassel.de"
					url="https://renthof-kassel.de/"
					maps="https://maps.app.goo.gl/Y2qgEehHAkA7Jh9y8"
				/>
				<h2 class="text-2xl font-extrabold text-gray-900">Übernachtung</h2>
				<div class="flex flex-col gap-4">
					<p>
						Solltet Ihr eine Übernachtungsmöglichkeit benötigen, haben wir im Renthof ein
						Zimmerkontingent reserviert.
					</p>
					<ul class="pb-1">
						<li>Einzelzimmer ab 149 € inkl. Frühstück</li>
						<li>Doppelzimmer ab 164 € inkl. Frühstück</li>
					</ul>

					<p>
						Je nachdem, wie viele Gästinnen und Gäste dort übernachten, kann es zu einer kleinen
						Vergünstigung kommen.
					</p>
					<p class="text-center font-bold">
						Um auf das Zimmerkontingent zurückzugreifen, bucht bitte Eure Zimmer spätestens bis zum
						18. Juni.
					</p>
					<p>
						Reservierungnen sind direkt im Renthof unter
						<a href={resevationMailto} class="_link">{reservationMail}</a>
						oder telefonisch mit dem Betreff
						<span class="text-blue-800">{reservationSub}</span> möglich.
					</p>

					<p>In der Umgebung gibt es zudem unter anderem folgende Hotels:</p>
					<ul>
						<li class="py-1 pl-2">
							<a target="_blank" class="_link" href="https://www.hotel-schweizerhof-kassel.de"
								>Hotel Schweizer Hof</a
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
				<h2 class="text-2xl font-extrabold text-gray-900">Rückmeldung</h2>
				<div class="text-lg font-bold">
					Teilt uns bitte bis zum 30. Juni mit, ob Ihr mit uns feiert.
				</div>

				<Form />
				<p>
					Sollte das Absenden nicht klappen, schickt uns gerne eine Nachricht per Mail an
					<a href={'mailto:' + nastja.join('')} class="_link">{nastja.join('')}</a>
				</p>
				<p>
					Wenn Ihr Fragen habt, meldet Euch gerne bei unseren Trauzeug:innen Bene und Ghazaleh per
					Mail
					<a href={'mailto:' + bene.join('')} class="_link">{bene.join('')}</a>
					und
					<a href={'mailto:' + ghazaleh.join('')} class="_link">{ghazaleh.join('')}</a>
				</p>
				<p class="text-center">Wir freuen uns auf die gemeinsame Zeit mit Euch 🪩</p>
			</div>
		</Card>
	</div>
</main>
