const sidebar = `

  <div class="cart-sidebar-header">
        <h3>Mon Panier</h3>
        <button class="close-btn" onclick="toggleCart()">×</button>
      </div>
      <div id="sidebar-cart-items" class="sidebar-cart-items"></div>
      <div class="cart-sidebar-footer">
        <div class="total-row">
          <span>Total:</span>
          <div><span id="sidebar-total">0.00</span>DA</div>
        </div>
       <div class="action col-center-center">
         <button class="btn-accent" onclick="validerCommande()">
          Passer la commande
        </button>
        <button class="clear-btn" onclick="viderPanier()">Vider</button>
       </div>
      </div>

`;

document.getElementById("cart-sidebar").innerHTML = sidebar;