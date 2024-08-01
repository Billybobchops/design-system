import classes from './InputHelperText.module.scss';

interface InputHelperTextProps {
    helperID: string;
    helperText: string;
}

const InputHelperText: React.FC<InputHelperTextProps> = ({
    helperID,
    helperText,
}) => {
    return (
        <span className={classes.helperText} id={helperID}>
            {helperText}
        </span>
    );
};

export default InputHelperText;
