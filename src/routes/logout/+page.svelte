<script lang="ts">
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	function handle() {
		if ($page.data.session == null || $page.data.session?.user === undefined) {
			goto('/');
		} else {
			signOut({
				redirect: true,
				callbackUrl: `/`
			});
		}
	}
	$: if (browser) {
		handle();
	}
</script>
