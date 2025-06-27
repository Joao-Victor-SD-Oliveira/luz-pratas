/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",       // <<< Ele já olhava os arquivos .html da raiz
    "./header.html",  // <<< ADICIONAMOS ESTA LINHA para ele olhar o header
    "./footer.html",  // <<< ADICIONAMOS ESTA LINHA para ele olhar o footer
    "./js/**/*.js"    // <<< Ele já olhava os arquivos .js
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}