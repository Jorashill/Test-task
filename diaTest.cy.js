describe("DIIA Test", () => {
    it("performs the specified scenario", () => {
      const email = 'pishi_gdu@ukr.net';
      // 1. Відкрити головну сторінку
      cy.visit("https://diia.gov.ua");
      cy.get(".btn.btn-fill.cookies-1_btn.cookies-1_btn-1").click();
      // 2. Ввести "народження дитини" у поле пошуку
      cy.get('label > .input').type("народження дитини");
      // 3. Натиснути піктограму пошуку
      cy.get('.form-group_inner > .btn').click();
      // 4. Натиснути "Послуги" в розділі "За типом матеріалу"
      cy.contains("За типом матеріалу").parent().contains("Послуги").click();
      // 5. Обрати "Допомога при народженні дитини" з відфільтрованого списку
      cy.contains("Допомога при народженні дитини").click();
      // 6. Знайти "Відправити на email" та натиснути
      cy.contains("Відправити на email").click();
      cy.wait(1000);
      // 7. Заповнити поле "Твій email" і натиснути кнопку "Відправити інструкцію"
      cy.get('.input-border-gradient > .input').type(email);
      cy.get('#modal-send-email-btn').click()
      // 8. Натиснути "На головну" у новому діалоговому вікні
      cy.window().then(win => {
        win.location.href = "https://diia.gov.ua";
      });
    });
  });