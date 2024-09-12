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
                disabled={true}
                text='Search Invoices'
                functionality='search'
            />
			<ButtonSecondary
                disabled={false}
                functionality='register'
                text='Register Now'
                variant='blue'
            />
			<ButtonSecondary
                disabled={true}
                functionality='register'
                text='Register Now'
            />
        </>
    );
};

export default ButtonPrimaryStory;
