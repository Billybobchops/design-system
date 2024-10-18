import ButtonPrimary from '@/components/ButtonPrimary';
import { Chevron } from '@/components/Symbols';

const ButtonPrimaryStory = () => {
    return (
        <>
            <ButtonPrimary disabled={false} icon={<Chevron />} text='Pay Now' variant='blue' />
            <ButtonPrimary disabled={false} icon={<Chevron />} text='Pay Now' variant='green' />
            <ButtonPrimary disabled={true} icon={<Chevron />} text='Pay Now' />
        </>
    );
};

export default ButtonPrimaryStory;
