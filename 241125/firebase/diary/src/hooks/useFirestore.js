import { collection, addDoc } from "firebase/firestore";
import { useReducer } from "react";
import { appFireStore } from "../firebase/config";
import { timestamp } from "../firebase/config";

const initState = {
  document: null,
  isPending: false, // 통신 중?
  error: null, // 에러?
  success: false, // 기능이 성공? 실패?
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "addDoc":
      return {
        ...state,
        document: action.payload,
        success: true,
        error: null,
      };
    case "isPending":
      return {
        isPending: true,
        document: null,
        error: null,
        success: false,
      };
    case "error":
      return {
        isPending: false,
        document: null,
        error: action.payload,
        success: false,
      };
    case "deleteDoc":
      return { isPending: false, document: null, success: true, error: null };
    default:
      return state;
  }
};

export const useFirestore = (transaction) => {
  const [response, dispatch] = useReducer(storeReducer, initState);

  const colRef = collection(appFireStore, transaction);

  // 컬렉션에 Document를 추가함
  const addDocument = async (doc) => {
    dispatch({ type: "isPending" });

    try {
      const createdTime = timestamp.fromDate();
      const docRef = await addDoc(colRef, { ...doc, createdTime });
      dispatch({ type: "addDoc", payload: docRef });
    } catch (error) {
      dispatch({ type: "error", payload: error });
    }
  };

  const deleteDocument = async (id) => {
    // 컬렉션에서 문서를 제거합니다.
    dispatch({ type: "isPending" });
    try {
      const docRef = await deleteDoc(doc(colRef, id));
      dispatch({ type: "deleteDoc", payload: docRef });
    } catch (e) {
      dispatch({ type: "error", payload: e.message });
    }
  };

  return { addDocument, deleteDocument, response };
};
