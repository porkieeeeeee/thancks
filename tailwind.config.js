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
            screens: {
                "2xl": "1440px",
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                ".cs-scrollbar": {
                    "&::-webkit-scrollbar": {
                        width: "6px",
                        marginLeft: "3px",
                    },
                    "&::-webkit-scrollbar-track": {
                        background: "#ffffff30",
                        borderRadius: "3px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: "#ffffff90",
                        borderRadius: "3px",
                    },
                },
                ".cs-text-shadow-none": {
                    textShadow: "0 0 0",
                },
                ".cs-text-shadow-primary": {
                    textShadow: "0 4px 4px #4c6ef5",
                },
            };

            addUtilities(newUtilities, ["responsive", "hover"]);
        },
    ],
};
