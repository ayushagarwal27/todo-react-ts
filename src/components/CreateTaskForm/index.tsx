import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import TaskTitleField from './TaskTitleField';
import TaskDescriptionField from './TaskDescriptionField';
import TaskDateField from './TaskDateField';
import TaskSelectField from './TaskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';

const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='flex-start'
      width='100%'
      px={4}
      my={6}
    >
      <Typography mb={2} component='h2' variant='h6'>
        Create A Task
      </Typography>

      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField value={new Date()} />
        <Stack direction='row' sx={{ width: '100%' }} spacing={2}>
          <TaskSelectField
            label='Status'
            name='status'
            items={[
              { value: Status.todo, label: Status.todo.toUpperCase() },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            label='Priority'
            name='priority'
            items={[
              { value: Priority.low, label: Priority.low },
              { value: Priority.high, label: Priority.high },
              { value: Priority.normal, label: Priority.normal },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
