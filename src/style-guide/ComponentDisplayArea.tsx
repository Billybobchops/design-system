import React from "react";
import classes from "./ComponentDisplayArea.module.scss";
import Heading from "@/components/Heading";

interface ComponentDisplayAreaProps {
	title: string;
	children?: React.ReactNode;
}

const ComponentDisplayArea: React.FC<ComponentDisplayAreaProps> = ({ children, title }) => {
	return (
		<section className={classes.componentDisplayArea}>
			<Heading level='h2'>{title}</Heading>
			{children}
		</section>
	);
};

export default ComponentDisplayArea;