import Accordion from '@/components/Accordion';
import Paragraph from '@/components/Paragraph';

const AccordionStory = () => {
    return (
        <>
            <Accordion title='Accordion Heading'>
                <Paragraph>Dummy content, yay!</Paragraph>
            </Accordion>
            <Accordion title='Accordion Heading'>
                <Paragraph>Dummy content, yay!</Paragraph>
            </Accordion>
        </>
    );
};

export default AccordionStory;
