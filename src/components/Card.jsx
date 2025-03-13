function Card({ image, handleClick }) {
  const imageAlt = image ? image.split('MHF_')[1] : 'default';
  return (
    <>
      <div className="card" onClick={handleClick}>
        <img src={image} alt={imageAlt || 'image'} />
      </div>
    </>
  );
}

export default Card;
