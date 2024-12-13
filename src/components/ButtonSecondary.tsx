import classes from './ButtonSecondary.module.scss';

interface ButtonProps {
    clickHandler?: () => void;
    disabled: boolean;
    text: string;
    variant?: 'blue' | 'green' | 'red';
}

const ButtonSecondary: React.FC<ButtonProps> = ({
    clickHandler,
    disabled = false,
    text,
    variant = 'blue',
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

export default ButtonSecondary;
