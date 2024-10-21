import { useState } from 'react';
import Input from '@/components/Input';
import DatePickerInput from '@/components/DatePicker';
import Select from '@/components/Select';
import MultiSelect from '@/components/MultiSelect';

const InputStory = () => {
	const [selectedValues, setSelectValues] = useState<string[]>(['Real Estate']); // temp

    return (
        <>
			<DatePickerInput
                label='Start date of first payment'
                helperText='Please select a date for your first payment.'
                required={true}
            />
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
