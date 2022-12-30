import { SvelteKitAuth } from "@auth/sveltekit"
import Keycloak from "@auth/core/providers/keycloak"

export const handle = SvelteKitAuth({
  // debug: true,
  providers: [
    // @ts-ignore
    Keycloak({
      clientId: "frontend",
      clientSecret: "mwORDeIG8JtoTKuaU5w7XfGZqnj41nA4",
      issuer: "http://127.0.0.1:8080/realms/project23",
      profile(profile, tokens) {
        return {
          id: profile.sub,
          name: profile.name ?? profile.preferred_username,
          email: profile.email,
          image: profile.picture,
          idToken: tokens.id_token,
        }
      }
    })
  ],
	callbacks: {
		async session({ session, user, token }) {
      console.log(user)
			session.user = {
        name: session.user?.name,
        email: session.user?.email,
        image: session.user?.image,
				idToken: token.idToken,
			} as any;
			return session;
		},
		async jwt({ token, user, account, profile, isNewUser }) {
			if (user) {
        // @ts-ignore
				token.idToken = user.idToken;
			}
			return token;
		},
	},
})