function getUsers() {
  return JSON.parse(localStorage.getItem("coffeeUsers")) || [];
}

function saveUsers(users) {
  localStorage.setItem("coffeeUsers", JSON.stringify(users));
}

function getSession() {
  return localStorage.getItem("sessionActive");
}

function setSession(email) {
  localStorage.setItem("sessionActive", email);
}

function clearSession() {
  localStorage.removeItem("sessionActive");
}

function updateHeaderAuthState() {
  const header = document.querySelector(".header-container");
  if (!header) return;

  const session = getSession();

  header.setAttribute("data-auth", session ? "logged" : "guest");

  if (session) {
    const avatar = header.querySelector(".user-avatar");
    if (avatar) {
      avatar.textContent = session.charAt(0).toUpperCase();
    }
  }
}

const registerForm = document.getElementById("signup-form");

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const msg = document.getElementById("register-msg");

    if (!email || !password) {
      msg.style.color = "red";
      msg.textContent = "Tous les champs sont obligatoires.";
      return;
    }

    const users = getUsers();

    if (users.some((u) => u.email === email)) {
      msg.style.color = "red";
      msg.textContent = "Email déjà utilisé.";
      return;
    }

    users.push({ email, password });
    saveUsers(users);

    msg.style.color = "green";
    msg.textContent = "Compte créé !";

    setTimeout(() => {
      window.location.href = "connexion.html";
    }, 1000);
  });
}

const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;
    const msg = document.getElementById("login-msg");

    const users = getUsers();

    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      msg.style.color = "red";
      msg.textContent = "Identifiants incorrects.";
      return;
    }

    setSession(email);

    msg.style.color = "green";
    msg.textContent = "Connexion réussie.";

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 800);
  });
}

window.deconnexionUser = function () {
  clearSession();
  updateHeaderAuthState();
  location.href = "/";
};

document.addEventListener("DOMContentLoaded", () => {
  updateHeaderAuthState();
});
