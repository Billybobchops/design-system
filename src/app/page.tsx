'use client';
import Providers from '@/components/Providers';
import Image from 'next/image';
import styles from './page.module.css';
import ComponentDisplayArea from '@/style-guide/ComponentDisplayArea';
import ButtonPrimaryStory from '@/style-guide/ButtonPrimaryStory';
import ButtonSecondaryStory from '@/style-guide/ButtonSecondaryStory';
import ButtonTertiaryStory from '@/style-guide/ButtonTertiaryStory';
import ActionButtonStory from '@/style-guide/ActionButtonStory';
import IconButtonStory from '@/style-guide/IconButtonStory';
import BadgeStory from '@/style-guide/BadgeStory';
import AccordionStory from '@/style-guide/AccordionStory';
import AlertStory from '@/style-guide/AlertStory';
import CheckboxesStory from '@/style-guide/CheckboxesStory';
import RadioGroupStory from '@/style-guide/RadioGroupStory';
import DividerStory from '@/style-guide/DividerStory';
import DatePickerInput from '@/components/DatePicker';
import ModalStory from '@/style-guide/ModalStory';
import TabsStory from '@/style-guide/TabsStory';
import EnrollStatusStory from '@/style-guide/EnrollStatusStory';
import InputStory from '@/style-guide/InputStory';
import TypographyStory from '@/style-guide/TypographyStory';

export default function Home() {
    return (
        <main className={styles.main}>
            <Providers>
				<ComponentDisplayArea title='Typography (Fluid)'>
					<TypographyStory />
				</ComponentDisplayArea>

                <ComponentDisplayArea title='Primary Buttons'>
                    <ButtonPrimaryStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Secondary Buttons'>
                    <ButtonSecondaryStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Tertiary Buttons'>
                    <ButtonTertiaryStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Action Buttons'>
                    <ActionButtonStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Icon Buttons'>
                    <IconButtonStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Accordions'>
                    <AccordionStory />
                </ComponentDisplayArea>

				<ComponentDisplayArea title='Tabs'>
					<TabsStory />
				</ComponentDisplayArea>

                <ComponentDisplayArea title='Badges'>
                    <BadgeStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Alerts'>
                    <AlertStory />
                </ComponentDisplayArea>

				<ComponentDisplayArea title='Input'>
					<InputStory />
				</ComponentDisplayArea>

                <ComponentDisplayArea title='Date Picker'>
                    <DatePickerInput label='Start date of first payment' required={true} />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Checkboxes'>
                    <CheckboxesStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Radio Group'>
                    <RadioGroupStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Dividers'>
                    <DividerStory />
                </ComponentDisplayArea>

                <ComponentDisplayArea title='Modals/Dialogs'>
					<ModalStory />
				</ComponentDisplayArea>

				<ComponentDisplayArea title='Enrollment Status'>
					<EnrollStatusStory />
				</ComponentDisplayArea>

                <Image
                    src='/vercel.svg'
                    alt='Vercel Logo'
                    className={styles.vercelLogo}
                    width={100}
                    height={24}
                    priority
                />
            </Providers>
        </main>
    );
}
