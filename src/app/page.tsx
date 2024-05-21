"use client";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import { addUser } from "./action";

export type ActionResult = { message: string; code: number };

const initialState: ActionResult = {
  message: "",
  code: 0,
};

export default function Home() {
  const [state, formAction] = useFormState(addUser, initialState);

  useEffect(() => {
    if (state.code === 200) {
      toast(state.message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
      });
    } else if (state.code > 400) {
      toast(state.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [state]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={formAction} className="flex flex-col gap-4 text-green-500">
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <button type="submit" className="rounded bg-white text-black ">
          add user
        </button>
      </form>
    </main>
  );
}
