import { Outlet } from "react-router-dom";
import { NotificacaoDiaProvider } from "../context/NotificacaoDiaContext";
import { ToastNotificacaoDia } from "../components/ToastNotificacaoDia";
 
export function LayoutProtegido() {
  return (
    <NotificacaoDiaProvider>
      <Outlet />
      <ToastNotificacaoDia />
    </NotificacaoDiaProvider>
  );
}