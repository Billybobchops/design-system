import classes from './Textarea.module.scss';
import { useId } from 'react';
import Label from './Label';
import InputHelperText from './InputHelperText';

interface TextareaProps {
    disabled?: boolean;
	helperText?: string;
    label: string;
    name: string;
    required: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
    disabled = false,
	helperText = '',
    label,
    name,
    required = false,
}) => {
    const inputID = useId();
    const helperID = useId();

    return (
        <div className={classes.inputContainer}>
			<Label inputID={inputID} label={label} required={required} />
            <textarea
                aria-invalid={false}
                aria-describedby={helperID}
                className={classes.input}
                disabled={disabled}
                id={inputID}
                name={name}
				required={required}
            />
			<InputHelperText helperID={helperID} helperText={helperText} />
        </div>
    );
};

export default Textarea;