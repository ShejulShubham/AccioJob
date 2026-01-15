import "./App.css";
import FeatureProvider from "./context/FeatureContext";
import SortProvider from "./context/SortContext";
import ViewProvider from "./context/ViewContext";
import FeatureStatus from "./components/FeatureStatus";
import FeatureToggle from "./components/FeatureToggle";
import FilterPanel from "./components/FilterPanel";

function App() {
  return (
    <div className="app-shell">
      <div className="assignment-card">
        <FeatureProvider>
          <FeatureStatus />
          <br />
          <FeatureToggle />
        </FeatureProvider>

        <hr />
        <SortProvider>
          <ViewProvider>
            <FilterPanel />
          </ViewProvider>
        </SortProvider>

        <hr />
        
      </div>
    </div>
  );
}

export default App;
