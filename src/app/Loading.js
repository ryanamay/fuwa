"use client"
import React, { useState } from 'react';
import Image from "next/image";
import { FadeLoader } from 'react-spinners';

const Loading = () => {

  return (
    <div className="min-h-screen min-w-screen flex flex-col gap-2 bg-white items-center justify-center">
    <Image src="fuwa_dark.svg" alt="logo" width={50} height={50} className='loading' />
    <h1 className="text-black text-xs font-bold uppercase"> Loading</h1>
    </div>
  );
};

export default Loading;
