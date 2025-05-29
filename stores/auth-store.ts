import { createAuthClient } from "better-auth/vue"; // make sure to import from better-auth/vue
import { defineStore } from "pinia";

export const authClient = createAuthClient();

export const useAuthStore = defineStore("useAuthStore", () => {
  const session = authClient.useSession();
  const isLoading = computed(() => session.value.isPending || session.value.isRefetching);
  const error = computed(() => session.value.error);
  const user = computed(() => session.value.data?.user);

  async function signIn() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
  }

  async function signOut() {
    await authClient.signOut();
    navigateTo("/");
  }

  return { user, isLoading, error, signIn, signOut };
});
