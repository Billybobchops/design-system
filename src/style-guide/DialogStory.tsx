import Dialog from '@/components/Dialog';
import ButtonSecondary from '@/components/ButtonPrimary';
import IconParagraph from '@/components/IconParagraph';
import Paragraph from '@/components/Paragraph';
import UnorderedList from '@/components/UnorderedList';
import { WarningLarge, ErrorLarge } from '@/components/Symbols';
import variables from '@/app/variables.module.scss';

const DialogStory = () => {
    return (
        <>
            <Dialog
                title='Account has a loan'
                TriggerElement={(props) => (
                    <ButtonSecondary
                        {...props}
                        disabled={false}
                        text='Info Dialog'
                        variant='blue'
                    />
                )}
			>
                <Paragraph>
                    This account has an active loan. This account is not
                    eligible to enroll in AutoPay and will be immediately
                    disenrolled upon signup.
                </Paragraph>
            </Dialog>

            <Dialog
                title='Ready to Update Scholarship Fund Form?'
                actionButtonText='Yes, Apply Changes'
                hasAction={true}
                handleDialogAction={() => { console.log('Action taken...')}}
                TriggerElement={(props) => (
                    <ButtonSecondary
                        {...props}
                        disabled={false}
                        text='Action Dialog'
                        variant='blue'
                    />
                )}
			>
                <IconParagraph
                    content='Text will be updated on the following pages:'
                    icon={<WarningLarge fill={variables.utilityYellow60} />}
                />
                <UnorderedList items={['Scholarship Fund']} />
                <IconParagraph
                    content='The following languages will not be updated:'
                    icon={<ErrorLarge fill={variables.utilityRed60} />}
                />
                <UnorderedList items={['French', 'Arabic', 'Swahili']} />
            </Dialog>

            <Dialog
                title='Ready to Update this Long Text?'
                actionButtonText='Yes, Apply Changes'
                hasAction={true}
                handleDialogAction={() => { console.log('Action taken...') }}
                TriggerElement={(props) => (
                    <ButtonSecondary
                        {...props}
                        disabled={false}
                        text='Action Dialog Scrollable'
                        variant='blue'
                    />
                )}
			>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, sed. Optio nam earum ipsa quibusdam nesciunt eos
                    repellat ipsum esse amet totam hic incidunt molestiae
                    consectetur velit nemo fugiat nostrum consequuntur,
                    asperiores laborum aliquam assumenda blanditiis vitae
                    eligendi iusto. Officia beatae doloremque ex aperiam tempora
                    minus nesciunt. Totam, id quasi, eos, sint temporibus maxime
                    odit iste dolorum pariatur eaque sunt.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, sed. Optio nam earum ipsa quibusdam nesciunt eos
                    repellat ipsum esse amet totam hic incidunt molestiae
                    consectetur velit nemo fugiat nostrum consequuntur,
                    asperiores laborum aliquam assumenda blanditiis vitae
                    eligendi iusto. Officia beatae doloremque ex aperiam tempora
                    minus nesciunt. Totam, id quasi, eos, sint temporibus maxime
                    odit iste dolorum pariatur eaque sunt.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, sed. Optio nam earum ipsa quibusdam nesciunt eos
                    repellat ipsum esse amet totam hic incidunt molestiae
                    consectetur velit nemo fugiat nostrum consequuntur,
                    asperiores laborum aliquam assumenda blanditiis vitae
                    eligendi iusto. Officia beatae doloremque ex aperiam tempora
                    minus nesciunt. Totam, id quasi, eos, sint temporibus maxime
                    odit iste dolorum pariatur eaque sunt.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, sed. Optio nam earum ipsa quibusdam nesciunt eos
                    repellat ipsum esse amet totam hic incidunt molestiae
                    consectetur velit nemo fugiat nostrum consequuntur,
                    asperiores laborum aliquam assumenda blanditiis vitae
                    eligendi iusto. Officia beatae doloremque ex aperiam tempora
                    minus nesciunt. Totam, id quasi, eos, sint temporibus maxime
                    odit iste dolorum pariatur eaque sunt.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, sed. Optio nam earum ipsa quibusdam nesciunt eos
                    repellat ipsum esse amet totam hic incidunt molestiae
                    consectetur velit nemo fugiat nostrum consequuntur,
                    asperiores laborum aliquam assumenda blanditiis vitae
                    eligendi iusto. Officia beatae doloremque ex aperiam tempora
                    minus nesciunt. Totam, id quasi, eos, sint temporibus maxime
                    odit iste dolorum pariatur eaque sunt.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, sed. Optio nam earum ipsa quibusdam nesciunt eos
                    repellat ipsum esse amet totam hic incidunt molestiae
                    consectetur velit nemo fugiat nostrum consequuntur,
                    asperiores laborum aliquam assumenda blanditiis vitae
                    eligendi iusto. Officia beatae doloremque ex aperiam tempora
                    minus nesciunt. Totam, id quasi, eos, sint temporibus maxime
                    odit iste dolorum pariatur eaque sunt.
                </Paragraph>
                <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, sed. Optio nam earum ipsa quibusdam nesciunt eos
                    repellat ipsum esse amet totam hic incidunt molestiae
                    consectetur velit nemo fugiat nostrum consequuntur,
                    asperiores laborum aliquam assumenda blanditiis vitae
                    eligendi iusto. Officia beatae doloremque ex aperiam tempora
                    minus nesciunt. Totam, id quasi, eos, sint temporibus maxime
                    odit iste dolorum pariatur eaque sunt.
                </Paragraph>
            </Dialog>
        </>
    );
};

export default DialogStory;