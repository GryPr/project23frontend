<script context="module" lang="ts">
	import type { KeycloakInitOptions } from 'keycloak-js';
	
    export const KC_INIT_OPTIONS: KeycloakInitOptions = {
		// onLoad: 'login-required'
	};

	export const KC_CONFIG = {
		realm: 'project23',
		clientId: 'frontend',
		url: 'http://127.0.0.1:8080/'
	};
</script>
