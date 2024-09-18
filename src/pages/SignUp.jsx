import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import Logo from '../components/Logo';
import { signUpUser } from '../services/weatherApi';
import useSignUp from '../components/useSignUp';
import { Link } from 'react-router-dom';

export default function SignUp() {
    const [toggle, setToggle] = useState(false);
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);
    const {mutate,isPending}=useSignUp()
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    const onSubmit = function({name,email,password},e){
      e.preventDefault()
      console.log({ name, email, password });
      mutate({ name, email, password });
    }
  return (
    <div className="min-h-screen flex flex-col  signupBg justify-center p-3">
      <div className="md:bg-white md:px-6 md:py-10 md:rounded-lg md:w-[600px] md:m-auto ">
        <div className='flex flex-col items-center gap-y-2 mb-14 md:mb-10 '>

      <Logo/>
        <h4 className="text-center mt-3 font-semibold capitalize">
        signup to get started
        </h4>
        </div>
        <form className="w-full flex flex-col gap-y-3 " onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-y-2">
            <label className="font-semibold capitalize">your name</label>
            <input
              type="text"
              placeholder="enter your name "
              {...register("name")}
              className="placeholder:capitalize w-full rounded-full p-2 bg-transparent border border-stone-300 "
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="font-semibold capitalize">your email</label>
            <input
              type="email"
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
          />
<p className='capitalize font-semibold'>already have an account? <Link to="/login" className='text-brand500 font-semibold'>login</Link></p>
          <button className="capitalize bg-brand500 p-2 rounded-full text-white" disabled={isPending}>
           submit
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