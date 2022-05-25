import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    console.log("text", text);
    getQuery();
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
          autoFocus
          onChange={(e) => onChange(e.target.value)}
        />
      </form>{" "}
    </section>
  );
};

export default Search;
