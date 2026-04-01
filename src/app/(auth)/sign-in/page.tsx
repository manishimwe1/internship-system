"use client";

import { SignIn } from "@clerk/react";
import React from "react";

const SignInpage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
  );
};

export default SignInpage;
