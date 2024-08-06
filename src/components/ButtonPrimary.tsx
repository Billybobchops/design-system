
import classes from "./ButtonPrimary.module.scss";
import variables from '@/app/variables.module.scss';
import { Chevron } from "./Symbols";

interface ButtonPrimaryProps {
	clickHandler?: () => void;
	disabled: boolean;
	text: string;
	variant?: "blue" | "green";
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
	clickHandler,
	disabled = false,
	text,
	variant,
}) => {
	const getFillColor = (disabled: boolean, variant?: string) => {
		if (disabled) {
			return variables.utilityNeutral60;
		}
		switch (variant) {
			case "blue":
				return variables.utilityNeutral0;
			case "green":
				return variables.utilityNeutral0;
			default:
				return variables.utilityNeutral60;
		}
	};

	return (
		<button
			className={`${classes.button} ${variant ? classes[variant] : ""} ${disabled ? classes.disabled : ""}`}
			disabled={disabled}
			onClick={clickHandler}
		>
			{text}
			<span aria-hidden="true">
				<Chevron fill={getFillColor(disabled, variant)} />
			</span>
		</button>
	);
};

export default ButtonPrimary;
