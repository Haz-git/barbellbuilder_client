import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';
import VerifyError from './VerifyError';

//Styles:

export const InputFieldContainer = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: left;

    @media only screen and (max-width: 650px) and (orientation: portrait) {
        padding-top: 4px;
        padding-bottom: 4px;
    }

    @media only screen and (max-width: 850px) and (orientation: landscape) {
        padding-top: 4px;
        padding-bottom: 4px;
    }
`;

export const StyledLabel = styled.label`
    font-family: 'Nunito', sans-serif, Helvetica;
    font-weight: 300;
    font-size: 17px;
    color: #293241;

    @media only screen and (max-width: 650px) {
        font-size: 13px;
    }

    @media only screen and (max-width: 850px) and (orientation: landscape) {
        font-size: 13px;
    }
`;

export const StyledField = styled(Field)`
    width: 100%;
    padding: 12px 15px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-sizing: border-box;

    @media only screen and (max-width: 650px) {
        height: 28px;
        margin: 4px 0;
    }

    @media only screen and (max-width: 850px) and (orientation: landscape) {
        height: 35px;
        margin: 4px 0;
    }
`;

//Render:

const InputField = ({
    formName,
    componentType,
    label,
    errorTag,
    htmlType,
    renderError,
}) => {
    if (htmlType !== undefined) {
        return (
            <InputFieldContainer>
                <StyledLabel>{label}</StyledLabel>
                <StyledField
                    name={formName}
                    component={componentType}
                    type={htmlType}
                    autoComplete="off"
                />
                <VerifyError title={errorTag} render={renderError} />
            </InputFieldContainer>
        );
    } else {
        return (
            <InputFieldContainer>
                <StyledLabel>{label}</StyledLabel>
                <StyledField
                    name={formName}
                    component={componentType}
                    autoComplete="off"
                />
                <VerifyError title={errorTag} render={renderError} />
            </InputFieldContainer>
        );
    }
};

export default InputField;
