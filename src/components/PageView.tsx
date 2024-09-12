import { Editor } from '@monaco-editor/react';
import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Paper, styled } from '@mui/material';
import usePage from '../hooks/usePage';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

export const PageView: FC = () => {
  const params = useParams<{ slug: string }>();
  if (params.slug == null) {
    throw Error("No slug provided");
  }

  const { isLoading, isError, error, data } = usePage(params.slug);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <div style={{ maxHeight: "100vh" }}>
      <Editor
        width="100%"
        height="100vh"
        defaultLanguage="html"
        value={data}
        onChange={value => { }} />
    </div>
  );
};
