import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { appRoutes } from '../../AppRoutes';
import { NavArrow } from './NavArrow';

export const BackArrow = (props: React.HTMLProps<HTMLDivElement>): React.ReactElement => {
  const { pathname } = useLocation();
  const stack = useRef<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    stack.current.push(pathname);
  }, [pathname]);

  const handleBack = () => {
    stack.current.pop();
    let prev = stack.current.pop();
    if (!prev) {
      return navigate('/');
    }

    const pokeApiIdx = prev.indexOf(appRoutes.pokeAPI.path);
    while (prev && pokeApiIdx > -1 && prev.length > appRoutes.pokeAPI.path.length) {
      prev = stack.current.pop();
    }

    navigate(prev ?? '/');
  };

  return <NavArrow onClick={handleBack} direction={'backward'} />;
};
