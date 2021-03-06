import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" },
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors, "From ColorList");
  
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [newColor, setNewColor] = useState({
    color: "",
    code: {hex: ""},
  });


  const editColor = color => {
    console.log(colorToEdit);
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    axiosWithAuth()
      .put(`/colors/${colorToEdit.id}`, colorToEdit)
      .then(res => {
        updateColors(colors.map(color => 
          color.id === res.data.id ? res.data : color))
      })
      .catch(err => {
        console.log(err, "Error updating the color")
        throw(err);
      })
    };


  const deleteColor = color => {
    // make a delete request to delete this color
    //if (window.confirm("Are you absolutely SURE you want to DELETE this color?")) {
      
      axiosWithAuth()
        .delete(`/colors/${color.id}`)
        .then(res => {
          console.log(res)
          updateColors(colors.filter(color => color.id !== res.data))
        })
        .catch(err => {
          console.log(err, "Error deleting the color")
          throw(err);
        })
      };

  const handleNewColor = (event) => {
    event.preventDefault();

    axiosWithAuth()
      .post("/colors", newColor)
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error);
        throw(error);
      })
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
                    deleteColor(color);
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
          <input onChange={event => setNewColor({
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