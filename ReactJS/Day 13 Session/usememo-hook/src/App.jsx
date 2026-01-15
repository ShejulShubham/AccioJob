import "./App.css";
import FilteredUser from "./components/FilteredUser";
import GenerateReport from "./components/GenerateReport";
import LogAnalyzer from "./components/LogAnalyzer";
import ProductSearch from "./components/ProductSearch";
import SignupPreview from "./components/SignupPreview";
import StudentDetails from "./components/StudentDetails";
import UseMemo from "./components/UseMemo";

function App() {
  return (
    <div className="app-shell">
      <div className="assignment-card">
        <UseMemo />

        <hr />

        <FilteredUser />

        <hr />

        <SignupPreview />

        <hr />

        <GenerateReport />

        <hr />

        <StudentDetails />

        <hr />

        <ProductSearch />

        <hr />

        <LogAnalyzer />
      </div>
    </div>
  );
}

export default App;
