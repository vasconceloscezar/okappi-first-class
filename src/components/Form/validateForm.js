const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function validateFields({ name, email, password, confirmPass }) {
  if (!name.trim()) return "Nome obrigatório";
  if (!email) return "Email obrigatório";
  if (emailRegex.test(email.toLocalLowerCase)) return "Email é inválido";
  if (!password) return "Senha é obrigatório";
  if (password.length < 6) return "Senha precisa ter 6 caracteres ou mais";
  if (!confirmPass) return "Confirmação de senha é obrigatório";
  if (confirmPass !== password) return "Senhas não batem";

  return null;
}
