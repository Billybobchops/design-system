import { useState } from "react";
import classes from "./Alert.module.scss";
import variables from '@/app/variables.module.scss';
import { Info, MenuClose, Error, Success } from "./Symbols";

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
				return variables.icBlue70;
			case "warning":
				return variables.icOrange80;
			case "error":
				return variables.icRed60;
			case "success":
				return variables.icGreen70;
			default:
				return variables.icBlue70;
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
							<span className='sr-only'>close alert</span>
						</button>
					)}
				</div>
			)}
		</>
	);
};

export default Alert;
