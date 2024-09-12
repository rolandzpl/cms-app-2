import React, { FC } from 'react';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { createRoot } from 'react-dom/client';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import './index.css';
import { AppConfigurationProvider } from './providers/appConfigurationProvider';
import { PageProvider } from './providers/PageProvider';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import PersistentDrawerLeft from './components/PersistentDrawerLeft';

const queryClient = new QueryClient()

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

type State = {
  data?: HNResponse;
  isLoading: boolean;
  error?: string;
}

type HNResponse = {
  hits: {
    title: string;
    objectID: string;
    url: string;
  }[]
};

type Action =
  | { type: "load-page-list" }
  | { type: "load-page", results: HNResponse }
  | { type: "create-new-page" }
  | { type: "amend-page" }
  | { type: "amend-page-content", slug: string, content: string }
  | { type: "failure", error: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'load-page-list':
      return { isLoading: true };
    case 'load-page':
      return { isLoading: false, data: action.results };
    case 'failure':
      return { isLoading: false, error: action.error };
    default:
      return { isLoading: false };
  }
}

root.render(
  <React.StrictMode>
    <AppConfigurationProvider
      configuration={{
        apiUrl: "http://localhost:5240/api"
      }}
    >
      <QueryClientProvider client={queryClient}>
        <PageProvider>
          <PersistentDrawerLeft>
            <RouterProvider router={router} />
          </PersistentDrawerLeft>
        </PageProvider>
      </QueryClientProvider>
    </AppConfigurationProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
