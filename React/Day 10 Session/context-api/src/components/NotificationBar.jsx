import { useNotificationContext } from "../context/NotificationProvider";

export default function NotificationBar() {
  const { message } = useNotificationContext();

  if (!message) {
    return;
  }

  return (
    <>
      <h2>{message}</h2>
    </>
  );
}
