'use client';
import { useEffect, useState } from "react";

const useHelloWorld = () => {
  const [text, setText] = useState("hello bang");

  useEffect(()=>{
    setTimeout(()=>{
      setText("hello world");
    }, 2000)
  }, [])
  return {
    text
  }
}

export default useHelloWorld;