<script setup lang="ts">
import { authClient } from "~/lib/auth-client";

const session = authClient.useSession();

async function signIn() {
  await authClient.signIn.social({
    provider: "github",
  });
}
</script>

<template>
  <button
    v-if="!session.data"
    class="btn btn-accent"
    @click="signIn"
  >
    Login with github
    <Icon
      name="tabler:brand-github"
      class="ml-1"
      size="24"
    />
  </button>
  <button
    v-else-if="session.data"
    class="btn btn-accent"
    @click="authClient.signOut()"
  >
    Sign out
  </button>
</template>
