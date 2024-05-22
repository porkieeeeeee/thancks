/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#4c6ef5",
                gray000: "#fff",
                gray100: "#495057",
                gray200: "#292e33",
                gray300: "#212529",
            },
            backgroundColor: (theme) => ({
                ...theme("colors"),
            }),
            textColor: (theme) => ({
                ...theme("colors"),
            }),
            borderColor: (theme) => ({
                ...theme("colors"),
            }),
        },
    },
    plugins: [],
};
