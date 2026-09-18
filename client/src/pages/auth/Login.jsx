import CommonForm from "@/components/common/Form";
import { toast } from "@/components/ui/toast";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";

const initialState = {
  email: "",
  password: "",
};

const AuthLogin = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.add({
          title: data?.payload?.message,
        });
      } else {
        toast.add({
          type: "error",
          title: data?.payload?.message,
          priority: "high",
        });
      }
      console.log(data.payload);
    });
  }

  return (
    <div className="mx-auto w-full max-w-md sapce-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="my-2">
          Don't have an account
          <Link
            to="/auth/register"
            className="font-medium ml-2 text-primary hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default AuthLogin;
