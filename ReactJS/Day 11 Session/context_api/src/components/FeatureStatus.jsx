import { useFeatureContext } from "../context/FeatureContext";

export default function FeatureStatus() {
  const { isAdvanced } = useFeatureContext();

  return (
    <>
      <h1>{isAdvanced ? "Advanced" : "Normal"} Mode is Enabled!</h1>
    </>
  );
}
