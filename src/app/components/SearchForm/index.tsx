'use client'
import { useData } from "@/app/context/DataContext";
import { FormContainer } from "@/styles/components/SearchForm";
import { Button, SelectChangeEvent } from "@mui/material";
import { SelectField } from "../select";
import { DataItem } from "@/app/types";
import { api } from "@/app/lib/axios";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface modelsResponse {
  anos: DataItem[],
  modelos: DataItem[],
}
export function SearchForm ({brands}: {brands: DataItem[]})  {
  const {
    models, setModels, years, setYears,
    selectedBrand, setSelectedBrand, selectedModel, setSelectedModel, selectedYear, setSelectedYear
  } = useData();

  const router = useRouter()

  useEffect(() => {
    if(selectedBrand) {
      api.get<modelsResponse>(`/marcas/${selectedBrand}/modelos`)
      .then(res => {
        setModels(res.data.modelos)
        setYears([])
      });
    }
  }, [selectedBrand])
  
  useEffect(() => {
    if(selectedModel) {
      api.get<DataItem[]>(`/marcas/${selectedBrand}/modelos/${selectedModel}/anos`)
      .then(res => {
        setYears(res.data)
      })
    }
  }, [selectedModel])

  const handleBrandChange = (e: SelectChangeEvent) => {
    const brandId = e.target.value;
    setSelectedBrand(brandId);
    setSelectedModel('');
    setSelectedYear('');
  };
  
  const handleModelChange = (e: SelectChangeEvent) => {
    const modelId = e.target.value;
    setSelectedModel(modelId);
    setSelectedYear('');
  };
  
  const handleYearChange = (e: SelectChangeEvent) => {
    setSelectedYear(e.target.value);
  };
  
  const handleFinalSearch = () => {
    if (selectedBrand && selectedModel && selectedYear) {
      router.push(`/result?brand=${selectedBrand}&model=${selectedModel}&year=${selectedYear}`) 
    }
  };

  return (
    <FormContainer>
      <SelectField
        label="Marca"
        options={brands}
        onChange={handleBrandChange}
        value={selectedBrand}
      />
      <SelectField
        label="Modelo"
        options={models}
        onChange={handleModelChange}
        value={selectedModel}
        disabled={!models.length}
      />
      {( years.length > 0) && (
        <>
          <SelectField
            label="Ano"
            options={years}
            onChange={handleYearChange}
            value={selectedYear}
          />
          <Button 
            size="large" 
            variant="contained" 
            color="secondary"
            onClick={handleFinalSearch}
            disabled={!selectedYear}
          >
            Consultar preço
          </Button>
        </>
      )}
    </FormContainer>
  )
}