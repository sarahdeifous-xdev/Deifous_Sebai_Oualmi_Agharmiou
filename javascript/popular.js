const popular = [
  {
    id: 7,
    nom: "Mocha Chocolaté",
    categorie: "Cafés",
    prix: 120,
    img: "/images/products/Mocha Chocolaté.jpg",
  },
  {
    id: 15,
    nom: "Chocolat Chaud Gourmand",
    categorie: "Boissons chaudes",
    prix: 85,
    img: "/images/products/Chocolat Chaud Gourmand.jpg",
  },
  {
    id: 25,
    nom: "Yaourt Granola Fruits",
    categorie: "Snacks",
    prix: 100,
    img: "/images/products/Yaourt Granola Fruits.jpg",
  },
];

const container = document.getElementById("popular-grid");

function afficherProduits(listeProduits) {
  if (!container) return;

  container.innerHTML = "";

  listeProduits.forEach((produit) => {
    const carte = document.createElement("div");

    carte.classList.add("product-card");

    carte.innerHTML = `
      <div class="product-visual">
        <img src="${produit.img}" alt="${produit.nom}" class="product-img">
      </div>

      <div class="product-body">
        <h3 class="product-title">${produit.nom}</h3>
        <p class="product-subtitle">${produit.categorie}</p>

        <div class="product-action">
          <p class="product-price">${produit.prix.toFixed(2)} DA</p>

          <button
            class="btn-accent"
            onclick="ajouterAuPanier(${produit.id}, '${produit.nom.replace(/'/g, "\\'")}', ${produit.prix}, '${produit.img}')"
          >
            Ajouter au Panier
          </button>
        </div>
      </div>
    `;

    container.appendChild(carte);
  });
}

afficherProduits(popular);
