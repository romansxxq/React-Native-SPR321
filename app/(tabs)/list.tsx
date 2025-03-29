import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Alert, ViewStyle } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const api = "https://fakestoreapi.com/products";

type Product = {
  readonly id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
type ItemProps = {
  item: Product,
  onPress: (i: Product) => void,
}

const Item = ({ item, onPress }: ItemProps) => (
  <TouchableOpacity style={item.price < 50 ? styles.cheap : styles.card} onPress={() => onPress(item)}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.detailsContainer}>
      <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.price}>${item.price.toFixed(2)}</Text>
    </View>
  </TouchableOpacity>
);

const App = () => {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePress = (item: Product) => {
    Alert.alert(item.title, item.description);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={items}
          renderItem={({ item }) => <Item item={item} onPress={handlePress} />}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    </SafeAreaProvider>);
}

const baseCard: ViewStyle = {
  backgroundColor: "#fff",
  borderRadius: 10,
  padding: 10,
  marginVertical: 8,
  marginHorizontal: 16,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
  flexDirection: "row",
  alignItems: "center",

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  card: baseCard,
  cheap: {
    ...baseCard,
    backgroundColor: "#e0f7fa",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  category: {
    fontSize: 14,
    color: "#888",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: "#27ae60",
    marginTop: 4,
  },
});

export default App;