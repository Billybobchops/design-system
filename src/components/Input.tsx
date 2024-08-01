import classes from './Input.module.scss';
import { useId } from 'react';
import Label from './Label';
import InputHelperText from './InputHelperText';

interface InputProps {
    disabled?: boolean;
    label: string;
    name: string;
    required: boolean;
}

const Input: React.FC<InputProps> = ({
    disabled = false,
    label,
    name,
    required = false,
}) => {
    const inputID = useId();
    const helperID = useId();

    const helperText = 'Please enter a valid billing address.'; // temp

    return (
        <>
			<Label inputID={inputID} label={label} required={required} />
            <input
                aria-invalid={false}
                aria-describedby={helperID}
                className={classes.input}
                disabled={disabled}
                id={inputID}
                name={name}
                type='text'
            />
			<InputHelperText helperID={helperID} helperText={helperText} />
        </>
    );
};

export default Input;
