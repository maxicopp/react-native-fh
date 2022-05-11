import { useEffect, useState } from 'react';
import cafeApi from '../api/cafeApi';
import { CategoriesResponse, Categoria } from '../interfaces/appInterfaces';

export const useCategories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<Categoria[]>([]);
  useEffect(() => {
    getcategories();
  }, []);
  const getcategories = async () => {
    const resp = await cafeApi.get<CategoriesResponse>('/categorias');
    setCategories(resp.data.categorias);
    setIsLoading(false);
  };
  return {
    isLoading,
    categories,
  };
};
