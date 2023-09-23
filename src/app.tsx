import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./presentation/styles/theme";
import MainLayout from "./presentation/layouts/MainLayout";
import RootView from "./presentation/view/root/RootView";
import CreateProductView from "./presentation/view/product/createProduct/CreateProductView";
import "./presentation/styles/base.scss";

const DashboardCreateProduct = () => {
  return <div>Dashboard Create Product </div>;
};

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootView />} />
            <Route path="/dashboard" element={<CreateProductView />} />
            <Route
              path="/dashboard:create"
              element={<DashboardCreateProduct />}
            />
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </ThemeProvider>
  );
}
