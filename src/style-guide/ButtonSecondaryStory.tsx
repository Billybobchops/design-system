import ButtonSecondary from '@/components/ButtonSecondary';

const ButtonPrimaryStory = () => {
    return (
        <>
            <ButtonSecondary
                disabled={false}
                functionality='search'
                text='Search Invoices'
                variant='blue'
            />
            <ButtonSecondary
                disabled={false}
                functionality='search'
                text='Search Invoices'
                variant='green'
            />
            <ButtonSecondary
                disabled={false}
                functionality='register'
                text='Register'
                variant='green'
            />
            <ButtonSecondary
                disabled={true}
                text='Search Invoices'
                functionality='search'
            />
        </>
    );
};

export default ButtonPrimaryStory;
