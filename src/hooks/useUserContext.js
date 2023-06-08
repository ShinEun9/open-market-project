import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const useUserContext = () => {
  //useContext를 통해 전역 context에 접근
  const context = useContext(UserContext);

  // 이제 context안에는 AuthContext에서 반환하는 state 값(user), dispatch 함수 두 가지가 들어있음
  return context;
};
