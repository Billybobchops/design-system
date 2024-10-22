import { useRef, useEffect } from 'react';
import classes from './Modal.module.scss';
import variables from '@/app/variables.module.scss';
import { MenuCloseLarge } from './Symbols';
import ButtonSecondary from './ButtonSecondary';
import ButtonSimple from './ButtonSimple';
import VisuallyHidden from './VisuallyHidden';

interface ModalProps {
    handleModalAction?: () => void;
    actionButtonText?: string;
    children: React.ReactNode;
    color?: string;
    hasAction?: boolean;
    title?: string;
    TriggerElement: React.FC<{ clickHandler: () => void }>;
}

const Modal: React.FC<ModalProps> = ({
    handleModalAction,
    actionButtonText,
    hasAction = false,
    children,
    color = variables.themeA4,
    title,
    TriggerElement,
}) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const scrollPositionRef = useRef(0);

    const openDialog = () => {
        scrollPositionRef.current = window.scrollY;
        dialogRef.current?.showModal();
        document.body.style.top = `-${scrollPositionRef.current}px`;
        document.body.classList.add('no-scroll');
    };

    const closeDialog = () => {
        dialogRef.current?.close();
        document.body.classList.remove('no-scroll');
        document.body.style.top = '';
        window.scrollTo(0, scrollPositionRef.current);
    };

    useEffect(() => {
        const dialog = dialogRef.current;
        const handleBackdropClick = (e: MouseEvent) => {
            const dialogDimensions = dialog?.getBoundingClientRect();

            if (
                dialogDimensions &&
                (e.clientX < dialogDimensions.left ||
                    e.clientX > dialogDimensions.right ||
                    e.clientY < dialogDimensions.top ||
                    e.clientY > dialogDimensions.bottom)
            ) {
                closeDialog();
            }
        };

        dialog?.addEventListener('close', closeDialog);
        dialog?.addEventListener('click', handleBackdropClick);

        return () => {
            dialog?.removeEventListener('close', closeDialog);
            dialog?.removeEventListener('click', handleBackdropClick);
        };
    }, []);

    return (
        <div className={classes.dialog}>
            <TriggerElement clickHandler={openDialog} />
            <dialog ref={dialogRef}>
                <button className={classes.menuClose} onClick={closeDialog}>
                    <span aria-hidden="true"><MenuCloseLarge fill={color} /></span>
                    <VisuallyHidden>Close modal</VisuallyHidden>
                </button>
				
                <div className={`${classes.dialogGrid} ${hasAction ? '' : classes.textCenter}`}>
                    <div>
                        {title && (<h1 className={classes.modalTitle}>{title}</h1>)}
                        {children}
                    </div>

					<div className={`${hasAction ? classes.actionBar : ''}`}>
						<div className={`${classes.actions} ${hasAction ? '' : classes.buttonCenter}`}>
							{hasAction && (
								<>
									<ButtonSimple
										text='cancel'
										clickHandler={closeDialog}
										disabled={false}
										variant='blue'
									/>
									<ButtonSecondary
										disabled={false}
										clickHandler={handleModalAction}
										text={actionButtonText ? actionButtonText : ''}
										variant='blue'
									/>
								</>
							)}
							{!hasAction && (
								<ButtonSecondary
									disabled={false}
									clickHandler={closeDialog}
									text='Close'
									variant='blue'
								/>
							)}
						</div>
					</div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;
