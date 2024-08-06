import { useState } from "react";
import classes from "./Alert.module.scss";
import variables from '@/app/variables.module.scss';
import { Info, MenuClose, Error, Success } from "./Symbols";
import VisuallyHidden from "./VisuallyHidden";

interface AlertProps {
	content: string;
	isDismissable: boolean;
	variant: "default" | "warning" | "error" | "success";
}

const Alert: React.FC<AlertProps> = ({ content, isDismissable, variant }) => {
	const [isActive, setIsActive] = useState(true);
	const getFillColor = (variant: string) => {
		switch (variant) {
			case "default":
				return variables.themeA4;
			case "warning":
				return variables.utilityYellow80;
			case "error":
				return variables.utilityRed60;
			case "success":
				return variables.utilityGreen80;
			default:
				return variables.themeA4;
		}
	};

	let symbol = <Info fill={getFillColor(variant)} />;
	if (variant === "error") {
		symbol = <Error fill={getFillColor(variant)} />;
	} else if (variant === "success") {
		symbol = <Success fill={getFillColor(variant)} />;
	}

	return (
		<>
			{isActive && (
				<div
					role="alert"
					className={`${classes.alert} ${classes[variant]}`}
				>
					<span aria-hidden="true">{symbol}</span>
					{content}
					{isDismissable && (
						<button className={classes.button} onClick={() => setIsActive(false)}>
							<MenuClose fill={getFillColor(variant)} />
							<VisuallyHidden>close alert</VisuallyHidden>
						</button>
					)}
				</div>
			)}
		</>
	);
};

export default Alert;
