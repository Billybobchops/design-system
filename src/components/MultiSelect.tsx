import React, { useState, useEffect, useRef } from 'react';
import classes from './MultiSelect.module.scss';
import { useId } from 'react';
import Label from './Label';
import InputHelperText from './InputHelperText';
import variables from '@/app/variables.module.scss';
import { Chevron } from './Symbols';

interface MultiSelectOption {
    value: string;
}

interface MultiSelectProps {
    disabled?: boolean;
    helperText?: string;
    label: string;
    name: string;
    required?: boolean;
    options: MultiSelectOption[];
    selectedValues: string[];
    onChange: (selectedValues: string[]) => void;
    placeholder?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
    disabled = false,
    helperText = '',
    label,
    name,
    required = false,
    options,
    selectedValues,
    onChange,
    placeholder = 'Select options...',
}) => {
    const selectID = useId();
    const helperID = useId();
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredOptions, setFilteredOptions] = useState<MultiSelectOption[]>(options);
    const searchRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setFilteredOptions(
            options.filter(option =>
                option.value.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, options]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleCheckboxChange = (value: string) => {
        const newSelectedValues = selectedValues.includes(value)
            ? selectedValues.filter(v => v !== value)
            : [...selectedValues, value];
        onChange(newSelectedValues);
    };

    const handleToggleOpen = () => {
        setIsOpen(!isOpen);
        if (!isOpen && searchRef.current) {
            searchRef.current.focus();
        }
    };

	const buttonText = selectedValues.length > 0 ? `${selectedValues.length} selected` : placeholder;

    return (
        <div className={classes.multiSelectContainer}>
            <Label inputID={selectID} label={label} required={required} />
            <div className={classes.chevronPositioning}>
                <button
                    type="button"
                    onClick={handleToggleOpen}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                    disabled={disabled}
                    className={classes.multiSelectButton}
                >
                    {buttonText}
					<span aria-hidden="true" className={isOpen ? classes.activeChevron : ''}>
						<Chevron fill={variables.utilityNeutral70} />
					</span>
                </button>
                {isOpen && (
                    <div className={classes.multiSelectDropdown} role="listbox">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            ref={searchRef}
                            placeholder="Type to search..."
                            aria-label="Search options"
                            className={classes.multiSelectSearch}
                        />
                        <ul className={classes.multiSelectList}>
							{/* Select All will go here */}
                            {filteredOptions.map(option => (
                                <li  className={classes.multiSelectItem} key={option.value}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            value={option.value}
                                            checked={selectedValues.includes(option.value)}
                                            onChange={() => handleCheckboxChange(option.value)}
                                            aria-checked={selectedValues.includes(option.value)}
                                            disabled={disabled}
                                        />
                                        {option.value}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <InputHelperText helperID={helperID} helperText={helperText} />
			{/* Chips to go here */}
        </div>
    );
};

export default MultiSelect;
