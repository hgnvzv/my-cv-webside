<template>
  <div class="p-6 lg:p-8">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-3xl font-bold text-dark-100">Dashboard</h1>
        <p class="text-dark-400 mt-1">Manage your orders and system requests</p>
      </div>
      <div
        class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-dark-400"
      >
        {{ currentDate }}
      </div>
    </div>

    <!-- Stats -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      <div
        class="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary-500/30 transition-all"
      >
        <div class="flex items-center justify-between mb-4">
          <div
            class="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <span class="text-xs text-dark-500 uppercase tracking-wider"
            >Total</span
          >
        </div>
        <div class="text-3xl font-bold text-dark-100">{{ stats.total }}</div>
        <div class="text-sm text-dark-500 mt-1">Total Orders</div>
      </div>

      <div
        class="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-green-500/30 transition-all"
      >
        <div class="flex items-center justify-between mb-4">
          <div
            class="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <span class="flex items-center gap-1.5 text-xs text-green-400">
            <span
              class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"
            ></span>
            New
          </span>
        </div>
        <div class="text-3xl font-bold text-dark-100">{{ stats.new }}</div>
        <div class="text-sm text-dark-500 mt-1">New Orders</div>
      </div>

      <div
        class="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-yellow-500/30 transition-all"
      >
        <div class="flex items-center justify-between mb-4">
          <div
            class="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-yellow-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span class="text-xs text-yellow-400">Active</span>
        </div>
        <div class="text-3xl font-bold text-dark-100">
          {{ stats.inProgress }}
        </div>
        <div class="text-sm text-dark-500 mt-1">In Progress</div>
      </div>

      <div
        class="p-6 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-xl border border-primary-500/30"
      >
        <div class="flex items-center justify-between mb-4">
          <div
            class="w-12 h-12 rounded-xl bg-primary-500/30 flex items-center justify-center"
          >
            <svg
              class="w-6 h-6 text-primary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span class="text-xs text-primary-400">Revenue</span>
        </div>
        <div class="text-3xl font-bold text-dark-100">
          ${{ stats.revenue.toLocaleString() }}
        </div>
        <div class="text-sm text-dark-400 mt-1">Total Revenue</div>
      </div>
    </div>

    <!-- Orders Table -->
    <div
      class="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden"
    >
      <div class="p-6 border-b border-white/10">
        <div
          class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <h2 class="text-xl font-semibold text-dark-100">Recent Orders</h2>
          <div class="flex items-center gap-3">
            <select
              v-model="statusFilter"
              class="bg-dark-900/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
            >
              <option value="all">All Status</option>
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      </div>

      <div v-if="loading" class="py-16 flex items-center justify-center">
        <LoadingSpinner />
      </div>

      <OrdersTable
        v-else-if="filteredOrders.length > 0"
        :orders="filteredOrders"
        @update-status="handleUpdateStatus"
      />

      <!-- Empty State -->
      <div v-else class="text-center py-16">
        <div
          class="w-20 h-20 rounded-full bg-primary-500/10 flex items-center justify-center mx-auto mb-6"
        >
          <svg
            class="w-10 h-10 text-primary-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        <h3
          class="text-xl font-semibold mb-2"
          :class="[isDark ? 'text-dark-100' : 'text-dark-900']"
        >
          No Orders Yet
        </h3>
        <p
          class="max-w-md mx-auto"
          :class="[isDark ? 'text-dark-400' : 'text-dark-600']"
        >
          When customers submit system requests through the builder page, they
          will appear here.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "admin",
  layout: "admin",
});

useHead({
  title: "Dashboard - Mohammed Qassim Admin",
});

const { orders, loading, fetchOrders, updateOrderStatus } = useOrders();
const { isDark } = useDarkMode();

const statusFilter = ref("all");

const currentDate = computed(() => {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

const stats = computed(() => {
  const total = orders.value.length;
  const newOrders = orders.value.filter((o) => o.status === "New").length;
  const inProgress = orders.value.filter(
    (o) => o.status === "In Progress"
  ).length;
  const revenue = orders.value.reduce(
    (sum, o) => sum + Number(o.totalPrice),
    0
  );

  return {
    total,
    new: newOrders,
    inProgress,
    revenue,
  };
});

const filteredOrders = computed(() => {
  if (statusFilter.value === "all") {
    return orders.value;
  }
  return orders.value.filter((o) => o.status === statusFilter.value);
});

const handleUpdateStatus = async (id: string, status: string) => {
  try {
    await updateOrderStatus(id, status);
  } catch (error) {
    console.error("Failed to update status:", error);
  }
};

onMounted(() => {
  fetchOrders();
});
</script>
