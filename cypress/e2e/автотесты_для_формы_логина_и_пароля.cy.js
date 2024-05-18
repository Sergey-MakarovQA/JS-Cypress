describe('Тестирование login.qa.studio', function () {

    it('Позитивный кейс авторизации', function () {
        cy.clearCookies(); // почистил куки
        cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru'); // ввел верную почту
         cy.get('#loginButton').should('be.disabled'); // кнопка Войти некликабельная

         cy.get('#pass').type('iLoveqastudio1');  // ввел верный пароль
         cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельная

         cy.get('#loginButton').click(); // нажал на кнопку войти

         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // окно с надписью Авторизация прошла успешно

         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
     })


     it('Кейс на проверку логики восстановления пароля', function () {
        cy.clearCookies(); // почистил куки
        cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').should('be.visible'); // кнопка забыли пароль видна пользователю
         cy.get('#forgotEmailButton').click(); // нажал на кнопку забыли пароль

         cy.get('#forgotForm > .header').should('be.visible'); // текст виден пользователю
         cy.get('#forgotForm > .header').contains('Восстановите пароль'); // окно с надписью Восстановите пароль

         cy.get('#mailForgot').type('german@dolnikov.ru'); // ввел верную почту

         cy.get('#restoreEmailButton').should('be.visible'); // кнопка Отправить код видна пользователю
         cy.get('#restoreEmailButton').click(); // нажал на кнопку Отправить код

         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // окно с надписью Успешно отправили пароль на e-mail

         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
     })


     it('Негативный кейс авторизации. НЕ правильный пароль', function () {
        cy.clearCookies(); // почистил куки
        cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru'); // ввел верную почту
         cy.get('#loginButton').should('be.disabled'); // кнопка войти некликабельная

         cy.get('#pass').type('iLoveqastudio2');  // ввел неверный пароль
         cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельная

         cy.get('#loginButton').click(); // нажал на кнопку войти

         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // окно с надписью Такого логина или пароля нет

         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
     })


     it('Негативный кейс авторизации. НЕ привильный логин', function () {
        cy.clearCookies(); // почистил куки
        cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germanandsergey@dolnikovmakarov.ru'); // ввел неверную почту
         cy.get('#loginButton').should('be.disabled'); // кнопка войти некликабельная

         cy.get('#pass').type('iLoveqastudio1');  // ввел верный пароль
         cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельная

         cy.get('#loginButton').click(); // нажал на кнопку войти

         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // окно с надписью Такого логина или пароля нет

         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
     })


     it('Негативный кейс авторизации. Логин без @', function () {
        cy.clearCookies(); // почистил куки
        cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('germandolnikov.ru'); // ввел почту без @
         cy.get('#loginButton').should('be.disabled'); // кнопка войти некликабельная

         cy.get('#pass').type('iLoveqastudio1');  // ввел верный пароль
         cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельная

         cy.get('#loginButton').click(); // нажал на кнопку войти

         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // окно с надписью Нужно исправить проблему валидации

         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
     })


     it('Кейс проверки на приведение к строчным буквам в логине', function () {
        cy.clearCookies(); // почистил куки
        cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввел верную почту со строчными и заглавными буквами
         cy.get('#loginButton').should('be.disabled'); // кнопка войти некликабельная

         cy.get('#pass').type('iLoveqastudio1');  // ввел верный пароль
         cy.get('#loginButton').should('be.enabled'); // кнопка войти кликабельная

         cy.get('#loginButton').click(); // нажал на кнопку войти

         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // окно с надписью Авторизация прошла успешно

         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик виден пользователю
     })
 })