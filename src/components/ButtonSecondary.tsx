import classes from "./ButtonSecondary.module.scss";
import variables from '@/app/variables.module.scss';
import { Chevron, Search } from "./Symbols";

interface ButtonProps {
	onClick?: () => void;
	disabled: boolean;
	functionality?: "search" | "register";
	text: string;
	variant?: "blue" | "green";
}

const ButtonSecondary: React.FC<ButtonProps> = ({
	onClick,
	disabled = false,
	functionality,
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
			onClick={onClick}
		>
			{functionality === "search" && (
				<span className={classes.first} aria-hidden="true" >
					<Search fill={getFillColor(disabled, variant)} />
				</span>
			)}
			{text}
			{functionality === "register" && (
				<span className={classes.second} aria-hidden="true" >
					<Chevron fill={getFillColor(disabled, variant)} />
				</span>
			)}
		</button>
	);
};

export default ButtonSecondary;