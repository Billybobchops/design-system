import React, { useState, useEffect, useRef } from 'react';
import classes from './MultiSelect.module.scss';
import { useId } from 'react';
import Label from './Label';
import Checkbox from './Checkbox';
import Chip from './Chip';
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
    onChange: (selectedValues: string[]) => void;
    options: MultiSelectOption[];
    placeholder?: string;
    required?: boolean;
    selectedValues: string[];
}

const MultiSelect: React.FC<MultiSelectProps> = ({
    disabled = false,
    helperText = '',
    label,
    name,
    onChange,
    options,
    placeholder = 'Select options...',
    required = false,
    selectedValues,
}) => {
    const selectID = useId();
    const helperID = useId();
    const [isOpen, setIsOpen] = useState(false);
	const [selectAll, setSelectAll] = useState(false);
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

	const handleRemoveChip = (chipValue: string) => {
		const newSelectedValues = selectedValues.filter(value => value !== chipValue);
		onChange(newSelectedValues);
	};

    const handleToggleOpen = () => {
        setIsOpen(!isOpen);
        if (!isOpen && searchRef.current) {
            searchRef.current.focus();
        }
    };
	
	const handleToggleAll = () => {
		if (selectAll) {
			onChange([]);
		} else {
			const allOptionValues = options.map(option => option.value);
			onChange(allOptionValues);
		}
		setSelectAll(!selectAll);
	};

	const buttonText = selectedValues.length > 0 ? `${selectedValues.length} selected` : placeholder;

    return (
        <div className={classes.multiSelectContainer}>
            <Label inputID={selectID} label={label} required={required} />
            <div className={classes.chevronPositioning}>
                <button
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                    className={classes.multiSelectButton}
                    disabled={disabled}
                    onClick={handleToggleOpen}
                    type="button"
                >
					<input
						aria-label="Search options"
						className={classes.multiSelectSearch}
						onChange={handleSearchChange}
						placeholder={buttonText}
						ref={searchRef}
						type="text"
						value={searchTerm}
					/>
					<span aria-hidden="true" className={isOpen ? classes.activeChevron : ''}>
						<Chevron fill={variables.utilityNeutral70} />
					</span>
                </button>

                {isOpen && (
                    <div className={classes.multiSelectDropdown} role="listbox">
                        <ul className={classes.multiSelectList}>
							<li className={`${classes.multiSelectItem} ${classes.selectAll}`}>
								<label>
									<Checkbox
										checked={selectAll || selectedValues.length === options.length}
										onChange={handleToggleAll}
										id={'Select All'}
									/>
									Select All
								</label>
							</li>

                            {filteredOptions.map(option => (
                                <li className={classes.multiSelectItem} key={option.value}>
                                    <label>
                                        <Checkbox
                                            checked={selectedValues.includes(option.value)}
                                            disabled={disabled}
                                            onChange={() => handleCheckboxChange(option.value)}
                                            id={option.value}
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
			
			<div className={classes.chipContainer}>
				{selectedValues.length > 0 && selectedValues.map((chip) => {
					return <Chip title={chip} key={chip} onRemove={() => handleRemoveChip(chip)} />
				})}
			</div>
        </div>
    );
};

export default MultiSelect;
