describe("DIIA Test", () => {
    it("performs the specified scenario", () => {
      // 1. Відкрити головну сторінку
      cy.visit("https://diia.gov.ua");
  
      // 2. Ввести "народження дитини" у поле пошуку
      cy.get("input[name='search']").type("народження дитини");
  
      // 3. Натиснути піктограму пошуку
      cy.get(".header__search-icon").click();
  
      // 4. Натиснути "Послуги" в розділі "За типом матеріалу"
      cy.contains("За типом матеріалу").parent().contains("Послуги").click();
  
      // 5. Обрати "Допомога при народженні дитини" з відфільтрованого списку
      cy.contains("Допомога при народженні дитини").click();
  
      // 6. Знайти "Відправити на email" та натиснути
      cy.contains("Відправити на email").click();
  
      // 7. Заповнити поле "Твій email" і натиснути кнопку "Відправити інструкцію"
      cy.get("input[name='email']").type("pishi_gdu@ukr.net");
      cy.contains("Відправити інструкцію").click();
  
      // 8. Натиснути "На головну" у новому діалоговому вікні
      cy.window().then(win => {
        win.location.href = "https://diia.gov.ua";
      });
    });
  });