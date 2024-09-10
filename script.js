// Fungsi untuk menampilkan pop-up testimonial
function openTestimonialPopup(name, image, message) {
  document.getElementById("popup-name").textContent = name;
  document.getElementById("popup-message").textContent = message;
  document.getElementById("popup-image").src = image;
  document.getElementById("testimonial-popup").classList.add("show");
}

// Fungsi untuk menutup pop-up testimonial
function closeTestimonialPopup() {
  document.getElementById("testimonial-popup").classList.remove("show");
  document.getElementById("popup-image").src = ""; // Clear src when popup closes
}
// Fungsi untuk menutup pop-up dengan klik di luar konten
document
  .getElementById("testimonial-popup")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closeTestimonialPopup();
    }
  });

// Tutup popup dengan tombol 'Esc'
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeTestimonialPopup();
  }
});

// Fungsi untuk menambahkan animasi scroll
function scrollFadeIn() {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 50) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", scrollFadeIn);

// Validasi Form Kontak
const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", function (event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    event.preventDefault();
    alert("Semua kolom harus diisi!");
  } else if (!validateEmail(email)) {
    event.preventDefault();
    alert("Format email tidak valid!");
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}
// Fungsi untuk menampilkan pop-up spesifikasi
function openSpecPopup() {
  document.getElementById("spec-popup").style.display = "block";
}

// Fungsi untuk menutup pop-up spesifikasi
function closeSpecPopup() {
  document.getElementById("spec-popup").style.display = "none";
}

// Fungsi untuk menutup pop-up dengan klik di luar konten
document
  .getElementById("spec-popup")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closeSpecPopup();
    }
  });

// Fungsi untuk menutup pop-up dengan tombol 'Esc'
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeSpecPopup();
  }
});

