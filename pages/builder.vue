<template>
  <div
    class="min-h-screen pt-24 pb-12 transition-colors duration-300"
    :class="[isDark ? 'bg-dark-950' : 'bg-light-950']"
  >
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1
            class="text-4xl md:text-5xl font-bold mb-4 transition-colors"
            :class="[isDark ? 'text-dark-100' : 'text-dark-900']"
          >
            Build Your System
          </h1>
          <p
            class="text-lg transition-colors"
            :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
          >
            Select your system type, choose modules, and get a quote for your
            custom solution.
          </p>
        </div>

        <!-- Success Message -->
        <div v-if="submitted" class="text-center py-12">
          <div
            class="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6"
          >
            <svg
              class="w-10 h-10 text-green-400"
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
          <h2 class="text-2xl font-bold mb-4">
            Request Submitted Successfully!
          </h2>
          <p class="text-dark-400 mb-8">
            Thank you for your interest. We'll get back to you within 24 hours.
          </p>
          <div
            class="p-6 bg-dark-800 rounded-xl border border-dark-700 max-w-md mx-auto mb-8"
          >
            <p class="text-sm text-dark-400 mb-2">Your estimated price:</p>
            <p class="text-3xl font-bold text-primary-400">
              ${{ totalPrice.toLocaleString() }}
            </p>
          </div>
          <button
            @click="handleReset"
            class="px-6 py-3 bg-gradient-primary rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Submit Another Request
          </button>
        </div>

        <!-- Builder Form -->
        <GlassCard v-else padding="lg">
          <StepIndicator :current-step="currentStep" />

          <!-- Step 1: System Type -->
          <SystemTypeStep
            v-if="currentStep === 1"
            :selected-type="formData.systemType"
            @update:selected-type="updateSystemType"
            @next="nextStep"
          />

          <!-- Step 2: Modules -->
          <ModulesStep
            v-else-if="currentStep === 2"
            :system-type="formData.systemType"
            :selected-modules="formData.selectedModules"
            :total-price="totalPrice"
            @prev="prevStep"
            @next="nextStep"
            @toggle-module="toggleModule"
          />

          <!-- Step 3: Details -->
          <DetailsStep
            v-else-if="currentStep === 3"
            :system-type="formData.systemType"
            :selected-modules="formData.selectedModules"
            :total-price="totalPrice"
            :form-data="{
              clientName: formData.clientName,
              email: formData.email,
              whatsapp: formData.whatsapp,
              description: formData.description,
            }"
            :loading="loading"
            :error="error"
            @prev="prevStep"
            @update:form-data="updateFormData"
            @submit="handleSubmit"
          />
        </GlassCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SystemTypeStep from "~/components/builder/SystemTypeStep.vue";
import ModulesStep from "~/components/builder/ModulesStep.vue";
import DetailsStep from "~/components/builder/DetailsStep.vue";
import StepIndicator from "~/components/builder/StepIndicator.vue";
import GlassCard from "~/components/shared/GlassCard.vue";

const { isDark } = useDarkMode();

useHead({
  title: "Build Your System - Mohammed Qassim",
  meta: [
    {
      name: "description",
      content:
        "Build your custom system - Medical, Restaurant, School, or Custom solutions.",
    },
  ],
});

const {
  currentStep,
  formData,
  totalPrice,
  loading,
  error,
  submitted,
  nextStep,
  prevStep,
  toggleModule,
  submitOrder,
  resetForm,
} = useBuilder();

const handleSubmit = async () => {
  try {
    await submitOrder();
  } catch {
    // Error is handled in the composable
  }
};

const updateFormData = (data: {
  clientName: string;
  email: string;
  whatsapp: string;
  description: string;
}) => {
  formData.value.clientName = data.clientName;
  formData.value.email = data.email;
  formData.value.whatsapp = data.whatsapp;
  formData.value.description = data.description;
};

const handleReset = () => {
  resetForm();
};

const updateSystemType = (
  value: "" | "medical" | "restaurant" | "school" | "custom"
) => {
  formData.value.systemType = value;
};
</script>
