import ButtonSecondary from '@/components/ButtonSecondary';
import { Chevron, Search } from '@/components/Symbols';

const ButtonPrimaryStory = () => {
    return (
        <>
            <ButtonSecondary
                disabled={false}
                icon={<Search />}
				iconPosition='start'
                text='Search Invoices'
                variant='blue'
            />
            <ButtonSecondary
                disabled={false}
                icon={<Search />}
				iconPosition='start'
                text='Search Invoices'
                variant='green'
            />
            <ButtonSecondary
                disabled={true}
                icon={<Search />}
				iconPosition='start'
                text='Search Invoices'
            />
			<ButtonSecondary
                disabled={false}
                icon={<Chevron />}
                text='Register Now'
                variant='blue'
            />
			<ButtonSecondary
                disabled={true}
                icon={<Chevron />}
                text='Register Now'
            />
        </>
    );
};

export default ButtonPrimaryStory;
``