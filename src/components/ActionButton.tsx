import classes from "./ActionButton.module.scss";
import variables from '@/app/variables.module.scss';
import { Remove } from "./Symbols";

interface ActionButtonProps {
	clickHandler?: () => void;
	disabled: boolean;
	hasSymbol?: boolean;
	text: string;
	variant?: "danger" | "success";
}

const ActionButton: React.FC<ActionButtonProps> = ({
	clickHandler,
	disabled = false,
	hasSymbol = false,
	text,
	variant,
}) => {
	const getFillColor = (disabled: boolean, variant?: string) => {
		if (disabled) {
			return variables.utilityNeutral60;
		}
		switch (variant) {
			case "danger":
				return variables.utilityNeutral0;
			case "success":
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
			<div className={classes.innerButton}>
				{hasSymbol && (
					<span aria-hidden="true">
						<Remove fill={getFillColor(disabled, variant)} />
					</span>
				)}
				{text}
			</div>
		</button>
	);
};

export default ActionButton;