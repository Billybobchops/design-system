import ButtonCTA from '@/components/ButtonCTA';
import { Chevron } from '@/components/Symbols';

const ButtonCTAStory = () => {
    return (
        <>
            <ButtonCTA disabled={false} icon={<Chevron />} text='Pay Now' />
            <ButtonCTA disabled={false} icon={<Chevron />} text='Pay Now' variant='green' />
            <ButtonCTA disabled={true} icon={<Chevron />} text='Pay Now' />
        </>
    );
};

export default ButtonCTAStory;
