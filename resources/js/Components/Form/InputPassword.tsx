import React, { useState } from 'react';
import FieldGroup from './FieldGroup';
import TextInput from './TextInput';
import { InputPasswordProps } from '@/types';

const InputPassword: React.FC<InputPasswordProps> = ({
  label = 'Password',
  handleChange,
  error,
  ...attributes
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <FieldGroup label="Password" name="password" error={error}>
      <div className="relative">
        <TextInput
          type={showPassword ? 'text' : 'password'}
          {...attributes}
          onChange={handleChange}
          error={error}
          className="pr-10"
        />

        <button
          type="button"
          onClick={handleShowPassword}
          className="absolute inset-y-0 right-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500"
        >
          <svg
            className="shrink-0 size-3.5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {showPassword ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </>
            ) : (
              <>
                <line x1="2" x2="22" y1="2" y2="22"></line>
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </>
            )}
          </svg>
        </button>
      </div>
    </FieldGroup>
  );
};

export default InputPassword;
