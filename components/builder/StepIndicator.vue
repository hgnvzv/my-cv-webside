<template>
  <div class="flex items-center justify-center gap-4 mb-8">
    <div v-for="step in 3" :key="step" class="flex items-center">
      <div
        class="w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all"
        :class="stepClass(step)"
      >
        <span v-if="step < currentStep">
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
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
        <span v-else>{{ step }}</span>
      </div>
      <span
        class="ml-2 text-sm hidden sm:block transition-colors"
        :class="
          step <= currentStep
            ? isDark
              ? 'text-dark-100'
              : 'text-dark-900'
            : isDark
            ? 'text-dark-500'
            : 'text-light-500'
        "
      >
        {{ stepLabels[step - 1] }}
      </span>

      <div
        v-if="step < 3"
        class="w-8 sm:w-16 h-0.5 mx-2 sm:mx-4"
        :class="
          step < currentStep
            ? 'bg-primary-500'
            : isDark
            ? 'bg-dark-700'
            : 'bg-light-700'
        "
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useDarkMode();

interface Props {
  currentStep: number;
}

const props = defineProps<Props>();

const stepLabels = ["System Type", "Modules", "Details"];

const stepClass = (step: number) => {
  if (step < props.currentStep) {
    return "bg-primary-500 text-white";
  } else if (step === props.currentStep) {
    return "bg-primary-500 text-white ring-4 ring-primary-500/20";
  } else {
    return isDark.value
      ? "bg-dark-700 text-dark-400"
      : "bg-light-700 text-light-500";
  }
};
</script>
