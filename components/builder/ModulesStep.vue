<template>
  <div class="space-y-6">
    <h2
      class="text-2xl font-bold mb-6 transition-colors"
      :class="[isDark ? 'text-dark-100' : 'text-dark-900']"
    >
      Select Modules
    </h2>
    <p
      class="mb-8 transition-colors"
      :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
    >
      Choose the modules you need for your system. Each module has a one-time
      setup fee.
    </p>

    <div v-if="loading" class="py-12">
      <LoadingSpinner />
    </div>

    <div v-else-if="modules.length === 0" class="text-center py-12">
      <p :class="[isDark ? 'text-dark-400' : 'text-dark-600']">
        Please select a system type first to see available modules.
      </p>
    </div>

    <div v-else class="grid md:grid-cols-2 gap-4">
      <button
        v-for="module in modules"
        :key="module.id"
        @click="toggleModule(module)"
        class="p-4 rounded-xl border-2 text-left transition-all"
        :class="
          isModuleSelected(module.name)
            ? 'border-primary-500 bg-primary-500/10'
            : isDark
            ? 'border-dark-700 bg-dark-800 hover:border-dark-600'
            : 'border-light-700 bg-light-800 hover:border-light-600'
        "
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div
              class="w-6 h-6 rounded border-2 flex items-center justify-center"
              :class="
                isModuleSelected(module.name)
                  ? 'border-primary-500 bg-primary-500'
                  : isDark
                  ? 'border-dark-600'
                  : 'border-light-600'
              "
            >
              <svg
                v-if="isModuleSelected(module.name)"
                class="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span
              class="font-medium transition-colors"
              :class="[isDark ? 'text-dark-100' : 'text-dark-900']"
              >{{ module.name }}</span
            >
          </div>
          <span class="text-primary-400 font-semibold"
            >${{ Number(module.price).toLocaleString() }}</span
          >
        </div>
      </button>
    </div>

    <!-- Price Summary -->
    <div
      class="mt-8 p-6 rounded-xl border transition-colors"
      :class="[
        isDark
          ? 'bg-dark-800 border-dark-700'
          : 'bg-light-800 border-light-700',
      ]"
    >
      <div class="flex justify-between items-center">
        <span :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
          >Selected Modules:</span
        >
        <span
          class="font-semibold transition-colors"
          :class="[isDark ? 'text-dark-100' : 'text-dark-900']"
          >{{ selectedModules.length }} modules</span
        >
      </div>
      <div
        class="flex justify-between items-center mt-2 pt-2 border-t transition-colors"
        :class="[isDark ? 'border-dark-700' : 'border-light-700']"
      >
        <span
          class="text-lg font-semibold transition-colors"
          :class="[isDark ? 'text-dark-100' : 'text-dark-900']"
          >Estimated Total:</span
        >
        <span class="text-2xl font-bold text-primary-400"
          >${{ totalPrice.toLocaleString() }}</span
        >
      </div>
    </div>

    <div class="mt-8 flex justify-between">
      <button
        @click="$emit('prev')"
        class="px-6 py-3 border rounded-lg font-semibold transition-colors"
        :class="[
          isDark
            ? 'border-dark-600 text-dark-300 hover:bg-dark-800'
            : 'border-light-600 text-dark-600 hover:bg-light-800',
        ]"
      >
        Previous
      </button>
      <button
        @click="$emit('next')"
        :disabled="selectedModules.length === 0"
        class="px-6 py-3 bg-gradient-primary rounded-lg font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next Step
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useDarkMode();

interface Module {
  id: string;
  name: string;
  price: number;
  systemType: string;
}

interface SelectedModule {
  name: string;
  price: number;
  systemType: string;
}

interface Props {
  systemType: string;
  selectedModules: SelectedModule[];
  totalPrice: number;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  prev: [];
  next: [];
  toggleModule: [module: SelectedModule];
}>();

const { pricingModules, loading, fetchPricing } = usePricing();

onMounted(() => {
  fetchPricing();
});

const modules = computed(() => {
  return pricingModules.value.filter((m) => m.systemType === props.systemType);
});

const isModuleSelected = (moduleName: string) => {
  return props.selectedModules.some((m) => m.name === moduleName);
};

const toggleModule = (module: Module) => {
  emit("toggleModule", {
    name: module.name,
    price: Number(module.price),
    systemType: module.systemType,
  });
};
</script>
