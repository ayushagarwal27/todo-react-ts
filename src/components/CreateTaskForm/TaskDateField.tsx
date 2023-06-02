import React, { FC, ReactElement, useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';

const TaskDateField: FC = (): ReactElement => {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label='Task Date'
          format='dd/MM/yyyy'
          value={date}
          onChange={newValue => setDate(newValue)}
          // @ts-ignore
          renderInput={params => <TextField {...params} />} 
        />
      </LocalizationProvider>
    </>
  );
};

export default TaskDateField;
