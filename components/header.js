const currentPath = window.location.pathname;

const isActive = (path) =>
  currentPath === path ? "nav-link active" : "nav-link";

const sessionEmail = localStorage.getItem("sessionActive");
const isSignedIn = !!sessionEmail;

const userInitial = sessionEmail ? sessionEmail.charAt(0).toUpperCase() : "";

const userActions = isSignedIn
  ? `
    <li class="user-profile-container">
      <div class="user-avatar">${userInitial}</div>

      <div class="profile-dropdown">
        <a href="/content/profile.html">Mon Profil</a>
        <button class="logout-btn" onclick="deconnexionUser()">Se déconnecter</button>
      </div>
    </li>
  `
  : `
   <li>
        <a href="/content/inscription.html" class="navlink">
          <button class="btn-ghost">Inscription</button>
        </a>
      </li>

      <li>
        <a href="/content/connexion.html" class="navlink">
          <button class="btn-accent">Connexion</button>
        </a>
      </li>
  `;

const header = `
<div class="header-container row-center-between">

  <nav class="brand">
    <h1 class="logo">Tizi Caffé</h1>
    <span class="subtitle">Café de spécialité</span>
  </nav>

  <nav>
    <ul class="nav-links row-center-center">

<a href="/" class="${isActive("/")}">Accueil</a>
<a href="/content/produits.html" class="${isActive("/content/produits.html")}">Les produits</a>
      

    </ul>
  </nav>

  <nav>
    <ul class="row-center-center actions-container">
     <li>
      <button class="cart-button row-center-center btn-ghost" onclick="toggleCart()">
        <span>🛒</span>
        <span id="cart-count" class="cart-badge">0</span>
      </button>
    </li>

      ${userActions}
    </ul>
  </nav>

</div>
`;

document.getElementById("header").innerHTML = header;
