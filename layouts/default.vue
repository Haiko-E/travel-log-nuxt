<template>
  <div class="flex flex-col min-h-screen">
    <AppNavBar />
    <main class="container mx-auto flex-grow">
      <slot />
    </main>
    <footer class="bg-gray-800 text-white p-4 text-center">
      © 2025 Travel Log. All rights reserved.
    </footer>
  </div>
</template>
