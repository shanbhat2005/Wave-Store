import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  loginUserAction,
  registerUserAction,
} from "../states/auth/authActions";
export const useAuthHooks = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const handleRegister = async (data) => {
    const result = await dispatch(registerUserAction(data));
    if (registerUserAction.fulfilled.match(result)) {
      navigate("/home");
    }
  };
  const handleLogin = async (data) => {
    const result = await dispatch(loginUserAction(data));
    if (loginUserAction.fulfilled.match(result)) {
      navigate("/home");
    }
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    handleRegister,
    handleLogin,
  };
};
