import * as React from "react";
import styles from "./App/App.module.css";
import { sortBy } from "lodash";

const SORTS = {
  NONE: (list) => list,
  TITLE: (list) => sortBy(list, "title"),
  AUTHOR: (list) => sortBy(list, "author"),
  COMMENT: (list) => sortBy(list, "num_comments").reverse(),
  POINT: (list) => sortBy(list, "points").reverse(),
};

const List = React.memo(({ list, onRemoveItem }) => {
  const [sort, setSort] = React.useState({
    sortKey: "NONE",
    isReverse: false,
  });

  const handleSort = (sortKey) => {
    const isReverse = sort.sortKey === sortKey && !sort.isReverse;
    setSort({ sortKey: sortKey, isReverse: isReverse });
  };

  const sortFunction = SORTS[sort.sortKey];
  const sortedList = sort.isReverse
    ? sortFunction(list).reverse()
    : sortFunction(list);

  return (
    <ul>
      <li style={{ display: "flex" }}>
        <span style={{ width: "40%" }}>
          <button
            className={styles.button}
            type="button"
            onClick={() => handleSort("TITLE")}
          >
            Title
          </button>
        </span>
        <span style={{ width: "30%" }}>
          <button
            className={styles.button}
            type="button"
            onClick={() => handleSort("AUTHOR")}
          >
            Author
          </button>
        </span>
        <span style={{ width: "10%" }}>
          <button
            className={styles.button}
            type="button"
            onClick={() => handleSort("COMMENT")}
          >
            Comments
          </button>
        </span>
        <span style={{ width: "10%" }}>
          <button
            className={styles.button}
            type="button"
            onClick={() => handleSort("POINT")}
          >
            Points
          </button>
        </span>
        <span style={{ width: "10%" }}>Actions</span>
      </li>

      {sortedList.map((item) => {
        return (
          <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
        );
      })}
    </ul>
  );
});

const Item = ({ item, onRemoveItem }) => {
  return (
    <li className={styles.item}>
      <span style={{ width: "40%" }}>
        <a href={item.url}>{item.title}</a>
      </span>
      <span style={{ width: "30%" }}>{item.author}</span>
      <span style={{ width: "10%" }}>{item.num_comments}</span>
      <span style={{ width: "10%" }}>{item.points}</span>
      <span style={{ width: "10%" }}>
        <button
          type="button"
          onClick={() => onRemoveItem(item)}
          className={`${styles.button} ${styles.buttonSmall}`}
        >
          Dismiss
        </button>
      </span>
    </li>
  );
};

export { List, Item };
