import { useState, useEffect } from 'react';
import Card from './Card';
import getImage from '../getImage';
const CARDS = [
  'Steve',
  'Alex',
  'Herobrine',
  'Golem',
  'Slime',
  'Villager',
  'Creeper',
  'Skeleton',
  'Zombie',
  'Enderman',
  'Breeze',
  'Spider',
  'Bogged',
  'Husk',
  'Blaze',
  'Ghast',
  'LavaSlime',
  'CaveSpider',
  'PigZombie',
  'WSkeleton',
  'Pig',
  'Bee',
  'Allay',
  'Sheep',
  'Chicken',
  'MushroomCow',
  'Cow',
  'Ocelot',
  'Grass',
  'Stone',
  'Cobblestone',
  'Bedrock',
  'Pumpkin',
  'OakLog',
  'Melon',
  'Cactus',
  'Cake',
  'Chest',
  'Furnace',
  'Bookshelf',
];

function Cards({ resetGame, setScore, score }) {
  const [selected, setSelected] = useState([]);
  const [cards, setCards] = useState([]);

  console.log('selected:', selected);
  async function shuffleCards() {
    const unselected = CARDS.filter((value) => {
      return !selected.includes(value);
    });

    if (unselected.length === 0) {
      console.log('All cards have been selected.');
      return;
    }

    // Atleast one new card should show.
    const newCard = unselected[Math.floor(Math.random() * unselected.length)];

    // Randomise 8 cards
    const randomCards = [];
    while (randomCards.length < 8) {
      const card = CARDS[Math.floor(Math.random() * CARDS.length)];
      if (!randomCards.includes(card) && card !== newCard) {
        randomCards.push(card);
      }
    }

    // Randomise new card position
    const position = Math.floor(Math.random() * 9);
    const shuffledCards = [
      ...randomCards.slice(0, position),
      newCard,
      ...randomCards.slice(position),
    ];

    console.log(shuffledCards);
    // Update cards
    const imageCards = await Promise.all(
      shuffledCards.map(async (card) => {
        const imageUrl = await getImage(card);
        return imageUrl;
      })
    );
    setCards(imageCards);
  }

  useEffect(() => {
    shuffleCards();
  }, []);

  async function handleClick(card) {
    const cardId = card.target.alt;
    if (selected.includes(cardId)) {
      resetGame();
      setSelected([]);
    } else {
      setScore(score + 1);
      setSelected((prevSelected) => [...prevSelected, cardId]);
    }
    shuffleCards();
  }

  return (
    <>
      <div className="gameboard">
        <div className="card-grid">
          {cards
            ? cards.map((card, index) => {
                return <Card key={index} image={card} handleClick={handleClick} />;
              })
            : ''}
        </div>
      </div>
    </>
  );
}

export default Cards;
