'use client';
import Providers from '@/components/Providers';
import styles from './page.module.css';
import ComponentDisplayArea from '@/style-guide/ComponentDisplayArea';
import ButtonPrimaryStory from '@/style-guide/ButtonPrimaryStory';
import ButtonSecondaryStory from '@/style-guide/ButtonSecondaryStory';
import ButtonTertiaryStory from '@/style-guide/ButtonTertiaryStory';
import LinkIconButtonStory from '@/style-guide/LinkIconButtonStory';
import IconButtonStory from '@/style-guide/IconButtonStory';
import BadgeStory from '@/style-guide/BadgeStory';
import AccordionStory from '@/style-guide/AccordionStory';
import AlertStory from '@/style-guide/AlertStory';
import DividerStory from '@/style-guide/DividerStory';
import ModalStory from '@/style-guide/ModalStory';
import TabsStory from '@/style-guide/TabsStory';
import EnrollStatusStory from '@/style-guide/EnrollStatusStory';
import InputStory from '@/style-guide/InputStory';
import TypographyStory from '@/style-guide/TypographyStory';
import ICLink from '@/components/ICLink';
import ButtonSimpleStory from '@/style-guide/ButtonSimpleStory';
import ProgressIndicatorStory from '@/style-guide/ProgressIndicatorStory';

export default function Home() {
    return (
        <main className={styles.main}>
            <Providers>
				<ComponentDisplayArea title='Typography (Fluid)'>
					<TypographyStory />
				</ComponentDisplayArea>

				<ComponentDisplayArea title='Inline Link'>
					<ICLink>This is a link</ICLink>
				</ComponentDisplayArea>

				<ComponentDisplayArea title='Simple Button'>
					<ButtonSimpleStory />
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

                <ComponentDisplayArea title='Link Icon Buttons'>
                    <LinkIconButtonStory />
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

				<ComponentDisplayArea title='Form Inputs'>
					<InputStory />
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

				<ComponentDisplayArea title='Progress Indicator'>
					<ProgressIndicatorStory />
				</ComponentDisplayArea>
            </Providers>
        </main>
    );
}
