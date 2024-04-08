/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {

            "colors": {
                "baseColor": {
                    50: "#E5F2FF",
                    100: "#CCE5FF",
                    200: "#99CAFF",
                    300: "#66B0FF",
                    400: "#3396FF",
                    500: "#007BFF",
                    600: "#0063CC",
                    700: "#004A99",
                    800: "#003166",
                    900: "#001933",
                    950: "#000C19"
                }
            },
            fontFamily: {
                'sans': ['Lato', 'sans-serif'],
                'poppins': ['Poppins', 'sans-serif'],
                'jetbrains': ['JetBrains Mono', 'monospace'],
                'rubik': ['Rubik', 'sans-serif']
            },
            backgroundImage: {
                banner: "url('/assets/bannerH.webp')",
                decore: "url('/assets/decore.webp')",
                darkMode: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))',
                custom_gradient: 'linear-gradient(95deg, rgba(128,139,193,1) 0%, rgba(153,202,255,1) 0%, rgba(51,150,255,1) 57%)',
            },
            backdropOpacity: {
                '50': '0.5'
            },
            backgroundPosition: {
                'custom': '', // Personaliza la posición
            },
            backgroundSize: {
                'cover': 'cover',
                'custom': '40% 60%'// Personaliza el tamaño
            },


        },
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '0rem',
                
            },
        },

    },
    plugins: [],
    darkMode: 'class'
}
