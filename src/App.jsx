import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import './App.css'
import { Header } from './Header';

const schema = z.object({
  name: z.string().min(1, "O campo nome é obrigatório"),
  email: z.string().email("Digite um email válido").min(1, "O campo email é obrigatório"),
  username: z.string().min(3, "O username deve ter pelo menos 3 caracteres")
    .max(5, "O username deve ter no máximo 5 caracteres"),
  phone: z.string().min(1, "Campo obrigatório").refine((value)=>/^\d{2} ?\d{9}$/.test(value), {
    message: "Digite um telefone valido no formato DD + 9 numeros",
  })
});

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  function handleSave(data){
    console.log(data);
    
  }


  return (
    <div className="container">
      <h1>React</h1>
      <Header/>

      <form className="form" onSubmit={handleSubmit(handleSave)}>
        <input
          type="text"
          placeholder="Digite seu nome..."
          className="input"
          {...register("name", { required:true })}
          id='name'
        />
        { errors.name && <p className='error' >{ errors.name.message }</p> }

        <input
          type="text"
          placeholder="Digite seu email..."
          className="input"
          {...register("email", { required:true })}
          id='email'
        />
        { errors.email && <p className='error' >{ errors.email.message }</p> }

        <input
          type="text"
          placeholder="Digite seu username..."
          className="input"
          {...register("username", { required:true, maxLength:5 })}
          id='username'
        />
        { errors.username && <p className='error' >{ errors.username.message }</p> }
        
        <input
          type="text"
          placeholder="Digite seu telefone..."
          className="input"
          {...register("phone", { required:true, maxLength:5 })}
          id='phone'
        />
        { errors.phone && <p className='error' >{ errors.phone.message }</p> }


        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
