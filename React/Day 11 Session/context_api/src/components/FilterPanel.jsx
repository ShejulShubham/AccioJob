import { useViewContext } from "../context/ViewContext";
import { useSortContext } from "../context/SortContext";

export default function FilterPanel() {
  const { viewMode, toggleView } = useViewContext();
  const { sortOrder, toggleSort } = useSortContext();

  return (
    <>
      <h2>Current Sort Order: {sortOrder}</h2>
      <button onClick={toggleSort}>
        Change Sort Order to{" "}
        {sortOrder === "ascending" ? "descending" : "ascending"}
      </button>
      <br />
      <h2>Current View Mode: {viewMode}</h2>
      <button onClick={toggleView}>
        Change View Mode to {viewMode === "compact" ? "expanded" : "compact"}
      </button>
    </>
  );
}
