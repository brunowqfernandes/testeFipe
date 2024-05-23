'use client'
import { createContext, useContext, useState, ReactNode } from 'react';
import { DataContextType, DataItem, VeichleItem } from '../types';

const DataContext = createContext<DataContextType | undefined>(undefined);
interface DataProviderProps {
  children: ReactNode,
}
export const DataProvider = ({ children }: DataProviderProps) => {
  const [models, setModels] = useState<DataItem[]>([]);
  const [years, setYears] = useState<DataItem[]>([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  return (
    <DataContext.Provider value={{
      models, years, selectedBrand, selectedModel, selectedYear,
      setModels, setYears, setSelectedBrand, setSelectedModel, setSelectedYear
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};