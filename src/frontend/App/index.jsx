import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// components
import AppRoutes from "./Routes";
import Layout from "./Layout";

// component

const App = () => {
    return (
        <BrowserRouter>
            <HelmetProvider>
                <Layout>
                    <AppRoutes />
                </Layout>
            </HelmetProvider>
        </BrowserRouter>
    );
};

export default App;
