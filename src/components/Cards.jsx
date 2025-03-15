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
  'Wolf',
  'Strider',
];

function Cards({ gameOver, setGameOver, resetGame, setScore, score }) {
  const [selected, setSelected] = useState([]);
  const [cards, setCards] = useState([]);
  const [imageCards, setImageCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Pre-cache images on component mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const images = await Promise.all(
          CARDS.map(async (id) => {
            const imageUrl = await getImage(id);
            return { [id]: imageUrl };
          })
        );
        const imageMap = Object.assign({}, ...images);
        setImageCards(imageMap);
      } catch (error) {
        console.error('Error fetching images', error);
      }
    };
    fetchImages();
    setIsLoading(false);
  }, []);

  function shuffleCards() {
    const unselected = CARDS.filter((value) => {
      return !selected.includes(value);
    });

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
    setCards(shuffledCards);
  }

  useEffect(() => {
    if (score === CARDS.length) {
      setGameOver(true);
      setSelected([]);
      return;
    }
    shuffleCards();
  }, [score, setGameOver]);

  function handleClick(card) {
    const cardId = card.target.alt;
    if (selected.includes(cardId)) {
      resetGame();
      setSelected([]);
    } else {
      setScore(score + 1);
      setSelected((prevSelected) => [...prevSelected, cardId]);
    }
  }

  return (
    <>
      <div className="gameboard">
        <div className={`card-grid ${gameOver ? 'inactive' : ''}`}>
          {!isLoading
            ? cards.map((card, index) => {
                return <Card key={index} image={imageCards[card]} handleClick={handleClick} />;
              })
            : 'Loading...'}
        </div>
      </div>
    </>
  );
}

export default Cards;
