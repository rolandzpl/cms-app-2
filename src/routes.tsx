import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { PageList } from './components/PageList';
import { PageView } from './components/PageView';
import { PageEditor } from './components/PageEditor';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <PageList />,
    },
    {
        path: "/pages",
        element: <PageList />,
    },
    {
        path: "/pages/:slug",
        element: <PageView />,
    },
    {
        path: "/pages/:slug/edit",
        element: <PageEditor />,
    },
]);
