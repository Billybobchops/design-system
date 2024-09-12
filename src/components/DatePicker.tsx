import classes from './DatePicker.module.scss';
import { DatePicker } from '@mui/x-date-pickers';
import { useId } from 'react';
import variables from '@/app/variables.module.scss';
import Label from './Label';
import InputHelperText from './InputHelperText';

interface DatePickerInputProps {
    label: string;
	helperText?: string;
    required: boolean;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
    label,
	helperText = '',
    required,
}) => {
    const inputID = useId();
    const helperID = useId();

    return (
        <div className={classes.inputContainer}>
            <Label inputID={inputID} label={label} required={required} />
            <DatePicker
				slotProps={{ textField: { fullWidth: true } }}
                sx={{
                    '& .MuiInputBase-root': {
                        border: `1px solid ${variables.utilityNeutral50}`,
						margin: '6px 6px 6px 0',
                        width: '100%',
                    },
                    '& .MuiInputBase-root:hover': {
                        border: `1px solid ${variables.themeA3}`,
                    },
                    '& .MuiOutlinedInput-input:focus-visible': {
                        border: `2px solid ${variables.themeA3}`,
                    },
                    '& .MuiOutlinedInput-input': {
                        padding: `${variables.spacingXS} 0 ${variables.spacingXS} ${variables.spacingXS}`,
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                }}
            />
            <InputHelperText
                helperID={helperID}
                helperText={helperText}
            />
        </div>
    );
};

export default DatePickerInput;
