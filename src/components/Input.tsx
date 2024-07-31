import classes from './Input.module.scss';
import { useId } from 'react';

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

    const helperText = 'Please enter a valid billing address.';

    return (
        <>
            <label className={classes.label} htmlFor={inputID}>
                {label}
                {required && <span className={classes.required}> *</span>}
            </label>
            <input
                aria-invalid={false}
                aria-describedby={helperID}
                className={classes.input}
                disabled={disabled}
                id={inputID}
                name={name}
                type='text'
            />
            <span className={classes.helperText} id={helperID}>
                {helperText}
            </span>
        </>
    );
};

export default Input;
