import { ref, computed } from "vue";

const user = ref(null);

if (typeof window !== "undefined") {
    const saved = localStorage.getItem("user");
    if (saved) {
        user.value = JSON.parse(saved);
    }
}

export function useAuth() {
    const isAuth = computed(() => !!user.value);

    const login = async (login, password) => {
        const res = await fetch("api/users.json");
        const users = await res.json();

        const foundUser = users.find(
            (u) => u.login === login && u.password === password
        );

        if (!foundUser) {
            throw new Error("Неверный логин или пароль");
        }

        user.value = foundUser;

        if (typeof window !== "undefined") {
            localStorage.setItem("user", JSON.stringify(foundUser));
        }
    };

    const logout = () => {
        user.value = null;
        if (typeof window !== "undefined") {
            localStorage.removeItem("user");
        }
    };

    return {
        user,
        isAuth,
        login,
        logout,
    };
}
