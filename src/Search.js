import React from "react";
import "./styles.css";

export default function Search() {
  return (
    <div className="col-10 padding">
      <form>
        <input
          className="form-control search"
          type="search"
          placeholder="🔍 Search"
          autoComplete="off"
        />
      </form>
    </div>
  );
}
