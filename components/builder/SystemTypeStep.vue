<template>
  <div class="space-y-6">
    <h2
      class="text-2xl font-bold mb-6 transition-colors"
      :class="[isDark ? 'text-dark-100' : 'text-dark-900']"
    >
      Choose Your System Type
    </h2>
    <p
      class="mb-8 transition-colors"
      :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
    >
      Select the type of system you want to build. Each system comes with
      specialized modules.
    </p>

    <div class="grid md:grid-cols-2 gap-4">
      <button
        v-for="system in systemTypes"
        :key="system.value"
        @click="selectSystem(system.value)"
        class="p-6 rounded-xl border-2 text-left transition-all hover:-translate-y-1"
        :class="
          selectedType === system.value
            ? 'border-primary-500 bg-primary-500/10'
            : isDark
            ? 'border-dark-700 bg-dark-800 hover:border-dark-600'
            : 'border-light-700 bg-light-800 hover:border-light-600'
        "
      >
        <div class="flex items-start gap-4">
          <div
            class="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-2xl"
          >
            {{ system.icon }}
          </div>
          <div>
            <h3
              class="font-semibold mb-1 transition-colors"
              :class="[isDark ? 'text-dark-100' : 'text-dark-900']"
            >
              {{ system.label }}
            </h3>
            <p
              class="text-sm transition-colors"
              :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
            >
              {{ system.description }}
            </p>
          </div>
        </div>
      </button>
    </div>

    <div class="mt-8 flex justify-end">
      <button
        @click="$emit('next')"
        :disabled="!selectedType"
        class="px-6 py-3 bg-gradient-primary rounded-lg font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next Step
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useDarkMode();

interface Props {
  selectedType: "" | "medical" | "restaurant" | "school" | "custom";
}

const props = defineProps<Props>();
const emit = defineEmits<{
  "update:selectedType": [
    value: "" | "medical" | "restaurant" | "school" | "custom"
  ];
  next: [];
}>();

const systemTypes: Array<{
  value: "" | "medical" | "restaurant" | "school" | "custom";
  label: string;
  icon: string;
  description: string;
}> = [
  {
    value: "medical",
    label: "Medical Management",
    icon: "🏥",
    description: "Patient records, appointments, billing, and more.",
  },
  {
    value: "restaurant",
    label: "Restaurant System",
    icon: "🍽️",
    description: "Orders, menu, reservations, kitchen display.",
  },
  {
    value: "school",
    label: "School System",
    icon: "🎓",
    description: "Students, grades, attendance, fee management.",
  },
  {
    value: "custom",
    label: "Custom System",
    icon: "⚙️",
    description: "Build a tailored solution for your needs.",
  },
];

const selectSystem = (
  value: "" | "medical" | "restaurant" | "school" | "custom"
) => {
  emit("update:selectedType", value);
};
</script>
