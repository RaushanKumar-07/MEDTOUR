import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5001/api",
    withCredentials: true
});

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,

    async (error) => {

        const originalRequest = error.config;

        if (
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {

            originalRequest._retry = true;

            try {

                const response = await api.get(
                    "/Login_routes/refreshToken",
                    {
                        withCredentials: true
                    }
                );

                const newToken = response.data.accessToken;

                localStorage.setItem("token", newToken);

                originalRequest.headers.Authorization =
                    `Bearer ${newToken}`;

                return api(originalRequest);

            } catch (error) {

                localStorage.clear();

                window.location.href = "/";

                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
);

export default api;