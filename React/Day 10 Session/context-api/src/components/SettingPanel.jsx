import { useLayoutContext } from "../context/LayoutProvider";
import { useFontContext } from "../context/FontProvider";

export default function SettingPanel() {
  const { fontSize, increaseFontSize } = useFontContext();
  const { layout, changeLayout } = useLayoutContext();

  return (
    <>
      <h2>Current Font size: {fontSize}</h2>
      <button onClick={increaseFontSize}>Increase Font Size</button>

      <h2>Current Layout mode: {layout}</h2>
      <button onClick={changeLayout}>Change Layout</button>
    </>
  );
}
