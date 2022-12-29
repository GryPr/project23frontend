<script>
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { KC_CONFIG, KC_INIT_OPTIONS } from '$lib/auth/config.svelte';
	import Keycloak from 'keycloak-js';

	function initKeycloak() {
		const keycloak = new Keycloak(KC_CONFIG)
		keycloak
			.init(KC_INIT_OPTIONS)
			.then(function (authenticated) {
				alert(authenticated ? 'authenticated' : 'not authenticated');
			})
			.catch(function () {});
	}

	onMount(() => {
		initKeycloak();
	});

</script>

<AppBar>
	<svelte:fragment slot="lead">ProjectTitle</svelte:fragment>
	<svelte:fragment slot="trail">
		<button class="btn btn-filled-secondary btn-base">Log in</button>
		<button class="btn btn-filled-primary btn-base">Sign up</button>
	</svelte:fragment>
</AppBar>
<slot />
