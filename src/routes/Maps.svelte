<script lang="ts">
	let dsgvo = $state(false);
</script>

<div class="flex justify-center">
	{#if dsgvo}
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2493.804254530219!2d9.50186947697508!3d51.31472552476007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bb38b6c20f1b97%3A0xfa275799a495b821!2sRenthof%20Kassel!5e0!3m2!1sen!2sde!4v1742049979043!5m2!1sen!2sde"
			height="450"
			style="border:0;"
			allowfullscreen={false}
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			title="Renthotel Kassel"
			class="w-full overflow-hidden rounded-md"
		></iframe>
	{:else}
		<div class="rounded-md border border-gray-300 bg-radial from-gray-50 from-40% to-gray-300 p-4">
			<h4 class="mb-4 text-2xl font-bold">
				Google Maps <span class="text-lg font-medium text-gray-600">(DSGVO)</span>
			</h4>
			<p>
				Beim Laden der Karte von Google Maps werden personenbezogene Daten des Nutzers an Google
				übertragen. Ich bin damit einverstanden, dass mir Inhalte von Google Maps angezeigt werden.
			</p>
			<button class="_button mt-4" onclick={() => (dsgvo = true)}>OK</button>
		</div>
	{/if}
</div>
