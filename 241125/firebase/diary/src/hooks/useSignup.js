import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { appAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  // 에러가 있는지 없는지
  const [error, setError] = useState(null);
  // 서버와 통신 중인지 판단하는 상태
  const [isPending, setIsPending] = useState(false);
  // 위 2개는 서버랑 통신할 때 기본적으로 발생하는 두 가지 상태

  const { dispatch } = useAuthContext();

  const signup = (email, password, displayName) => {
    setIsPending(true);

    createUserWithEmailAndPassword(appAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...

        if (!user) {
          throw new Error("회원가입에 실패했습니다!");
        }

        updateProfile(appAuth.currentUser, { displayName })
          .then(() => {
            dispatch({ type: "login", payload: user });
            setIsPending(false);
            setError(null);
          })
          .catch((error) => {
            setIsPending(false);
            setError(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setIsPending(false);
        setError(error);
        console.error(errorCode, errorMessage);
      });
  };

  return { error, isPending, signup };
};
