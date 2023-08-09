import React from "react";
import "./ImageLinkForm.css";
function ImageLinkForm({ onInputChange, onButtonSubmit }) {
  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detect faces in your pictures. Give it a try"}
      </p>
      <div className="center">
        <div className="form pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            name=""
            id=""
            onChange={onInputChange}
            placeholder="paste your link here"
          />
          <button
            onClick={onButtonSubmit}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          >
            Detect{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
