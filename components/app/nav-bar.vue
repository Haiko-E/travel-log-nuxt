<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <button class="btn btn-accent">
        Login with github
        <Icon
          name="tabler:brand-github"
          class="ml-1"
          size="24"
        />
      </button>
    </div>
  </div>
</template>
