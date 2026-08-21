console.log("Portfolio website loaded successfully.");

const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {
  footer.innerHTML = `© ${year} Deepashree Naik. All Rights Reserved.`;
}
