import IconButton from '@/components/IconButton';
import { Plus } from '@/components/Symbols';

const IconButtonStory = () => {
    return (
        <>
            <IconButton
                disabled={false}
				icon={<Plus />}
                variant='red'
            />
            <IconButton
                disabled={false}
				icon={<Plus />}
                variant='green'
            />
            <IconButton
                disabled={false}
				icon={<Plus />}
                variant='blue'
            />
            <IconButton
                disabled={true}
				icon={<Plus />}
                variant='blue'
            />
        </>
    );
};

export default IconButtonStory;
