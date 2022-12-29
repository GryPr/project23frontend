<script>
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { AppBar } from '@skeletonlabs/skeleton';
</script>
<AppBar>
	<svelte:fragment slot="lead">
		Project23
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<button class="btn btn-filled-secondary btn-base">Log in</button>
		<button class="btn btn-filled-primary btn-base">Sign up</button>
	</svelte:fragment>
</AppBar>
<slot />
