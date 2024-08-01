import { DatePicker } from '@mui/x-date-pickers';
import { useId } from 'react';
import variables from '@/app/variables.module.scss';
import Label from './Label';
import InputHelperText from './InputHelperText';

interface DatePickerInputProps {
    label: string;
    required: boolean;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
    label,
    required,
}) => {
    const inputID = useId();
    const helperID = useId();

    return (
        <>
            <Label inputID={inputID} label={label} required={required} />
            <DatePicker
                sx={{
                    '& .MuiInputBase-root': {
                        border: `1px solid ${variables.icNeutral50}`,
						margin: '6px 6px 6px 0',
                        width: '250px',
                    },
                    '& .MuiInputBase-root:hover': {
                        border: `1px solid ${variables.icBlue50}`,
                    },
                    '& .MuiOutlinedInput-input:focus-visible': {
                        border: `2px solid ${variables.icBlue50}`,
                    },
                    '& .MuiOutlinedInput-input': {
                        padding: '8px 0 8px 8px',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                }}
            />
            <InputHelperText
                helperID={helperID}
                helperText='Hardcoded helper text here - rewire me!'
            />
        </>
    );
};

export default DatePickerInput;
