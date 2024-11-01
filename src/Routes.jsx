import React from "react";
import { useRoutes } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ExamplesPortfolio from './pages/ExamplesPortfolio'; // Sem .jsx no final
import ExamplesPortfolioOne from './pages/ExamplesPortfolioOne';


const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "*", element: <NotFound /> },
        {
            path: "examplesportfolio",
            element: <ExamplesPortfolio />,
        },
        {
            path: "examplesportfolioone",
            element: <ExamplesPortfolioOne />
        },
    ]);

    return element;
};

export default ProjectRoutes;