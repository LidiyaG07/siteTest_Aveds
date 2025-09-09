import { useAuth } from "@/composables/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
    const { isAuth } = useAuth();

    if (to.path === "/account" && !isAuth.value) {
        return navigateTo("/");
    }
});
