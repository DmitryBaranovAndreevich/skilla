import { FormEvent, useState } from 'react';

const useForm = <T>(initialState: T) => {
  const [state, setState] = useState<T>(initialState);

  const handleChange = (e: FormEvent) => {
    const input = e.target as HTMLInputElement;
    setState({ ...state, [input.name]: input.value });
  };

  return { state, handleChange, setState };
};

export default useForm;
