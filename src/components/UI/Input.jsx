import { InputStyled } from './Input.styled';

const Input = ({ label, id, type, placeholder }) => {
  return (
    <>
      <InputStyled>
        {label}
        <input id={id} type={type} placeholder={placeholder} />
      </InputStyled>
    </>
  );
};
export default Input;
