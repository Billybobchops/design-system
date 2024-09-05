import { useState } from "react";
import classes from "./Checkboxes.module.scss";
import Fieldset from "./Fieldset";

interface CheckboxesProps {
	legend: string;
	options: { text: string; id: string; checked: boolean }[];
}

const Checkboxes: React.FC<CheckboxesProps> = ({ legend, options }) => {
	const [checkedItems, setCheckedItems] = useState(options);
	const handleChange = (index: number) => {
		setCheckedItems(
			checkedItems.map((item, curIndex) => {
				return curIndex === index
					? { ...item, checked: !item.checked }
					: item;
			})
		);
	};

	return (
		<Fieldset legend={legend}>
			<ul className={classes.list}>
				{checkedItems.map((item, i) => {
					return (
						<li key={item.id}>
							<label>
								<input
									checked={item.checked}
									className={classes.checkbox}
									id={item.id}
									name={item.id}
									onChange={() => handleChange(i)}
									type="checkbox"
								/>
								{item.text}
							</label>
						</li>
					);
				})}
			</ul>
		</Fieldset>
	);
};

export default Checkboxes;