import React, { useState } from "react";
//import axios from "axios";

import api from "../utils/api";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  
  const [newColor, setNewColor] = useState({
    color: "",
    code: {hex: ""},
  });

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    api()
      .put(`/api/colors/${colorToEdit.id}`, colorToEdit)
      .then(result => {
          setEditing(false);
          console.log(colorToEdit);
      })
      .catch(error => {
          throw error;
      })
    window.location.reload(false);
  };

  const deleteColor = id => {
    // make a delete request to delete this color
    if (window.confirm("Are you SURE you want to DELETE this color?")) {
      updateColors(colors.filter(color => color.id !== id));

      api()
        .delete(`/api/colors/${id}`)
        .then(result => {
          console.log(`Color number ${id} deleted`);
        })
        .catch(error => {
          throw error;
        })
        window.location.reload(false);
    }
  };

  const handleNewColor = (event) => {
    event.preventDefault()

    api()
      .post("/api/colors", newColor)
      .then(result => {
        console.log(newColor)
      })
      .catch(error => {
        throw(error)
      })
      window.location.reload(false);
  }

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
      <form onSubmit={handleNewColor}>
        <label>
          Color Name: 
          <input onChange={event => 
                  setNewColor({
                    ...newColor,
                    code: {hex: event.target.value}
                  })}
                 value={newColor.code.hex} />
        </label>
      </form>
    </div>
  );
};

export default ColorList;
