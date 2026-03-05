export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isAuthenticated } = useAuth();

  // Check if user is authenticated
  if (!isAuthenticated.value) {
    return navigateTo("/admin/login");
  }
});
