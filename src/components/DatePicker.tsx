import { DatePicker } from '@mui/x-date-pickers';
import type {} from '@mui/x-date-pickers/themeAugmentation';
import { createTheme, ThemeProvider } from '@mui/material';

// const theme = createTheme({
//     components: {
//         MuiIconButton: {
//             styleOverrides: {
//                 root: {
//                     backgroundColor: '#e8e8e8',
//                     borderRadius: '0',
//                 },
//             },
//         },
//     },
// });

const DatePickerInput = () => {
    return (
        // <ThemeProvider theme={theme}>
        <DatePicker
            // slotProps={{
            //     openPickerIcon: { fontSize: 'large' },
            // }}
            // sx={{
            //     backgroundColor: '#e8e8e8',
            // }}
        />
        // </ThemeProvider>
    );
};

export default DatePickerInput;
