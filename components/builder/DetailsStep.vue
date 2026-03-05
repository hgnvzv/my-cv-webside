<template>
  <div class="space-y-6">
    <h2
      class="text-2xl font-bold mb-6 transition-colors"
      :class="[isDark ? 'text-dark-100' : 'text-dark-900']"
    >
      Your Details
    </h2>
    <p
      class="mb-8 transition-colors"
      :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
    >
      Provide your contact information so we can get in touch with you.
    </p>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <label
            class="block text-sm font-medium mb-2 transition-colors"
            :class="[isDark ? 'text-dark-200' : 'text-dark-700']"
            >Full Name *</label
          >
          <input
            v-model="formData.clientName"
            type="text"
            required
            class="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
            :class="[
              isDark
                ? 'bg-dark-800 border border-dark-700 text-dark-100'
                : 'bg-light-800 border border-light-700 text-dark-900',
            ]"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label
            class="block text-sm font-medium mb-2 transition-colors"
            :class="[isDark ? 'text-dark-200' : 'text-dark-700']"
            >Email Address *</label
          >
          <input
            v-model="formData.email"
            type="email"
            required
            class="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
            :class="[
              isDark
                ? 'bg-dark-800 border border-dark-700 text-dark-100'
                : 'bg-light-800 border border-light-700 text-dark-900',
            ]"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div>
        <label
          class="block text-sm font-medium mb-2 transition-colors"
          :class="[isDark ? 'text-dark-200' : 'text-dark-700']"
          >WhatsApp Number *</label
        >
        <input
          v-model="formData.whatsapp"
          type="tel"
          required
          class="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
          :class="[
            isDark
              ? 'bg-dark-800 border border-dark-700 text-dark-100'
              : 'bg-light-800 border border-light-700 text-dark-900',
          ]"
          placeholder="+1234567890"
        />
      </div>

      <div>
        <label
          class="block text-sm font-medium mb-2 transition-colors"
          :class="[isDark ? 'text-dark-200' : 'text-dark-700']"
          >Project Description</label
        >
        <textarea
          v-model="formData.description"
          rows="4"
          class="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-none"
          :class="[
            isDark
              ? 'bg-dark-800 border border-dark-700 text-dark-100'
              : 'bg-light-800 border border-light-700 text-dark-900',
          ]"
          placeholder="Tell us more about your project requirements..."
        ></textarea>
      </div>

      <!-- Final Price Display -->
      <div
        class="p-6 rounded-xl border border-primary-500/20"
        :class="[
          isDark
            ? 'bg-gradient-to-r from-primary-600/10 to-purple-600/10'
            : 'bg-gradient-to-r from-primary-100 to-purple-100',
        ]"
      >
        <div class="flex justify-between items-center">
          <div>
            <p
              class="text-sm transition-colors"
              :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
            >
              System Type
            </p>
            <p
              class="font-semibold capitalize transition-colors"
              :class="[isDark ? 'text-dark-100' : 'text-dark-900']"
            >
              {{ systemType }}
            </p>
          </div>
          <div class="text-right">
            <p
              class="text-sm transition-colors"
              :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
            >
              Total Modules
            </p>
            <p
              class="font-semibold transition-colors"
              :class="[isDark ? 'text-dark-100' : 'text-dark-900']"
            >
              {{ selectedModules.length }} selected
            </p>
          </div>
        </div>
        <div
          class="mt-4 pt-4 border-t flex justify-between items-center transition-colors"
          :class="[isDark ? 'border-dark-700' : 'border-light-700']"
        >
          <span
            class="text-lg font-semibold transition-colors"
            :class="[isDark ? 'text-dark-100' : 'text-dark-900']"
            >Final Price:</span
          >
          <span class="text-3xl font-bold text-primary-400"
            >${{ totalPrice.toLocaleString() }}</span
          >
        </div>
      </div>

      <ErrorMessage v-if="error" :message="error" type="error" />

      <div class="flex justify-between pt-4">
        <button
          type="button"
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
          type="submit"
          :disabled="loading"
          class="px-8 py-3 bg-gradient-primary rounded-lg font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <LoadingSpinner v-if="loading" size="sm" />
          <span v-else>Submit Request</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const { isDark } = useDarkMode();

interface SelectedModule {
  name: string;
  price: number;
  systemType: string;
}

interface FormData {
  clientName: string;
  email: string;
  whatsapp: string;
  description: string;
}

interface Props {
  systemType: string;
  selectedModules: SelectedModule[];
  totalPrice: number;
  formData: FormData;
  loading?: boolean;
  error?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  error: null,
});

const emit = defineEmits<{
  prev: [];
  submit: [];
  "update:formData": [data: FormData];
}>();

const handleSubmit = () => {
  emit("update:formData", {
    clientName: props.formData.clientName,
    email: props.formData.email,
    whatsapp: props.formData.whatsapp,
    description: props.formData.description,
  });
  emit("submit");
};
</script>
