import React, { useState } from 'react';
import { RegisterForm } from '../../business/model';

export default function Register() {
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    email: '',
    username: '',
    password: '',
  });
  return (
    <div>
      <div>Register</div>
    </div>
  );
}
