import { ScrollView } from "react-native";
import { Container } from "./styles";
import { HeaderComponent } from "../../components/Header";
import { Map } from "../../components/Map";
import { Separator } from "../../components/Separator";
import { ServicesSession } from "../../components/ServicesSession";
import { ExploreSession } from "../../components/ExploreSession";

export default function HomeScreen() {

  return (
    <Container>
      <HeaderComponent />
      <ScrollView>
        <Map />
        <Separator />
        <ServicesSession />
        <Separator />
        <ExploreSession />
      </ScrollView>
    </Container>
  )
}