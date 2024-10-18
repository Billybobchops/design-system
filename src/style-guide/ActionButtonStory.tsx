import ActionButton from '@/components/ActionButton';
import { Remove } from '@/components/Symbols';

const ActionButtonStory = () => {
    return (
        <>
            <ActionButton
                disabled={false}
				icon={<Remove />}
				iconPosition={'start'}
                text='Remove Email Address'
                variant='red'
            />
            <ActionButton
				disabled={true}
				icon={<Remove />}
				iconPosition={'start'}
				text='Remove Email Address'
			/>
            <ActionButton
                disabled={false}
                text='Process Payment $4,428.83'
                variant='green'
            />
            <ActionButton
				disabled={true}
				text='Process Payment $4,428.83'
			/>
        </>
    );
};

export default ActionButtonStory;
