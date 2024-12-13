import Accordion from '@/components/Accordion';
import Paragraph from '@/components/Paragraph';
import ButtonSecondary from '@/components/ButtonPrimary';

const AccordionStory = () => {
    return (
        <>
            <Accordion title='Accordion Heading'>
                <Paragraph>Dummy content, yay!</Paragraph>
				<ButtonSecondary 
					disabled={false}
					text='View Invoice'
				/>
            </Accordion>
            <Accordion title='Accordion Heading'>
                <Paragraph>Dummy content, yay!</Paragraph>
            </Accordion>
        </>
    );
};

export default AccordionStory;
