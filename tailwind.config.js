/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/Hero.jpg')",
        dog: "url('/dog1.jpg')",
        pet: "url('/pets.jpg')",
        cat: "url('/cats.jpg')",
        why: "url('/why.jpg')",
        price: "url('/price.jpg')",
        price1: "url('/price1.jpg')",
        price2: "url('/price2.jpg')",
        lover: "url('/lover.jpg')",
        lover1: "url('/lover1.jpg')",
        lover2: "url('/lover2.jpg')",
        profile: "url('/profile.jpg')",
        profile1: "url('/profile1.jpg')",
        profile2: "url('/profile2.jpg')",
        blog: "url('/blog.jpg')",
        blog1: "url('/blog1.jpg')",
        blog2: "url('/blog2.jpg')",
      },
    },
  },
  plugins: [],
};
