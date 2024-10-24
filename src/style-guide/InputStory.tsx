import { useState } from 'react';
import Input from '@/components/Input';
import DatePickerInput from '@/components/DatePicker';
import Select from '@/components/Select';
import InputMonetary from '@/components/InputMonetary';
import Textarea from '@/components/Textarea';
import RadioGroup from "@/components/RadioGroup";
import Checkboxes from '@/components/Checkboxes';
import MultiSelect from '@/components/MultiSelect';

const InputStory = () => {
	const [selectedValues, setSelectValues] = useState<string[]>(['Real Estate']); // temp

    return (
        <>
            <Input
                label='First name'
                name='firstName'
                required={true}
                type='text'
            />
            <Input
				disabled={true}
				helperText='This is a disabled input'
                label='Last name'
                name='lastName'
                required={false}
                type='text'
            />
            <Input
                helperText='Please enter a valid billing address.'
                label='Billing address'
                name='billingAddress'
                required={true}
                type='text'
            />
            <Input
                helperText='Please enter a valid phone number.'
                label='Phone number'
                name='phoneNumber'
                required={true}
                type='tel'
            />
			<DatePickerInput
                label='Start date of first payment'
                helperText='Please select a date for your first payment.'
                required={true}
            />
            <Select
                label='Select an account'
                name='selectAccount'
                options={[
                    { value: 'Dropdown Option 1' },
                    { value: 'Dropdown Option 2' },
                    { value: 'Dropdown Option 3' },
                ]}
                required={true}
                helperText='Select your account from the options.'
            />
			<InputMonetary
				helperText='Helper text goes here!'
				label='How much do you wish to pay?'
				name='paymentAmount'
				required={true}
			/>
			<Textarea
				helperText='The quick brown fox jumps over the lazy dog.'
				label='This is a textarea'
				name='textareaExample'
				required={false}
			/>
			 <Checkboxes
				legend='What are your favorite Christopher Nolan movies?'
				options={[
					{
						text: 'Batman Begins',
						id: 'batman begins',
						checked: false,
					},
					{
						text: 'The Dark Knight',
						id: 'the dark night',
						checked: false,
					},
					{
						text: 'The Dark Knight Rises',
						id: 'the dark night rises',
						checked: false,
					},
					{
						text: 'Interstellar',
						id: 'interstellar',
						checked: false,
					},
					{ 	text: 'Inception',
						id: 'inception',
						checked: false
					},
				]}
			/>
			<RadioGroup
				legend="What's your level of spice?"
				options={[
					{ id: 'Bland' },
					{ id: 'Medium' },
					{ id: 'Hot' },
					{ id: 'Absolute Destruction' },
				]}
			/>
			{/* Hide Multi-select until we better understand if it's 2 sep components */}
            {/* <MultiSelect
                label='Multi-select Invoice Type(s)'
                name='selectInvoiceType'
                options={[
                    { value: 'Utility' },
                    { value: 'Real Estate' },
                    { value: 'Electric' },
                    { value: 'Property Taxes' },
                    { value: 'Pizza Tax' },
                ]}
				selectedValues={selectedValues}
				onChange={setSelectValues}
            /> */}
        </>
    );
};

export default InputStory;
