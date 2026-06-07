function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    if (sidebar) sidebar.classList.toggle('open');
}

window.ajouterAuPanier = function(id, nom, prix, img) {
    let panier = JSON.parse(localStorage.getItem('coffeeCart')) || [];
    const index = panier.findIndex(item => item.id === id);
    
    if (index !== -1) {
        panier[index].quantite += 1;
    } else {
        panier.push({ id: id, nom: nom, prix: parseFloat(prix), img: img, quantite: 1 });
    }

    localStorage.setItem('coffeeCart', JSON.stringify(panier));
    
    afficherSidebarPanier();
    
    const sidebar = document.getElementById('cart-sidebar');
    if (sidebar) sidebar.classList.add('open');
};

function afficherSidebarPanier() {
    const conteneurItems = document.getElementById('sidebar-cart-items');
    const totalSpan = document.getElementById('sidebar-total');
    const badgeCount = document.getElementById('cart-count');
    
    let panier = JSON.parse(localStorage.getItem('coffeeCart')) || [];
    
    if (!conteneurItems) return;
    
    conteneurItems.innerHTML = "";
    let total = 0;
    let nbrArticles = 0;

    if (panier.length === 0) {
        conteneurItems.innerHTML = "<p style='text-align:center; color: gray; margin-top:20px;'>Votre panier est vide.</p>";
        if (totalSpan) totalSpan.innerText = "0.00";
        if (badgeCount) badgeCount.innerText = "0";
        return;
    }

    panier.forEach((item, index) => {
        total += item.prix * item.quantite;
        nbrArticles += item.quantite;

        const div = document.createElement('div');
        div.classList.add('sidebar-item');
        div.innerHTML = `
            <img src="${item.img}" alt="${item.nom}">
            <div class="sidebar-item-details">
                <h4>${item.nom}</h4>
                <p>${item.prix.toFixed(2)} DA</p>
                <input type="number" min="1" value="${item.quantite}" onchange="changerQuantite(${index}, this.value)">
            </div>
            <button style="background:none; border:none; cursor:pointer; font-size:1.2rem;" onclick="retirerDuPanier(${index})">
            <img src="/images/icons/trash-2.svg" alt="Trash" style=" height:1rem; width:1rem;" class="icon"/>
            </button>
        `;
        conteneurItems.appendChild(div);
    });

    if (totalSpan) totalSpan.innerText = total.toFixed(2);
    if (badgeCount) badgeCount.innerText = nbrArticles;
}

window.changerQuantite = function(index, qte) {
    let panier = JSON.parse(localStorage.getItem('coffeeCart')) || [];
    if (parseInt(qte) >= 1) {
        panier[index].quantite = parseInt(qte);
        localStorage.setItem('coffeeCart', JSON.stringify(panier));
        afficherSidebarPanier();
    }
};

window.retirerDuPanier = function(index) {
    let panier = JSON.parse(localStorage.getItem('coffeeCart')) || [];
    panier.splice(index, 1);
    localStorage.setItem('coffeeCart', JSON.stringify(panier));
    afficherSidebarPanier();
};

window.viderPanier = function() {
    localStorage.removeItem('coffeeCart');
    afficherSidebarPanier();
};

window.validerCommande = function() {
    let panier = JSON.parse(localStorage.getItem('coffeeCart')) || [];
    if(panier.length === 0) {
        alert("Le panier est vide !");
        return;
    }
    
    let session = localStorage.getItem('sessionActive');
    if (!session) {
        alert("🔒 Sécurité : Vous devez être connecté pour valider votre commande.");
        const estDansContent = window.location.pathname.includes('/content/');
        window.location.href = estDansContent ? "connexion.html" : "content/connexion.html";
        return;
    }

    alert(`Merci ! Votre commande a été validée avec succès. ☕✨`);
    viderPanier();
    toggleCart();
};

document.addEventListener("DOMContentLoaded", afficherSidebarPanier);