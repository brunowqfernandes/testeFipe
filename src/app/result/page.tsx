import { ResultContainer } from "@/styles/pages/result";
import { api } from "../lib/axios";
import { VeichleItem } from "../types";
import { Chip } from "@mui/material";
import Link from "next/link";

export default async function Result({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    const { data: veichleInfo } = await api.get<VeichleItem>(`/marcas/${searchParams.brand}/modelos/${searchParams.model}/anos/${searchParams.year}`);

    return (
        <ResultContainer>
            <h1>{`Tabela Fipe: Preço ${veichleInfo.Marca} ${veichleInfo.Modelo} ${veichleInfo.AnoModelo}`}</h1>
            <Chip 
                label={veichleInfo.Valor} 
                sx={{
                    color: '#fff',
                    backgroundColor: '#009d87',
                    fontSize: '2rem',
                    paddingX: 1,
                    height: 50,
                    borderRadius: 50,
                }}
            />
            <p>Este é o preço de compra do veículo</p>
            <Link href="/">
                Voltar
            </Link>
        </ResultContainer>
    )
}