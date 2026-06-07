const produits = [
  {
    id: 1,
    nom: "Yirgacheffe Éthiopien",
    categorie: "Grains de café",
    prix: 180,
    img: "/images/home/featured.jpeg",
  },

  {
    id: 2,
    nom: "Latte Macchiato Onctueux",
    categorie: "Cafés",
    prix: 120,
    img: "/images/products/Latte Macchiato Onctueux.webp",
  },
  {
    id: 3,
    nom: "Cappuccino Classique",
    categorie: "Cafés",
    prix: 100,
    img: "/images/products/Cappuccino Classique.jpg",
  },
  {
    id: 4,
    nom: "Americano Intense",
    categorie: "Cafés",
    prix: 75,
    img: "/images/products/Americano Intense.jpg",
  },
  {
    id: 5,
    nom: "Ristretto Corsé",
    categorie: "Cafés",
    prix: 70,
    img: "/images/products/Ristretto Corsé.jpg",
  },
  {
    id: 6,
    nom: "Flat White Velouté",
    categorie: "Cafés",
    prix: 100,
    img: "/images/products/Flat White Velouté.jpg",
  },
  {
    id: 7,
    nom: "Mocha Chocolaté",
    categorie: "Cafés",
    prix: 120,
    img: "/images/products/Mocha Chocolaté.jpg",
  },
  {
    id: 8,
    nom: "Cortado Équilibré",
    categorie: "Cafés",
    prix: 90,
    img: "/images/products/Cortado Équilibré.jpg",
  },
  {
    id: 9,
    nom: "Caramel Macchiato",
    categorie: "Cafés",
    prix: 120,
    img: "/images/products/Caramel Macchiato.jpg",
  },
  {
    id: 10,
    nom: "Cold Brew Rafraîchissant",
    categorie: "Boissons froides",
    prix: 110,
    img: "/images/products/Cold Brew Rafraîchissant.webp",
  },
  {
    id: 11,
    nom: "Iced Latte Vanille",
    categorie: "Boissons froides",
    prix: 120,
    img: "/images/products/Iced Latte Vanille.webp",
  },
  {
    id: 12,
    nom: "Affogato Italien",
    categorie: "Cafés",
    prix: 130,
    img: "/images/products/Affogato Italien.jpg",
  },
  {
    id: 13,
    nom: "Chai Latte Épicé",
    categorie: "Thés",
    prix: 120,
    img: "/images/products/Chai Latte Épicé.jpg",
  },
  {
    id: 14,
    nom: "Matcha Latte",
    categorie: "Thés",
    prix: 130,
    img: "/images/products/Matcha Latte.jpg",
  },
  {
    id: 15,
    nom: "Chocolat Chaud Gourmand",
    categorie: "Boissons chaudes",
    prix: 85,
    img: "/images/products/Chocolat Chaud Gourmand.jpg",
  },
  {
    id: 16,
    nom: "Croissant Beurre",
    categorie: "Pâtisseries",
    prix: 45,
    img: "/images/products/Croissant Beurre.jpg",
  },
  {
    id: 17,
    nom: "Pain au Chocolat",
    categorie: "Pâtisseries",
    prix: 50,
    img: "/images/products/Pain au Chocolat.jpg",
  },
  {
    id: 18,
    nom: "Muffin Myrtille",
    categorie: "Pâtisseries",
    prix: 75,
    img: "/images/products/Muffin Myrtille.jpg",
  },
  {
    id: 19,
    nom: "Cookie Chocolat",
    categorie: "Pâtisseries",
    prix: 65,
    img: "/images/products/Cookie Chocolat.png",
  },
  {
    id: 20,
    nom: "Cheesecake New York",
    categorie: "Pâtisseries",
    prix: 115,
    img: "/images/products/Cheesecake New York.jpg",
  },
  {
    id: 21,
    nom: "Cinnamon Roll",
    categorie: "Pâtisseries",
    prix: 80,
    img: "/images/products/Cinnamon Roll.jpg",
  },
  {
    id: 22,
    nom: "Brownie Chocolat Fondant",
    categorie: "Pâtisseries",
    prix: 75,
    img: "/images/products/Brownie Chocolat Fondant.jpg",
  },
  {
    id: 23,
    nom: "Tarte Citron",
    categorie: "Pâtisseries",
    prix: 90,
    img: "/images/products/Tarte Citron.png",
  },
  {
    id: 24,
    nom: "Sandwich Club",
    categorie: "Snacks",
    prix: 140,
    img: "/images/products/Sandwich Club.jpg",
  },
  {
    id: 25,
    nom: "Yaourt Granola Fruits",
    categorie: "Snacks",
    prix: 100,
    img: "/images/products/Yaourt Granola Fruits.jpg",
  },
  {
    id: 26,
    nom: "Espresso Pur Arabica",
    categorie: "Cafés",
    prix: 70,
    img: "/images/products/Espresso Pur Arabica.jpg",
  },
];

const container = document.getElementById("product-grid");

function afficherProduits(listeProduits) {
  if (!container) return;
  container.innerHTML = "";
  listeProduits.forEach((produit) => {
    const carte = document.createElement("div");
    carte.classList.add("product-card");
    carte.innerHTML = `
      
            <div class="product-visual"><img src="${produit.img}" alt="${produit.nom}" class="product-img"></div>
            <div class="product-body">
                <h3 class="product-title">${produit.nom}</h3>
                <p class="product-subtitle">${produit.categorie}</p>
             <div class="product-action">
                <p class="product-price">${produit.prix.toFixed(2)} DA</p>
                <button class="btn-accent" onclick="ajouterAuPanier(${produit.id}, '${produit.nom.replace(/'/g, "\\'")}', ${produit.prix}, '${produit.img}')">Ajouter au Panier</button></div>
            </div>
    
        `;
    container.appendChild(carte);
  });
}

function filtrerProduits(categorie) {
  if (categorie === "Tous") {
    afficherProduits(produits);
  } else {
    afficherProduits(produits.filter((p) => p.categorie === categorie));
  }
}

window.addEventListener("DOMContentLoaded", () => {
  if (container) afficherProduits(produits);
});
