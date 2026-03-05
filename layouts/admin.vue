<template>
  <div class="min-h-screen bg-dark-950 text-white flex">
    <!-- Sidebar -->
    <aside
      class="w-72 bg-dark-900/50 backdrop-blur-xl border-r border-white/5 fixed h-full flex flex-col"
    >
      <div class="p-6">
        <NuxtLink to="/admin/dashboard" class="flex items-center gap-3 group">
          <div
            class="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <div>
            <h1 class="font-bold text-lg text-dark-100">
              Mohammed<span class="text-primary-400">CV</span>
            </h1>
            <p class="text-xs text-dark-500">Admin Panel</p>
          </div>
        </NuxtLink>
      </div>

      <nav class="flex-1 mt-4 px-4">
        <div class="space-y-1">
          <NuxtLink
            to="/admin/dashboard"
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-dark-400 hover:bg-white/5 hover:text-dark-100 transition-all group"
            active-class="bg-gradient-to-r from-primary-500/20 to-transparent text-primary-400 border-l-2 border-primary-500"
          >
            <svg
              class="w-5 h-5 group-hover:text-primary-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span class="font-medium">Dashboard</span>
          </NuxtLink>
        </div>
      </nav>

      <!-- User Section -->
      <div class="p-4 border-t border-white/5">
        <div
          class="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 mb-3"
        >
          <div
            class="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center"
          >
            <span class="text-sm font-semibold">A</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-dark-100 truncate">Admin</p>
            <p class="text-xs text-dark-500 truncate">
              admin@Mohammed Qassim.com
            </p>
          </div>
        </div>

        <button
          @click="handleLogout"
          class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-dark-400 hover:bg-red-500/10 hover:text-red-400 transition-all group"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span class="font-medium">Logout</span>
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="ml-72 flex-1 min-h-screen overflow-auto">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const { logout } = useAuth();

const handleLogout = async () => {
  await logout();
  navigateTo("/admin/login");
};
</script>
