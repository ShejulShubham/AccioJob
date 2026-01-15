import { useFeatureContext } from "../context/FeatureContext";

export default function FeatureToggle() {
  const { isAdvanced, toggleAdvancedMode } = useFeatureContext();

  return (
    <button onClick={toggleAdvancedMode}>
      Switch to {isAdvanced ? "Normal" : "Advanced"} Mode
    </button>
  );
}
