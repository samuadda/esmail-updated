/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0d2b4c",
                secondary: "#fd2862",
                accent: "#28bea1",
            },
            fontFamily: {
                vazirmatn: ["Vazirmatn", "serif"],
            },
            fontWeight: {
                200: "200",
                300: "300",
                400: "400",
                500: "500",
                600: "600",
                700: "700",
                900: "900",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            animation: {
                orbit: "orbit calc(var(--duration)*1s) linear infinite",
            },
            keyframes: {
                orbit: {
                    "0%": {
                        transform: "rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
                    },
                    "100%": {
                        transform: "rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
                    },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
