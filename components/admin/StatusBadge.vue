<template>
  <span
    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
    :class="statusClass"
  >
    {{ status }}
  </span>
</template>

<script setup lang="ts">
interface Props {
  status: string;
}

const props = defineProps<Props>();

const statusClass = computed(() => {
  switch (props.status) {
    case "New":
      return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
    case "In Progress":
      return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
    case "Completed":
      return "bg-green-500/20 text-green-400 border border-green-500/30";
    default:
      return "bg-dark-600 text-dark-300 border border-dark-500";
  }
});
</script>
