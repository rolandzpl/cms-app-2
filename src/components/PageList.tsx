import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FC } from 'react';
import { Button, List, ListItem, ListItemText, Paper, styled, Switch, Typography } from '@mui/material';
import { NavLink, Outlet, useNavigate, useRoutes } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import usePages from '../hooks/usePages';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

export const PageList: FC = () => {
  const { data, isLoading, isError, error } = usePages();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <Grid container spacing={0}>
      <Grid id="grid1" xs={4} display="flex">
        <Item>
          <List>
            {data?.map((pg, idx) => (
              <ListItem key={idx}>
                <ListItemText>
                  <Typography variant="h6">
                    <NavLink className={isActive => isActive ? "bold" : ""} to={`/pages/${pg.slug}`}>{pg.title}</NavLink>
                  </Typography>
                  <Typography variant="body1">{pg.description}</Typography>
                  {(idx < data.length - 1) && (<hr />)}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Item>
      </Grid>
    </Grid>
  );
};
