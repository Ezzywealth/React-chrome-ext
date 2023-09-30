import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/signin';
import ScreenRecoder from './pages/screenrecoder';
import RecentVideos from './pages/home';
import VideoDetails from './pages/home/[category]/[slug]';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/signin',
		element: <LoginPage />,
	},
	{
		path: '/screenrecorder',
		element: <ScreenRecoder />,
	},
	{
		path: '/recent-videos',
		element: <RecentVideos />,
	},
	{
		path: '/recent-videos/:id',
		element: <VideoDetails />,
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
