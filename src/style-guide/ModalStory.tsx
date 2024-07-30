import Modal from '@/components/Modal';
import ButtonSecondary from '@/components/ButtonSecondary';
import IconParagraph from '@/components/IconParagraph';
import Paragraph from '@/components/Paragraph';
import UnorderedList from '@/components/UnorderedList';
import { Warning, ErrorLarge } from '@/components/Symbols';
import variables from '@/app/variables.module.scss';

const ModalStory = () => {
    return (
        <>
            <Modal
                title='Account has a loan'
                TriggerElement={(props) => (
                    <ButtonSecondary
                        {...props}
                        disabled={false}
                        text='Info Modal'
                        variant='blue'
                    />
                )}>
                <p>
                    This account has an active loan. This account is not
                    eligible to enroll in AutoPay and will be immediately
                    disenrolled upon signup.
                </p>
            </Modal>

            <Modal
                title='Ready to Update Scholarship Fund Form?'
                actionButtonText='Yes, Apply Changes'
                hasAction={true}
                handleModalAction={() => {console.log('Action taken...');}}
                TriggerElement={(props) => (
                    <ButtonSecondary
                        {...props}
                        disabled={false}
                        text='Action Modal'
                        variant='blue'
                    />
                )}>
                <IconParagraph
                    content='Text will be updated on the following pages:'
                    icon={<Warning fill={variables.icOrange50} />}
                />
				<UnorderedList items={['Scholarship Fund']} />
                <IconParagraph
                    content='The following languages will not be updated:'
                    icon={<ErrorLarge fill={variables.icRed60} />}
                />
				<UnorderedList items={['French', 'Arabic', 'Swahili']} />
            </Modal>

            <Modal
                title='Ready to Update this Long Text?'
                actionButtonText='Yes, Apply Changes'
                hasAction={true}
                handleModalAction={() => {console.log('Action taken...');}}
                TriggerElement={(props) => (
                    <ButtonSecondary
                        {...props}
                        disabled={false}
                        text='Action Modal Scrollable'
                        variant='blue'
                    />
                )}>
                <Paragraph
                    content='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur nihil soluta quidem animi obcaecati nam sequi aut
                    delectus beatae reprehenderit. Rerum perferendis illum
                    blanditiis minus et temporibus! Ad molestiae nesciunt iste
                    modi quos debitis omnis. Ullam itaque, quisquam laudantium,
                    eos ad amet, nostrum alias cupiditate maiores architecto non
                    eaque nulla vero vitae animi reiciendis molestiae odio
                    obcaecati earum reprehenderit eum! Fugit illum dignissimos,
                    sed earum pariatur totam quasi cupiditate, eius facere
                    animi, quo dolorem ab repudiandae et doloremque sunt ipsam?
                    Aspernatur nesciunt quidem vitae, culpa quisquam corrupti
                    tempora quam mollitia ipsa praesentium voluptate itaque
                    officia dolorem. At consequatur dolorem, voluptate nihil
                    laudantium error dolore quis ratione minima mollitia
                    laboriosam tempora voluptas beatae inventore debitis porro
                    et, illum possimus autem deleniti cumque temporibus ad.
                    Debitis, eius.'
                />
                <Paragraph
                    content='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur nihil soluta quidem animi obcaecati nam sequi aut
                    delectus beatae reprehenderit. Rerum perferendis illum
                    blanditiis minus et temporibus! Ad molestiae nesciunt iste
                    modi quos debitis omnis. Ullam itaque, quisquam laudantium,
                    eos ad amet, nostrum alias cupiditate maiores architecto non
                    eaque nulla vero vitae animi reiciendis molestiae odio
                    obcaecati earum reprehenderit eum! Fugit illum dignissimos,
                    sed earum pariatur totam quasi cupiditate, eius facere
                    animi, quo dolorem ab repudiandae et doloremque sunt ipsam?
                    Aspernatur nesciunt quidem vitae, culpa quisquam corrupti
                    tempora quam mollitia ipsa praesentium voluptate itaque
                    officia dolorem. At consequatur dolorem, voluptate nihil
                    laudantium error dolore quis ratione minima mollitia
                    laboriosam tempora voluptas beatae inventore debitis porro
                    et, illum possimus autem deleniti cumque temporibus ad.
                    Debitis, eius.'
                />
                <Paragraph
                    content='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur nihil soluta quidem animi obcaecati nam sequi aut
                    delectus beatae reprehenderit. Rerum perferendis illum
                    blanditiis minus et temporibus! Ad molestiae nesciunt iste
                    modi quos debitis omnis. Ullam itaque, quisquam laudantium,
                    eos ad amet, nostrum alias cupiditate maiores architecto non
                    eaque nulla vero vitae animi reiciendis molestiae odio
                    obcaecati earum reprehenderit eum! Fugit illum dignissimos,
                    sed earum pariatur totam quasi cupiditate, eius facere
                    animi, quo dolorem ab repudiandae et doloremque sunt ipsam?
                    Aspernatur nesciunt quidem vitae, culpa quisquam corrupti
                    tempora quam mollitia ipsa praesentium voluptate itaque
                    officia dolorem. At consequatur dolorem, voluptate nihil
                    laudantium error dolore quis ratione minima mollitia
                    laboriosam tempora voluptas beatae inventore debitis porro
                    et, illum possimus autem deleniti cumque temporibus ad.
                    Debitis, eius.'
                />
                <Paragraph
                    content='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur nihil soluta quidem animi obcaecati nam sequi aut
                    delectus beatae reprehenderit. Rerum perferendis illum
                    blanditiis minus et temporibus! Ad molestiae nesciunt iste
                    modi quos debitis omnis. Ullam itaque, quisquam laudantium,
                    eos ad amet, nostrum alias cupiditate maiores architecto non
                    eaque nulla vero vitae animi reiciendis molestiae odio
                    obcaecati earum reprehenderit eum! Fugit illum dignissimos,
                    sed earum pariatur totam quasi cupiditate, eius facere
                    animi, quo dolorem ab repudiandae et doloremque sunt ipsam?
                    Aspernatur nesciunt quidem vitae, culpa quisquam corrupti
                    tempora quam mollitia ipsa praesentium voluptate itaque
                    officia dolorem. At consequatur dolorem, voluptate nihil
                    laudantium error dolore quis ratione minima mollitia
                    laboriosam tempora voluptas beatae inventore debitis porro
                    et, illum possimus autem deleniti cumque temporibus ad.
                    Debitis, eius.'
                />
                <Paragraph
                    content='Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur nihil soluta quidem animi obcaecati nam sequi aut
                    delectus beatae reprehenderit. Rerum perferendis illum
                    blanditiis minus et temporibus! Ad molestiae nesciunt iste
                    modi quos debitis omnis. Ullam itaque, quisquam laudantium,
                    eos ad amet, nostrum alias cupiditate maiores architecto non
                    eaque nulla vero vitae animi reiciendis molestiae odio
                    obcaecati earum reprehenderit eum! Fugit illum dignissimos,
                    sed earum pariatur totam quasi cupiditate, eius facere
                    animi, quo dolorem ab repudiandae et doloremque sunt ipsam?
                    Aspernatur nesciunt quidem vitae, culpa quisquam corrupti
                    tempora quam mollitia ipsa praesentium voluptate itaque
                    officia dolorem. At consequatur dolorem, voluptate nihil
                    laudantium error dolore quis ratione minima mollitia
                    laboriosam tempora voluptas beatae inventore debitis porro
                    et, illum possimus autem deleniti cumque temporibus ad.
                    Debitis, eius.'
                />
            </Modal>
        </>
    );
};

export default ModalStory;
