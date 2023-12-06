import { useEffect, useState } from 'react';

export function useHelperFunction(val) {
  const [validHook, setValidHook] = useState(val);

  useEffect(() => {
    console.log("hi useEffect in custom hook")
  })


  return [validHook, setValidHook]
}