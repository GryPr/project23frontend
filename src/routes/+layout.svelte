<script>
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { page } from "$app/stores"
	import { signIn } from '@auth/sveltekit/client';
	import { goto } from '$app/navigation';
	import { KEYCLOAK_URL } from '$lib/auth/Constants';

	function login() {
		signIn('keycloak')
	}

	function logout() {
		// @ts-ignore
		let idToken = $page.data.session?.user?.idToken;
		let baseUrl = $page.url.origin;
		goto(`${KEYCLOAK_URL}realms/project23/protocol/openid-connect/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${baseUrl}/logout`)
	}

</script>

<AppBar>
	<svelte:fragment slot="lead">ProjectTitle</svelte:fragment>
	<svelte:fragment slot="trail">
        {#if $page.data.session}
          {#if $page.data.session.user?.image}
            <span
              style="background-image: url('{$page.data.session.user.image}')"
              class="avatar"
            />
          {/if}
          <span class="signedInText">
            <p>Signed in as <strong>{$page.data.session.user?.name}</strong></p>

          </span>
          <button on:click={logout} class="btn btn-filled-secondary btn-base">Sign out</button>
        {:else}
			<span class="notSignedInText">You are not signed in</span>
			<button class="btn btn-filled-primary btn-base" on:click={login}>Sign in</button>
		{/if}
	</svelte:fragment>
</AppBar>
<slot />