import { HomeContainer } from "@/styles/pages/home";
import { api } from "./lib/axios";
import { DataItem } from "./types";
import { SearchForm } from "./components/SearchForm";
import { DataProvider } from "./context/DataContext";

const fetchBrands = async (): Promise<DataItem[]> => {
  const res = await api.get<DataItem[]>('/marcas');
  return res.data;
}

export default async function Home() {

  const brands = await fetchBrands();  

  return (
    <HomeContainer>
      <h1>Tabela Fipe</h1>
      <h2>Consulte o valor de um veículo de forma gratuita</h2>
      <DataProvider>
        <SearchForm brands={brands}/>
      </DataProvider>
    </HomeContainer>
  );
}
