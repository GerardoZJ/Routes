import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', {
      replace: true,
      state: { logged: false },
    });
  };

  return (
    <>
      <header>
        <h1>
          <Link to='/'>Logo</Link>
          <Link to='/acercade'>Acerca De</Link>
          <Link to='/contacto'>Contacto</Link>
          <Link to='/servicios'>Servicios</Link>

          {}
          {state?.logged && (
            <>
              <Link to='/perfil'>Perfil</Link>
              <Link to='/configuracion'>Configuracion</Link>
              <Link to='/reportes'>Reportes</Link>
            </>
          )}
        </h1>

        {state?.logged ? (
          <div className='user'>
            <span className='username'>{state?.name}</span>
            <button className='btn-logout' onClick={onLogout}>
              Cerrar sesión
            </button>
          </div>
        ) : (
          <nav>
            <Link to='/login'>Iniciar sesión</Link>
            <Link to='/register'>Registrarse</Link>
            <button className='btn-logout' onClick={onLogout}>
              Cerrar sesión
            </button>
          </nav>
        )}
      </header>
    </>
  );
};
