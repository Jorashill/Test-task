describe('UseInsider.com Career page automation', () => {
    it('Should filter Quality Assurance jobs in Istanbul and check job details', () => {
      // 1. Visit https://useinsider.com/ and check Insider home page is opened or not
      cy.visit('https://useinsider.com/');
      cy.title().should('include', 'AI-Powered Growth Management Platform | Insider');
  
      // 2. Select “More” menu in navigation bar, select “Careers” and check Career page, its Locations, Teams and Life at Insider blocks are opened or not
      cy.get('.header-navigation')
        .contains('More')
        .click();
      cy.get('.header-dropdown')
        .contains('Careers')
        .click();
      cy.get('.careers-locations')
        .should('be.visible');
      cy.get('.careers-teams')
        .should('be.visible');
      cy.get('.careers-life')
        .should('be.visible');
  
      // 3. Click “See All Teams”, select Quality Assurance, click “See all QA jobs”, filter jobs by Location - Istanbul, Turkey and department - Quality Assurance, check presence of jobs list
      cy.contains('See All Teams')
        .click();
      cy.get('.teams-list')
        .contains('Quality Assurance')
        .click();
      cy.contains('See all QA jobs')
        .click();
      cy.get('#location-select')
        .select('Istanbul, Turkey');
      cy.get('#department-select')
        .select('Quality Assurance');
      cy.get('.job-card')
        .should('be.visible');
  
      // 4. Check that all jobs’ Position contains “Quality Assurance”, Department contains “Quality Assurance”, Location contains “Istanbul, Turkey” and “Apply Now” button
      cy.get('.job-card').each(($card) => {
        cy.wrap($card).within(() => {
          cy.get('.job-card-title')
            .should('contain', 'Quality Assurance');
          cy.get('.job-card-department')
            .should('contain', 'Quality Assurance');
          cy.get('.job-card-location')
            .should('contain', 'Istanbul, Turkey');
          cy.get('.job-card-apply-btn')
            .should('contain', 'Apply Now');
        });
      });
  
      // 5. Click “Apply Now” button and check that this action redirects us to Lever Application form page
      cy.contains('Apply Now')
        .first()
        .click();
      cy.url().should('include', 'lever.co');
    });
  });
