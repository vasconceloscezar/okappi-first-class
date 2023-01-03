import React, { useEffect, useState } from "react";
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormMessage,
  FormButton,
  FormTitle,
} from "./FormStyles";
import { Container } from "../../globalStyles";
import validateFields from "./validateForm";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const invalidFields = validateFields({ name, email, password, confirmPass });

    if (invalidFields) {
      setError(invalidFields);
      return;
    }
    resetFields();
    setSuccess("Obrigado por se cadastrar!");
  };

  const resetFields = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPass("");
    setError(null);
  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    { label: "Nome", value: name, onChange: (e) => setName(e.target.value), type: "text" },
    { label: "Email", value: email, onChange: (e) => setEmail(e.target.value), type: "email" },
    {
      label: "Senha",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      type: "password",
    },
    {
      label: "Confirmação de senha",
      value: confirmPass,
      onChange: (e) => setConfirmPass(e.target.value),
      type: "password",
    },
  ];

  useEffect(() => {
    document.title = "Paradonhas - Cadastro";
  }, []);

  return (
    <FormSection>
      <Container>
        <FormRow>
          <FormColumn small>
            <FormTitle>Cadastro</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
              {formData.map((el, index) => (
                <FormInputRow key={index}>
                  <FormLabel>{el.label}</FormLabel>
                  <FormInput
                    type={el.type}
                    placeholder={`Enter your ${el.label.toLocaleLowerCase()}`}
                    value={el.value}
                    onChange={el.onChange}
                  />
                </FormInputRow>
              ))}

              <FormButton type="submit">SignUp</FormButton>
            </FormWrapper>
            {error && (
              <FormMessage variants={messageVariants} initial="hidden" animate="animate" error>
                {error}
              </FormMessage>
            )}
            {success && (
              <FormMessage variants={messageVariants} initial="hidden" animate="animate">
                {success}
              </FormMessage>
            )}
          </FormColumn>
        </FormRow>
      </Container>
    </FormSection>
  );
}
