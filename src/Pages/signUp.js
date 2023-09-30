import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { useUser } from "../components/partials/main/userContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (username && password) {
      login(username);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You have sucessfully created your account",
        showConfirmButton: false,
        timer: 1500
      });
      navigate("/");
      // Simulate automatic login after sign-up
    } else {
      setError("Username and password are required");
    }
  };

  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <main className="container h-full sm:p-10">
        <article className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <section className="w-full">
            <section className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <section className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container */}
                <aside className="px-4 md:px-0 lg:w-6/12">
                  <article className="md:mx-6 md:p-12">
                    {/* Logo */}
                    <header className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Welcome to Behance
                      </h4>
                    </header>

                    <form>
                      <p className="mb-4">Create an account</p>
                      {error && <p className="text-red-500 mb-3">{error}</p>}
                      {/* Username input */}
                      <TEInput
                        type="text"
                        label="Username"
                        className="mb-4"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      ></TEInput>

                      {/* Password input */}
                      <TEInput
                        type="password"
                        label="Password"
                        className="mb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      ></TEInput>

                      {/* Submit button */}
                      <section className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="light" className="w-full">
                          <button
                            onClick={handleSignUp}
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"
                            }}
                          >
                            Sign up
                          </button>
                        </TERipple>

                        {/* Forgot password link */}
                        <a href="#!">Terms and conditions</a>
                      </section>

                      {/* Register button */}
                      <section className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Have an account?</p>
                        <TERipple rippleColor="light">
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            <Link to="/login"> Login </Link>
                          </button>
                        </TERipple>
                      </section>
                    </form>
                  </article>
                </aside>

                {/* Right column container with background and description */}
                <aside
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)"
                  }}
                >
                  <section className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </section>
                </aside>
              </section>
            </section>
          </section>
        </article>
      </main>
    </section>
  );
}
