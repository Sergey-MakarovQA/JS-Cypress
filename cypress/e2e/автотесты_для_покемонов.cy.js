describe('один длинный автотест на покупку нового аватара для своего тренера', function() {

	it('покупка нового аватара', function() {
		cy.clearCookies(); // почистил куки 
		cy.visit('https://pokemonbattle.me/');
		cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // ввожу верную почту
		cy.get('#password').type('USER_PASSWORD'); // ввожу верный пароль

		cy.get('.auth__button').should('be.enabled'); // кнопка Войти кликабельна
		cy.get('.auth__button').click(); // нажал на кнопку Войти

		cy.get('.header__btns > [href="/shop"]').should('be.visible'); // кнопка Магазин видна пользователю
		cy.get('.header__btns > [href="/shop"]').click(); // нажал на кнопку Магазин

		cy.get('.shop__item.available .shop__button').should('be.visible'); // кнопка Купить видна пользователю
		cy.get('.shop__item.available .shop__button').then(($buttons) => {
			const randomIndex = Math.floor(Math.random() * $buttons.length);
			cy.wrap($buttons[randomIndex]).click(); // скрипт, который выбирает любой из ДОСТУПНЫХ аватаров

            // Покупка для VISA
			cy.get('.pay__pay-header-v2').contains('Карта'); // окно с надписью Карта
			cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); // ввожу верный номер карты для VISA
			cy.get(':nth-child(1) > .pay_base-input-v2').type('1029'); // ввожу актуальный срок действия карты
			cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ввожу верный CVV код
			cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('sergey makarov'); // ввожу верные имя и фамилию владельца

			cy.get('.pay-btn').should('be.visible'); // кнопка Оплатить видна пользователю
			cy.get('.pay-btn').should('be.enabled'); // кнопка Оплатить кликабельна
			cy.get('.pay-btn').click(); // нажимаю кнопку Оплатить

			cy.get('.payment__fielheader').contains('Подтверждение покупки'); // окно с надписью Подтверждение покупки
			cy.get('.payment__submit-button').should('be.disabled'); // кнопка Отправить не активна
			cy.get('#cardnumber').type('56456'); // ввожу правильный пароль из СМС
			cy.get('.payment__submit-button').should('be.enabled'); // кнопка Отправить активна
			cy.get('.payment__submit-button').click(); // нажимаю кнопку Отправить

			cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // окно с надписью Покупка прошла успешно

			cy.get('.payment__adv').click(); // нажимаю на кнопку Вернуться в битву покемонов

			// Покупка для MasterCard
			cy.get('.shop__item.available .shop__button').then(($buttons) => {
				const randomIndex = Math.floor(Math.random() * $buttons.length);
				cy.wrap($buttons[randomIndex]).click(); // скрипт, который выбирает любой из ДОСТУПНЫХ аватаров

				cy.get('.pay__pay-header-v2').contains('Карта'); // окно с надписью Карта
				cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5111111111111118'); // ввожу верный номер карты для MasterCard
				cy.get(':nth-child(1) > .pay_base-input-v2').type('1029'); // ввожу актуальный срок действия карты
				cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ввожу верный CVV код
				cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('sergey makarov'); // ввожу верные имя и фамилию владельца

				cy.get('.pay-btn').should('be.visible'); // кнопка Оплатить видна пользователю
				cy.get('.pay-btn').should('be.enabled'); // кнопка Оплатить кликабельна
				cy.get('.pay-btn').click(); // нажмимаю кнопку Оплатить

				cy.get('.payment__fielheader').contains('Подтверждение покупки'); // окно с надписью Подтверждение покупки
				cy.get('.payment__submit-button').should('be.disabled'); // кнопка Отправить не активна
				cy.get('#cardnumber').type('56456'); // ввожу правильный пароль из СМС
				cy.get('.payment__submit-button').should('be.enabled'); // кнопка Отправить активна
				cy.get('.payment__submit-button').click(); // нажимаю кнопку Отправить

				cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // окно с надписью Покупка прошла успешно

				cy.get('.payment__adv').click(); // нажимаю на кнопку Вернуться в битву покемонов

				// Покупка для Мир
				cy.get('.shop__item.available .shop__button').then(($buttons) => {
					const randomIndex = Math.floor(Math.random() * $buttons.length);
					cy.wrap($buttons[randomIndex]).click(); // скрипт, который выбирает любой из ДОСТУПНЫХ аватаров

					cy.get('.pay__pay-header-v2').contains('Карта'); // окно с надписью Карта
					cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('2111111111111115'); // ввожу верный номер карты для Мир
					cy.get(':nth-child(1) > .pay_base-input-v2').type('1029'); // ввожу актуальный срок действия карты
					cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ввожу верный CVV код
					cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('sergey makarov'); // ввожу верные имя и фамилию владельца

					cy.get('.pay-btn').should('be.visible'); // кнопка Оплатить видна пользователю
					cy.get('.pay-btn').should('be.enabled'); // кнопка Оплатить кликабельна
					cy.get('.pay-btn').click(); // нажмимаю кнопку Оплатить

					cy.get('.payment__fielheader').contains('Подтверждение покупки'); // окно с надписью Подтверждение покупки
					cy.get('.payment__submit-button').should('be.disabled'); // кнопка Отправить не активна
					cy.get('#cardnumber').type('56456'); // ввожу правильный пароль из СМС
					cy.get('.payment__submit-button').should('be.enabled'); // кнопка Отправить активна
					cy.get('.payment__submit-button').click(); // нажимаю кнопку Отправить

					cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // окно с надписью Покупка прошла успешно

					cy.get('.payment__adv').click(); // нажимаю на кнопку Вернуться в битву покемонов

				})
			})
		})
	})
})