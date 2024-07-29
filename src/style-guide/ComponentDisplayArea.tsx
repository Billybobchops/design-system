import React from "react";
import classes from "./ComponentDisplayArea.module.scss";

interface ComponentDisplayAreaProps {
	title: string;
	children?: React.ReactNode;
}

const ComponentDisplayArea: React.FC<ComponentDisplayAreaProps> = ({ children, title }) => {
	return (
		<section className={classes.componentDisplayArea}>
			<h2 className={classes.displayTitle}>{title}</h2>
			{children}
		</section>
	);
};

export default ComponentDisplayArea;