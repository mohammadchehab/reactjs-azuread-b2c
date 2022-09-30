import { useState } from "react";

function RatingSelect() {
  const [selected, setSelected] = useState(10);
  const handleChange =  (e) => {
    let value = e.currentTarget.value;
    setSelected(+value);
  };

  const makeSelectors = function () {
    let i = 0;
    let selectors = [];
    for (i = 0; i <= 10; i++) {
      selectors.push(
        <li key={i}>
          <input
            type="radio"
            id={`num${i}`}
            name="rating"
            value={i}
            onChange={handleChange}
            checked={selected === i}
          />
          <label htmlFor={`num${i}`}>{i}</label>
        </li>
      );
    }

    return selectors;
  };

  return <ul className="rating">{makeSelectors()}</ul>;
}

export default RatingSelect;
