export const checkvalidData = (email, password) => {
  const isEmailValid =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/.test(password);

  if (!isEmailValid) return "Email is not valid";

  if (!isPasswordValid) {
    return "Password must contain uppercase, lowercase, number and at least 6 characters";
  }

  return null;
};
// export const checkvalidData =(email, password) => {
//     //
//        // const isemailvalid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
//          const isemailvalid =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(email);
//     const ispasswordvalid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
//     if(!isemailvalid) return "email is not valid";
//     if(!ispasswordvalid) return "password is not valid"
//     return "null";
// }