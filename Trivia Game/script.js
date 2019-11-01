
const cards = [
{
  image: 'img/coluseum.jpg',
  back: 'Colosseum, Rome',
  location: 'Italy',
  flipped: false
},
{
  image: 'img/Eiffel-Tower.jpg',
  back: 'Eiffel Tower, Paris',
  location: 'France',
  flipped: false
},
{
  image: 'img/Arch.jpg',
  back: 'Arc de Triomphe, Paris',
  location: 'France',
  flipped: false
},
{
  image: 'img/Big-Ben.jpg',
  back: "Elizabeth 'Big Ben' Tower, London",
  location: 'England',
  flipped: false
},
{
  image: 'img/Louvree.jpg',
  back: 'Louvre Museum, Paris',
  location: 'France',
  flipped: false
},
{
  image: 'img/Pisa.jpg',
  back: 'Leaning Tower, Pisa',
  location: 'Italy',
  flipped: false
},
{
  image: 'img/Sagrada.jpg',
  back: 'Sagrada Família, Barcelona',
  location: 'Spain',
  flipped: false
},
{
  image: 'img/Taj.jpg',
  back: 'Taj Mahal, India',
  location: 'India',
  flipped: false
},
{
  image: 'img/Basil.jpg',
  back: "St. Basil's Cathedral, Moscow",
  location: 'Russia',
  flipped: false
},
{
  image: 'img/Duomo.jpg',
  back: 'Duomo, Florence',
  location: 'Italy',
  flipped: false
},
{
  image: 'img/Empire.jpg',
  back: 'Empire State Building, New York',
  location: 'USA',
  flipped: false
},
{
  image: 'img/Ponte.jpg',
  back: 'Ponte Vecchio, Florence ',
  location: 'Italy',
  flipped: false
},
{
  image: 'img/dame.png',
  back: 'Notre-Dame, Paris',
  location: 'France',
  flipped: false
},
{
  image: 'img/mayor.png',
  back: 'Plaza Mayor, Madrid',
  location: 'Spain',
  flipped: false
},
{
  image: 'img/Siena.png',
  back: 'Piazza del Campo, Siena',
  location: 'Italy',
  flipped: false
},
{
  image: 'img/avila-wall.png',
  back: 'The Walls of Ávila, Ávila',
  location: 'Spain',
  flipped: false
},
{
  image: 'img/tower-bridge.jpg',
  back: 'Tower Bridge, London',
  location: 'England',
  flipped: false
},
{
  image: 'img/venice.png',
  back: "Doge's Palace, Venice",
  location: 'Italy',
  flipped: false
},
{
  image: 'img/vatican.png',
  back: "St. Peter's Square, Vatican City",
  location: 'Italy',
  flipped: false
},
{
  image: 'img/segovia.png',
  back: 'Aqueduct, Segovia',
  location: 'Spain',
  flipped: false
}
];

const trivia = new Vue({
  el: '#triviaApp',
  data: {
    cards: cards,
    location: ''
  },
  methods: {
    toggleSide: function(card){
      card.flipped = !card.flipped
    },
    filterList: function(){
      this.location = event.target.value;
      console.log(event.target.value);
    }
  },
  computed: {
    selectList: function(){
      const selection = [];
      this.cards.forEach(function(choice){
        if(!selection.includes(choice.location)){
          selection.push(choice.location);
        }
      });
      return selection;
    }
  }

});
