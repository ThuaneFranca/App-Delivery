import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import Constants from 'expo-constants';
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantVerticalList } from "../components/list";

const statusBarHeigth = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
      style={{flex: 1}} 
      className="bg-slate-200" showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{marginTop:statusBarHeigth + 8}}>
        
        <Header/>
        
        <Banner/>
        
        <Search/>

      </View>

      <Section
        name="Comidas em alta"
        label="Veja todos"
        action={()=> console.log("CLICOU NO VEJA TODOS")}
        size="text-2xl"
        
      />

      <TrendingFoods/> 

      <Section
        name="Famosos no ThuFoods"
        label="Veja todos"
        action={()=> console.log("CLICOU NO VEJA TODOS")}
        size="text-xl"
        
      />  

      <Restaurants/>  

      <Section
        name="Restaurantes"
        label="Veja todos"
        action={()=> console.log("CLICOU NO RESTAURANTES")}
        size="text-xl"
        
      /> 

      <RestaurantVerticalList/> 

      <Section
        name="Novos restaurantes"
        label="Veja todos"
        action={()=> console.log("CLICOU NO VEJA TODOS")}
        size="text-2xl"
        
      />

      <TrendingFoods/> 

    </ScrollView>
  );
}
