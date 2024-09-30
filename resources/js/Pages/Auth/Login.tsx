import React from 'react';
import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import Logo from '@/Components/Logo/Logo';
import SubmitButton from '@/Components/Button/SubmitButton';
import TextInput from '@/Components/Form/TextInput';
import FieldGroup from '@/Components/Form/FieldGroup';
import { CheckboxInput } from '@/Components/Form/CheckboxInput';

export default function LoginPage() {
  const { data, setData, errors, post, processing } = useForm({
    email: 'johndoe@example.com',
    password: 'secret',
    remember: true
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    post(route('login.store'));
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-indigo-600">
      <Head title="Login" />
      <div className="hidden lg:flex items-center justify-center h-full  mt-[100px] mr-[200px]">
        <img src="/assets/login.png" alt="Login" className="max-w-380" />
      </div>

      <div className="w-full max-w-md">
        <div className="flex items-center justify-center">
          <Logo
            className="block w-full max-w-xs mx-auto text-white fill-current"
            height={50}
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 overflow-hidden bg-white rounded-lg shadow-xl"
        >
          <div className="px-10 py-12">
            <h2 className="text-3xl font-bold text-center text-gray-600 hover:text-gray-700">
              Hi, Welcome Back!
            </h2>
            <div className="w-24 mx-auto mt-6 border-b-2" />
            <div className="grid gap-6">
              <FieldGroup label="Email" name="email" error={errors.email}>
                <TextInput
                  name="email"
                  type="email"
                  error={errors.email}
                  value={data.email}
                  onChange={e => setData('email', e.target.value)}
                />
              </FieldGroup>

              <FieldGroup
                label="Password"
                name="password"
                error={errors.password}
              >
                <TextInput
                  type="password"
                  error={errors.password}
                  value={data.password}
                  onChange={e => setData('password', e.target.value)}
                />
              </FieldGroup>

              <FieldGroup>
                <CheckboxInput
                  label="Remember Me"
                  name="remember"
                  id="remember"
                  checked={data.remember}
                  onChange={e => setData('remember', e.target.checked)}
                />
              </FieldGroup>
            </div>
          </div>

          <div className="flex items-center justify-center px-10 py-4 bg-gray-100 border-t border-gray-200 w-full">
            <SubmitButton
              name="Sign In"
              type="submit"
              loading={processing}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded shadow-md shadow-purple-600/50 w-full justify-center"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
