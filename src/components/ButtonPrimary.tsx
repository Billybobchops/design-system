import React from 'react';
import classes from './ButtonPrimary.module.scss';
import variables from '@/app/variables.module.scss';

interface ButtonPrimaryProps {
    clickHandler?: () => void;
    disabled: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'start' | 'end';
    text: string;
    variant?: 'blue' | 'green';
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
    clickHandler,
    disabled = false,
    icon,
    iconPosition = 'end',
    text,
    variant,
}) => {
    const fillColor = disabled ? variables.utilityNeutral60 : variables.utilityNeutral0;

    return (
        <button
            className={`${classes.button} ${variant ? classes[variant] : ''} ${disabled ? classes.disabled : ''}`}
            disabled={disabled}
            onClick={clickHandler}
		>
			{icon && iconPosition === 'start' && (
                <span aria-hidden='true' className={classes.iconStart}>
                    {React.cloneElement(icon as React.ReactElement, { fill: fillColor, })}
                </span>
            )}
            {text}
            {icon && iconPosition === 'end' && (
                <span aria-hidden='true' className={classes.iconEnd}>
                    {React.cloneElement(icon as React.ReactElement, { fill: fillColor, })}
                </span>
            )}
        </button>
    );
};

export default ButtonPrimary;
