import React from 'react';
import classes from "./ButtonPrimary.module.scss";
import variables from '@/app/variables.module.scss';

interface ButtonProps {
	clickHandler?: () => void;
	disabled: boolean;
	icon?: React.ReactNode;
    iconPosition?: 'start' | 'end';
	text: string;
	variant?: 'blue' | 'green' | 'red';
}

const ButtonSecondary: React.FC<ButtonProps> = ({
	clickHandler,
	disabled = false,
	icon,
    iconPosition = 'end',
	text,
	variant = 'blue',
}) => {
	const fillColor = disabled ? variables.utilityNeutral60 : variables.utilityNeutral0;

	return (
		<button
			className={`${classes.button} ${variant ? classes[variant] : ''} ${disabled ? classes.disabled : ''}`}
			disabled={disabled}
			onClick={clickHandler}
		>
			<div className={classes.innerButton}>
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
			</div>
		</button>
	);
};

export default ButtonSecondary;
