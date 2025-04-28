const form = document.getElementById('orderForm');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const addressError = document.getElementById('addressError');
    const phoneError = document.getElementById('phoneError');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const address = document.getElementById('address').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;

      let isValid = true;

      if (!name) {
        nameError.textContent = 'Пожалуйста, введите ваше имя.';
        isValid = false;
      } else {
        nameError.textContent = '';
      }

      if (!email || !isValidEmail(email)) {
        emailError.textContent = 'Пожалуйста, введите действительный email.';
        isValid = false;
      } else {
        emailError.textContent = '';
      }

      if (!address) {
        addressError.textContent = 'Пожалуйста, введите ваш адрес.';
        isValid = false;
      } else {
        addressError.textContent = '';
      }

      if (!phone) {
        phoneError.textContent = 'Пожалуйста, введите ваш номер телефона.';
        isValid = false;
      } else {
        phoneError.textContent = '';
      }

      if (isValid) {
        console.log('Отправка данных:');
        console.log('Имя:', name);
        console.log('Email:', email);
        console.log('Адрес:', address);
        console.log('Телефон:', phone);
        console.log('Комментарий:', message);

        form.reset();
        alert('Ваш заказ успешно оформлен!');
      }
    });

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }