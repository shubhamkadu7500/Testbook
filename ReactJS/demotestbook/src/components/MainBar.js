import React from 'react'

export default function MainBar() {
    const stylep= {
        color:"red",
        background: "yellow",
        border:"2px solid red",
    }
  return (
    <div>
        <p style={stylep}>this is paragraph and having javascript object style css. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus illum nostrum natus maiores debitis doloribus numquam doloremque mollitia animi sequi!</p>
        <h1 style={{background:"red",color:"yellowgreen"}}>inline style, this is heading tag</h1>
      <form>
        <fieldset disabled>
          <legend>Disabled fieldset example</legend>
          <div classNameNameName="mb-3">
            <label for="disabledTextInput" classNameNameName="form-label">
              Disabled input
            </label>
            <input
              type="text"
              id="disabledTextInput"
              classNameNameName="form-control"
              placeholder="Disabled input"
            />
          </div>
          <div classNameNameName="mb-3">
            <label for="disabledSelect" classNameNameName="form-label">
              Disabled select menu
            </label>
            <select id="disabledSelect" classNameNameName="form-select">
              <option>Disabled select</option>
            </select>
          </div>
          <div classNameNameName="mb-3">
            <div classNameNameName="form-check">
              <input
                classNameNameName="form-check-input"
                type="checkbox"
                id="disabledFieldsetCheck"
                disabled
              />
              <label
                classNameNameName="form-check-label"
                for="disabledFieldsetCheck"
              >
                Can't check this
              </label>
            </div>
          </div>
          <button type="submit" classNameNameName="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

