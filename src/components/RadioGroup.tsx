import { useState } from 'react';
import classes from './RadioGroup.module.scss';
import Fieldset from './Fieldset';

interface RadioGroupProps {
    legend: string;
    options: { id: string }[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({ legend, options }) => {
    const [selected, setSelected] = useState(options[0]);
    const onOptionChange = (index: number) => {
        setSelected(options[index]);
    };

    return (
        <Fieldset legend={legend}>
            <ul className={classes.list}>
                {options.map((option, i) => {
                    return (
                        <li key={option.id}>
                            <label>
                                <input
                                    checked={selected.id === option.id}
                                    className={classes.radio}
                                    id={option.id}
                                    onChange={() => onOptionChange(i)}
                                    type='radio'
                                    value={option.id}
                                />
                                {option.id}
                            </label>
                        </li>
                    );
                })}
            </ul>
        </Fieldset>
    );
};

export default RadioGroup;
