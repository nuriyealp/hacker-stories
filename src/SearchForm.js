import * as React from "react";
import { InputWithLabel } from "./InputWithLabel";
import styles from "./App/App.module.css";

const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => {
  return (
    <form onSubmit={onSearchSubmit} className={styles.searchForm}>
      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={onSearchInput}
      >
        Search:
      </InputWithLabel>

      <button type="submit" disabled={!searchTerm} className={styles.button}>
        Submit
      </button>
    </form>
  );
};
export { SearchForm };
