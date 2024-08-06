import Input from '@/components/Input';
import DatePickerInput from '@/components/DatePicker';
import Select from '@/components/Select';

const InputStory = () => {
    return (
        <>
            <Input
                helperText='Please enter a valid billing address.'
                label='Billing Address'
                name='billingAddress'
                required={true}
                type='text'
            />
            <Input
                helperText='Please enter a valid phone number.'
                label='Phone Number'
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
        </>
    );
};

export default InputStory;
