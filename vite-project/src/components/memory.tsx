import { useState } from "react";
import { sculptureList } from "../MainConcept/data";

const GalleryMemory = () => {
  const [ index, setIndex ] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleClickNext = () => {
    setIndex(index + 1);
  }
  const handleClickBefore = () => {
    setIndex(index - 1);
  }

  const handleMoreClick = () => {
    setShowMore(!showMore)
  }
  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleClickBefore}>Before</button>
      <button onClick={handleClickNext}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>

      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  );
}

export default GalleryMemory
