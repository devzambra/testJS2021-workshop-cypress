/// <reference types="cypress" />
import { addItem } from '../../support/utils'
beforeEach(() => {
  cy.visit('/')
})

it('loads', () => {
  // application should be running at port 3000
  cy.contains('h1', 'todos')
})

// IMPORTANT ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
// remember to manually delete all items before running the test
// IMPORTANT ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

it('adds two items', () => {
  addItem('first todo')
  addItem('second todo')
  cy.get('li.todo').should('have.length', 2)
})

it('can mark an item as completed', () => {
  addItem('first todo')
  addItem('second todo')
  cy.get('li.todo')
    .should('have.length', 2)
    .first()
    .find('.toggle')
    .click()
  cy.get('li.todo')
    .should('have.length', 2)
    .first()
    .should('have.class', 'completed')
  cy.get('li.todo')
    .should('have.length', 2)
    .eq(1)
    .should('not.have.class', 'completed')
  // adds a few items
  // marks the first item as completed
  // confirms the first item has the expected completed class
  // confirms the other items are still incomplete
})

it('can delete an item', () => {
  addItem('first todo')
  addItem('second todo')
  cy.get('li.todo')
    .should('have.length', 2)
    .first()
    .find('button.destroy')
    .click({ force: true })
  cy.get('li.todo').should('have.length', 1)
  cy.contains('li.todo', 'first todo').should('not.exist')
  cy.contains('li.todo', 'second todo')
  cy.reload()
  cy.get('li.todo').should('have.length', 1)
  // adds a few items
  // deletes the first item
  // use force: true because we don't want to hover
  // confirm the deleted item is gone from the dom
  // confirm the other item still exists
})

it('can add many items', () => {
  const N = 5
  for (let k = 0; k < N; k += 1) {
    addItem(`todo ${k + 1}`)
    // add an item
    // probably want to have a reusable function to add an item!
  }
  cy.get('li.todo').should('have.length', N)
  // check number of items
})

it('adds item with random text', () => {
  // use a helper function with Math.random()
  // or Cypress._.random() to generate unique text label
  // add such item
  // and make sure it is visible and does not have class "completed"
})

it('starts with zero items', () => {
  // check if the list is empty initially
  //   find the selector for the individual TODO items
  //   in the list
  //   use cy.get(...) and it should have length of 0
  //   https://on.cypress.io/get
})

it('does not allow adding blank todos', () => {
  // https://on.cypress.io/catalog-of-events#App-Events
  cy.on('uncaught:exception', () => {
    // check e.message to match expected error text
    // return false if you want to ignore the error
  })

  // try adding an item with just spaces
})

// what a challenge?
// test more UI at http://todomvc.com/examples/vue/
