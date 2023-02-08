import { forwardRef } from 'react';
import { InputStyled, InputWrapper } from './Input.styled';

const Input = forwardRef((props, ref) => {
  const { label, type, placeholder, error, ...rest } = props;
  return (
    <InputWrapper>
      <InputStyled>
        {label}
        <input type={type} placeholder={placeholder} ref={ref} {...rest} />
      </InputStyled>
      <p>{error}</p>
    </InputWrapper>
  );
});
export default Input;
