import { View, FlatList } from 'react-native';
//import { Ionicons } from "@expo/vector-icons";
import DishListItem from '../../components/DishListItem';
import restaurants from "../../../assets/data/restaurants.json"
import Header from "./Header";
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';


const restaunrant = restaurants[0];

const RestaurantDetailsPage = () => {
    const route = useRoute();
    const navigation = useNavigation();

    const id = route.params?.id;
    console.warn(id);




    return (
        < View styles={styles.page}>
            <FlatList
                ListHeaderComponent={() => <Header restaunrant={restaunrant} />}
                data={restaunrant.dishes}
                renderItem={({ item }) => <DishListItem dish={item} />}
                keyExtractor={(item) => item.name}
            />
            {/* <Ionicons
                onPress={() => navigation.goBack()}
                name="arrow-back-circle"
                size={45}
                color="white"
                style={styles.iconContainer}
            /> */}
        </View >
    );
};
export default RestaurantDetailsPage;