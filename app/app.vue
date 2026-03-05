<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <WhatsAppButton />
</template>

<script setup lang="ts">
// Initialize auth state on app load
const { fetchUser } = useAuth();
const { locale } = useI18n();
const { isDark } = useDarkMode();

// Set RTL direction based on locale and initialize dark mode
watchEffect(() => {
  if (import.meta.client) {
    document.documentElement.dir = locale.value === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale.value;
  }
});

onMounted(() => {
  fetchUser();
});
</script>

<style>
/* Global styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #0b1120;
}

/* RTL Support */
[dir="rtl"] {
  text-align: right;
}

/* Custom scrollbar - Premium dark theme */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #0f172a;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #6366f1 0%, #9333ea 100%);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #818cf8 0%, #a855f7 100%);
}

/* Selection */
::selection {
  background: rgba(99, 102, 241, 0.3);
  color: #f1f5f9;
}
</style>
