import Input from '@/components/Input';

const InputStory = () => {
    return (
        <>
            <Input
                label='Billing Address'
                name='billingAdress'
                required={true}
            />
        </>
    );
};

export default InputStory;
