import Box from '@mui/material/Box';
import { Editor } from '@monaco-editor/react';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

export const PageEditor: FC = () => {
  const { isPending, isError, data, error } = useQuery({ queryKey: ['page'], queryFn: () => { return ""; } });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="App">
      <Box sx={{ minHeight: 110, flexGrow: 1, maxWidth: 300 }}>
      </Box>
      <Box>
        <Editor
          height="90vh"
          defaultLanguage="html"
          value={data || ""}
          onChange={value => { }} />
      </Box>
    </div>
  );
};
