import CartProvider from "./CartProvider";
import LanguageProvider from "./LanguageProvider";
import ThemeProvider from "./ThemeProvider";
import AuthProvider from "./AuthProvider";
import CounterProvider from "./CounterProvider";
import NotificationProvider from "./NotificationProvider";

export default function CombinedProvider({ children }) {
  return (
    <CounterProvider>
      <ThemeProvider>
        <AuthProvider>
          <LanguageProvider>
            <NotificationProvider>
              <CartProvider>{children}</CartProvider>
            </NotificationProvider>
          </LanguageProvider>
        </AuthProvider>
      </ThemeProvider>
    </CounterProvider>
  );
}
