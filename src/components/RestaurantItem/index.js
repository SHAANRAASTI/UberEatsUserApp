import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const RestaurantItem = ({ restaunrant }) => {
    const navigation = useNavigation();
    
    const onPress = () => {
    navigation.navigate("Restaurant",{id: restaunrant.id });
    };
    return (
    
        <Pressable onPress={onPress} style={styles.restaurantContainer}>
            <Image
                source={{
                    uri: restaunrant.image,
                }}
                style={styles.image}
            />
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>{restaunrant.name}</Text>
                    <Text style={styles.subtitle}>
                        $ {restaunrant.deliveryFee} $#8226 {restaunrant.deliveryFee}-
                        {restaunrant.maxDeliveryTime} minutes
                    </Text>
                </View>
                <View style={styles.rating}>
                    <Text>{restaunrant.rating}</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default RestaurantItem;
const styles = StyleSheet.create({
    restaurantContainer: {
        width: "100%",
        marginVertical: 10,
    },
    image: {
        width: "100%",
        aspectRatio: 5 / 3,
        marginBottom: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        marginVertical: 5,
    },
    subtitle: {
        color: "grey",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    rating: {
        marginLeft: "auto",
        backgroundColor: "lightgray",
        width: 25,
        height: 25,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,

    },
});
