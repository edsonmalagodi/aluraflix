import React from 'react';
import Proptypes from 'prop-types';
import styled, {css} from 'styled-components';

const Input=styled.input`
    background: #53585D;
    color: #F5F5F5;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;

    outline: 0;
    border:0 ;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #53585D;
    
    padding: 16px 16px;
    margin-bottom: 45px;

    resize: none;
    border-radius: 4px;
    transition: border-color .3s;

    &:focus{
        border-bottom-color: var(--primary);
    }
    &:focus:not([type="color"]) + span{
        transform: scale(.6) translateY(-10px);// diminui a font e sobe dentro do text
    }

    ${function({hasValue}){        
        return hasValue && css` //se tiver valor ele vai retornar o segundo
            &:focus:not([type="color"]) + span{
            transform: scale(.6) translateY(-10px);// diminui a font e sobe dentro do text
        }
      `;       
    }
}
`;
const Label = styled.label`

`;
Label.Text = styled.span``;

const FormFieldWrapper = styled.div`

`;

function FormField({label, type, name, value, onChange}){
    const fieldId = `id_${name}`;
    const isTypeTextarea = type === 'textarea';
    const tag = type === isTypeTextarea ? 'textarea' : 'input';
    const hasValue = value.length;
    return(
        <div>
            <Label
                htmlFor={fieldId}
            >
                <Label.Text>
                    {label}:
                </Label.Text>                
                <Input
                    as="textarea"
                    id={fieldId}
                    type={type}
                    name={name}
                    hasValue={hasValue}
                    value={value}
                    onChange={onChange}
                />    
            </Label>
        </div>
    )
}
FormField.defaultProps={
    type: 'text',
    value: '',
    onChange: () =>{},
};

FormField.prototype={
    label: Proptypes.string.isRequired, 
    type: Proptypes.string, 
    name: Proptypes.string.isRequired, 
    value: Proptypes.string, 
    onChange: Proptypes.func,
};
export default FormField;