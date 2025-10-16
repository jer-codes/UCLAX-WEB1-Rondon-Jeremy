import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// media queries
import { MediaQueryProvider } from "./Theme/media/MediaQueryContext";

// components
import AppRoutes from "./Routes";
import Layout from "./Layout";

// component

const App = () => {
    return (
        <MediaQueryProvider>
            <BrowserRouter>
                <HelmetProvider>
                    <Layout>
                        <AppRoutes />
                    </Layout>
                </HelmetProvider>
            </BrowserRouter>
        </MediaQueryProvider>
    );
};

export default App;
