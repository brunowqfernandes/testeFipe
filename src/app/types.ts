import { SelectChangeEvent } from "@mui/material";
import React from "react";

export interface DataItem {
    codigo: string;
    nome: string;
}

export interface SelectProps  {
    label: string;
    options: DataItem[];
    onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
    value: string;
    disabled?: boolean;
}

export interface VeichleItem {
    Valor: string;
    Marca: string;
    Modelo: string;
    AnoModelo: number;
}

export interface DataContextType {
    models: DataItem[];
    years: DataItem[];
    selectedBrand: string;
    selectedModel: string;
    selectedYear: string;
    setModels: React.Dispatch<React.SetStateAction<DataItem[]>>;
    setYears: React.Dispatch<React.SetStateAction<DataItem[]>>;
    setSelectedBrand: React.Dispatch<React.SetStateAction<string>>;
    setSelectedModel: React.Dispatch<React.SetStateAction<string>>;
    setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
}