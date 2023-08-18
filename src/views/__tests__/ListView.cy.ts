import ListView from '../ListView.vue'

describe('ListView', () => {
  it('playground', () => {
    cy.mount(ListView, {
      props: {
        spots: [
          {
            id: 1,
            name: 'Le Bouquet Wagram',
            address: '145 Av. De Wagram',
            postal_code: 75017,
            city: 'Paris',
            opinion: 'Une terrasse chauffée, possibilité de rentrer avec une poussette simplement',
            lat: 48.88505,
            lng: 2.303
          },
          {
            id: 2,
            name: 'La Felicita',
            address: '5 Parvis Alan Turing',
            postal_code: 75013,
            city: 'Paris',
            opinion: "Des saveurs, de l'espace en masse!",
            lat: 48.834702,
            lng: 2.37048
          }
        ]
      }
    })
  })

  it('renders properly', () => {
    cy.mount(ListView, {
      props: {
        spots: [
          {
            id: 1,
            name: 'Le Bouquet Wagram',
            address: '145 Av. De Wagram, 75017 Paris',
            opinion: 'Une terrasse chauffée, possibilité de rentrer avec une poussette simplement',
            lat: 48.88505,
            lng: 2.303
          },
          {
            id: 2,
            name: 'La Felicita',
            address: '5 Parvis Alan Turing, 75013 Paris',
            opinion: "Des saveurs, de l'espace en masse!",
            lat: 48.834702,
            lng: 2.37048
          }
        ]
      }
    })
    cy.get('h2').should('contain', 'Le Bouquet Wagram')
    cy.get('a').click({ multiple: true })
  })
})
