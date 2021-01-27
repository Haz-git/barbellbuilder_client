import React from 'react';
import dayjs from 'dayjs';

//Styles:
import styled from 'styled-components';
import { PlayCircle } from '@styled-icons/boxicons-regular/PlayCircle';
import { Calendar } from '@styled-icons/boxicons-regular/Calendar';
import { Numbers } from '@styled-icons/remix-fill/Numbers';

const PlayIcon = styled(PlayCircle)`
    height: 4em;
    width: 4em;
    color: ${({ theme }) => theme.PlayIcon};
`;

const CalendarIcon = styled(Calendar)`
    height: 1.8em;
    width: 1.8em;
    color: ${({ theme }) => theme.PlayIcon};
    filter: invert(70%) sepia(51%) saturate(7494%) hue-rotate(244deg)
        brightness(120%) contrast(94%);
`;

const NumberIcon = styled(Numbers)`
    height: 1.8em;
    width: 1.8em;
    color: ${({ theme }) => theme.PlayIcon};
    filter: invert(26%) sepia(500%) saturate(5438%) hue-rotate(345deg)
        brightness(100%) contrast(104%);
`;

const ButtonContainer = styled.div``;

const PlayButton = styled.button`
    height: 100%;
    position: absolute;
    margin: auto;
    border: none;
    right: 0;
    top: 0;
    border-top-right-radius: 0.4em;
    padding: 0em 0.5em;
    box-shadow: rgba(0, 0, 0, 0.2) -10px 0px 5px;
    background: #368f1f;
    cursor: pointer;

    &:focus {
        outline: none;
        background: #6cdc4f;
    }

    &:hover {
        outline: none;
        background: #6cdc4f;
    }
`;

const WrapperContainer = styled.div`
    margin: 2em 0.2em;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 3px 8px;
`;

const MainContainer = styled.div`
    position: relative;
    border-top-left-radius: 0.4em;
    border-top-right-radius: 0.4em;
    padding: 1em 1em;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.ProgramCardBG};
`;

const HeaderContainer = styled.div`
    text-align: left;
`;

const NameHeader = styled.h2`
    text-align: left;
    font-family: 'Lato';
    color: ${({ theme }) => theme.ProgramCardHeader};
    font-size: 1.4em;
    font-weight: 900;
    text-shadow: 2px 2px 2px #14181f;
`;

const DescContainer = styled.div`
    font-family: 'Lato', 'Nunito';
    width: 84%;
    font-size: 0.9em;
    margin: 0.85em 0;
    text-align: left;
    /* text-justify: distribute;
    word-spacing: -2px; */
    font-weight: 500;
    color: ${({ theme }) => theme.ProgramCardDesc};
`;

const DetailLabel = styled.p`
    margin: 0 1em;
    font-size: 0.9em;
    font-weight: 700;
    font-family: 'Lato';
    color: ${({ theme }) => theme.ProgramCardDesc};
    text-shadow: 2px 2px 2px #14181f;
`;

const DateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: inherit;
    border: none;
    margin: 0.2em 0;
`;

const ExercisesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: inherit;
    border: none;
    margin: 0.2em 0;
`;

const ButtonPlayContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1em 1em;
    background: ${({ theme }) => theme.LowerContainerBG};
    border-bottom-left-radius: 0.4em;
    border-bottom-right-radius: 0.4em;
`;

const DeleteButton = styled.button`
    border: none;
    border-radius: 0.4em;
    padding: 0.8em 1.3em;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 3px 8px;
    background: #90130c;
    font-size: 1em;
    color: white;
    cursor: pointer;

    &:focus {
        outline: none;
        background: #cb484f;
    }

    &:hover {
        outline: none;
        background: #cb484f;
    }
`;

const ConfigureButton = styled.button`
    border: none;
    border-radius: 0.4em;
    padding: 0.8em 1.3em;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 3px 8px;
    background: #c99521;
    font-size: 1em;
    color: white;
    cursor: pointer;

    &:focus {
        outline: none;
        background: #ffd45b;
    }

    &:hover {
        outline: none;
        background: #ffd45b;
    }
`;

const EditButton = styled.button`
    border: none;
    border-radius: 0.4em;
    padding: 0.8em 1.3em;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 3px 8px;
    background: #3041ad;
    font-size: 1em;
    color: white;
    cursor: pointer;

    &:focus {
        outline: none;
        background: #346d98;
    }

    &:hover {
        outline: none;
        background: #346d98;
    }
`;

const ProgramCard = ({
    name,
    desc,
    programId,
    programExercises,
    dateCreated,
}) => {
    const findNumberOfExercises = () => {
        return programExercises.length;
    };

    const convertISOToTimeStamp = () => {
        if (dateCreated !== undefined && dateCreated !== null) {
            return dayjs(dateCreated).format('MM/DD/YYYY');
        } else {
            return null;
        }
    };

    return (
        <>
            <WrapperContainer>
                <MainContainer>
                    <PlayButton>
                        <PlayIcon />
                    </PlayButton>
                    <HeaderContainer>
                        <NameHeader>{name}</NameHeader>
                    </HeaderContainer>
                    <DescContainer>
                        <p>{desc}</p>
                    </DescContainer>
                    <ExercisesContainer>
                        <CalendarIcon />
                        <DetailLabel>
                            Created On: {convertISOToTimeStamp()}
                        </DetailLabel>
                    </ExercisesContainer>
                    <DateContainer>
                        <NumberIcon />
                        <DetailLabel>
                            Total Exercises: {findNumberOfExercises()}
                        </DetailLabel>
                    </DateContainer>
                </MainContainer>
                <ButtonPlayContainer>
                    <DeleteButton>Delete</DeleteButton>
                    <EditButton>Edit</EditButton>
                    <ConfigureButton>Configure</ConfigureButton>
                </ButtonPlayContainer>
            </WrapperContainer>
        </>
    );
};

export default ProgramCard;
