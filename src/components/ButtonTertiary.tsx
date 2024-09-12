import classes from './ButtonTertiary.module.scss';

interface ButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
    text: string;
    variant?: 'blue' | 'green' | 'red';
}

const ButtonTertiary: React.FC<ButtonProps> = ({
    clickHandler,
    disabled = false,
    text,
    variant,
}) => {
    return (
        <button
            className={`${classes.button} ${variant ? classes[variant] : ''} ${disabled ? classes.disabled : ''}`}
            disabled={disabled}
            onClick={clickHandler}
		>
            {text}
        </button>
    );
};

export default ButtonTertiary;
