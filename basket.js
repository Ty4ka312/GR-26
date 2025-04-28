const cartTable = document.querySelector('.cart-table');
    const cartTotalElement = document.querySelector('.cart-total span');
    const removeButtons = document.querySelectorAll('.remove');
    const checkoutBtn = document.querySelector('.checkout-btn');

    function calculateCartTotal() {
      let total = 0;
      const cartItems = cartTable.querySelectorAll('tbody tr');

      cartItems.forEach(item => {
        const priceElement = item.querySelector('td:nth-child(2)');
        const quantityElement = item.querySelector('input[type="number"]');
        const price = parseFloat(priceElement.textContent.replace('$', ''));
        const quantity = parseInt(quantityElement.value);
        const itemTotal = price * quantity;
        total += itemTotal;
      });

      cartTotalElement.textContent = `$${total.toFixed(2)}`;
    }

    function removeItem(event) {
      const button = event.target;
      const row = button.closest('tr');
      row.remove();
      calculateCartTotal();
    }

    function proceedToCheckout() {
      // Логика для перехода к оформлению заказа
      console.log('Переход к оформлению заказа');
    }

    cartTable.addEventListener('input', calculateCartTotal);
    removeButtons.forEach(button => button.addEventListener('click', removeItem));
    checkoutBtn.addEventListener('click', proceedToCheckout);
    calculateCartTotal();