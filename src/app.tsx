import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./presentation/styles/theme";
import MainLayout from "./presentation/layouts/MainLayout";
import RootView from "./presentation/view/root/RootView";
import CreateProductView from "./presentation/view/product/createProduct/CreateProductView";
import "./presentation/styles/base.scss";
import AsignProductView from "./presentation/view/product/asigneProduct/asignProductView";
import { SnackNotifier } from "./utilities/SnackbarNotification";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./aplication/redux/store";
import AsigneExclusiveContent from "./presentation/view/product/asigneExclusiveContent/AsigneExclusiveContentView";

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<RootView />} />
              <Route path="/dashboard" element={<CreateProductView />} />
              <Route path="/asignar-producto" element={<AsignProductView />} />
              <Route
                path="/exclusive-content"
                element={<AsigneExclusiveContent />}
              />
            </Routes>
          </BrowserRouter>
        </MainLayout>
        <SnackNotifier />
        <ToastContainer
          position="top-left"
          closeButton
          hideProgressBar
          draggableDirection="x"
          theme="light"
        />
      </ThemeProvider>
    </Provider>
  );
}
