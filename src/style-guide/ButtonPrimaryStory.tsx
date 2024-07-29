import ButtonPrimary from '@/components/ButtonPrimary';

const ButtonPrimaryStory = () => {
    return (
        <>
            <ButtonPrimary disabled={false} text='Pay Now' variant='blue' />
            <ButtonPrimary disabled={false} text='Pay Now' variant='green' />
            <ButtonPrimary disabled={true} text='Pay Now' />
        </>
    );
};

export default ButtonPrimaryStory;
