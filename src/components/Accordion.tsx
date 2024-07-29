import { useState } from "react";
import classes from "./Accordion.module.scss";
import variables from '@/app/variables.module.scss';
import { Chevron } from "./Symbols";

interface AccordionProps {
	children?: React.ReactNode;
	title: string;
}

const Accordion: React.FC<AccordionProps> = ({ children, title }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const buttonClasses = `${classes.button} ${isOpen ? classes.activeButton : ""}`;
	const iconClasses = `${isOpen ? classes.activeIcon : ""}`;

	return (
		<section className={classes.section}>
			<h2 className={classes.title}>
				<button
					aria-controls="sect1"
					aria-expanded={isOpen}
					className={buttonClasses}
					id="accordion1id"
					onBlur={() => setIsHovered(false)}
					onClick={() => setIsOpen(!isOpen)}
					onFocus={() => setIsHovered(true)}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<span aria-hidden="true" className={iconClasses}>
						<Chevron fill={isHovered ? variables.icBlue50 : variables.icBlue70} />
					</span>
					{" " + title}
				</button>
			</h2>
			{isOpen && (
				<div
					aria-labelledby="accordion1id"
					className={classes.content}
					id="sect1"
					role="region"
				>
					{children}
				</div>
			)}
		</section>
	);
};

export default Accordion;