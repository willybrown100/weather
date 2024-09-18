import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import Logo from '../components/Logo';
import useLogin from '../components/useLogin';
import LoadingSpinner from '../components/LoadingSpinner';

import { Link } from 'react-router-dom';
import MiniSpinner from '../components/MiniSpinner';

export default function Login() {
    const [toggle, setToggle] = useState(false);
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);
    const {mutate,isPending} = useLogin()
        const {
          register,
          handleSubmit,
          reset,
          formState: { errors },
        } = useForm();
        const onSubmit = function ({ email, password },e) {
        //   console.log(data);
        e.preventDefault()
          mutate({ email, password });
        };
  return (
    <div className="min-h-screen flex flex-col  signupBg justify-center p-3">
      <div className="md:bg-white md:px-6 md:py-9 md:rounded-lg md:w-[600px] md:m-auto ">
        <div className="flex flex-col gap-y-1 mb-14">
          <Logo />
          <h4 className="text-center mt-3 font-semibold capitalize">
            welcome, login to continue
          </h4>
        </div>
        <form
          className="w-full flex flex-col gap-y-6 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-y-2">
            <label className="font-semibold capitalize">your email</label>
            <input
              type="text"
              {...register("email")}
              placeholder="enter your email "
              className="placeholder:capitalize w-full rounded-full p-2 bg-transparent border border-stone-300 "
            />
          </div>

          <PasswordField
            register={register}
            open={open}
            toggleOpen={toggleOpen}
            label="your password"
            placeholder="enter your paswword"
          />
          <p className="capitalize font-semibold">
            don't have an account?{" "}
            <Link to="/" className="text-brand500  font-semibold">
              Sign up
            </Link>
          </p>

          <button className="capitalize bg-brand500 p-2 rounded-full text-white">
            {isPending ? <MiniSpinner /> : "continue"}
          </button>
        </form>
      </div>
    </div>
  );
}

const PasswordField = ({
  label,
  placeholder,
  register,
  error,
  errorMessage,
  open,
  toggleOpen,
}) => (
  <div className="flex flex-col gap-y-2">
    <label className="font-semibold capitalize">{label}</label>
    <div className="relative border border-stone-500 rounded-full ">
      <input
        type={!open ? "password" : "text"}
        className=" border-none outline-none bg-transparent p-2 w-full "
        placeholder={placeholder}
        {...register("password")}
        autoComplete="current-password"
      />
      <span className="absolute right-3 top-2 cursor-pointer">
        {open ? (
          <IoIosEyeOff
            className="cursor-pointer w-[2rem] h-[2rem] pb-[.8rem]"
            onClick={toggleOpen}
          />
        ) : (
          <IoIosEye
            className="cursor-pointer w-[2rem] h-[2rem] pb-[.8rem]"
            onClick={toggleOpen}
          />
        )}
      </span>
      {error && <span className="text-white">{errorMessage}</span>}
    </div>
  </div>
);
