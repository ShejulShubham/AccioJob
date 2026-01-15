import { useNotificationContext } from "../context/NotificationProvider";

export default function NotificationControl() {
  const { showMessage, clearMessage, message } = useNotificationContext();

  return (
    <>
      {!message && (
        <>
          <button onClick={() => showMessage()}>
            Show Message
          </button>
          <button
            onClick={() => {
              showMessage("Death will be the last thing we will meet!");
            }}
          >
            Show Quote
          </button>
        </>
      )}
      {message && <button onClick={clearMessage}>Clear Message</button>}
    </>
  );
}
