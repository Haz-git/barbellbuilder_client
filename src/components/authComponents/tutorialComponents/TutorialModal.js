import React from 'react';

//Styles:
import styled, { keyframes } from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { EmojiHeartEyesFill } from '@styled-icons/bootstrap/EmojiHeartEyesFill';

import {
    ModalContainer,
    ModalHeader,
    ModalDesc,
} from '../dashboardComponents/UserPowerStatCard';

import {
    CustomConfirmButton,
    CustomCancelButton,
} from '../settingsDashboard/SettingsModal';

const moveUp = keyframes`
    from {
        transform: translate(-50%, 100%);
    }

    to {
        transform: translate(-50%, -50%);
    }
`;

const IconContainer = styled.div`
    margin: 0.7em 0;
    text-align: center;
`;

const HappyIcon = styled(EmojiHeartEyesFill)`
    height: 4.5em;
    width: 4.5em;
    color: #fdbc3d;
`;

const TutorialModalContainer = styled(ModalContainer)`
    top: 45%;
    width: 92.5%;
    animation: ${moveUp} 0.8s ease;
`;

const TutorialModalHeader = styled(ModalHeader)`
    white-space: normal;
    margin: 0.5em 0;
`;

const TutorialModalDescHeader = styled(ModalDesc)`
    white-space: nowrap;
    text-align: center;
`;

const TutorialModalDesc = styled(ModalDesc)`
    white-space: normal;
    word-break: break-word;
    text-align: left;
    hyphens: auto;
`;

const ButtonContainer = styled.div`
    display: block;
    margin: 1em 0;
`;

const ButtonDivider = styled.div`
    margin: 1em 0;
`;

const TutorialModal = ({
    openBoolean,
    closeFunction,
    buttonSubmitFunction,
    firstName,
}) => {
    return (
        <>
            <Modal
                aria-labelledby="modal for requesting user tutorial mode"
                aria-describedby="modal for requesting user tutorial mode"
                open={openBoolean}
                onClose={closeFunction}
                disableBackdropClick
                disableEscapeKeyDown
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openBoolean}>
                    <TutorialModalContainer>
                        <TutorialModalHeader>
                            Welcome New GymJotter!
                        </TutorialModalHeader>
                        <TutorialModalDescHeader>
                            Hey there, <em>{firstName}</em> !
                        </TutorialModalDescHeader>
                        <IconContainer>
                            <HappyIcon />
                        </IconContainer>
                        <TutorialModalDescHeader>
                            We're very glad you decided to join us.
                        </TutorialModalDescHeader>
                        <TutorialModalDesc>
                            Our goal is to improve your workout flow no matter
                            how you train.
                        </TutorialModalDesc>
                        <TutorialModalDesc>
                            We have many features, and so we're hoping our
                            tutorial makes using GymJot easier!
                        </TutorialModalDesc>
                        <ButtonContainer>
                            <CustomConfirmButton
                                size="large"
                                variant="contained"
                                color="primary"
                                onClick={buttonSubmitFunction}
                            >
                                Yes, Take Me To The Tutorial
                            </CustomConfirmButton>
                            <ButtonDivider />
                            <CustomCancelButton
                                size="large"
                                variant="contained"
                                onClick={closeFunction}
                            >
                                No, Don't Show Me This Again
                            </CustomCancelButton>
                        </ButtonContainer>
                    </TutorialModalContainer>
                </Fade>
            </Modal>
        </>
    );
};

export default TutorialModal;