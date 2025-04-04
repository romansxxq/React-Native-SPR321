import { useState } from "react";
import { Alert, Button, Text, View, StyleSheet } from "react-native";

export default function Index() {
   const [count, setCount] = useState(0);

  const handlePress = () => {
    Alert.alert(
      'Питання №1',
      "Я люблю бути в центрі уваги і легко заводжу нові знайомства.",
      [
        {
          text: "не зовсім про мене",
          onPress: () => {
            setCount(count + 3);
            showSecondAlert();
          },
        },
        {
          text: "інколи про мене",
          onPress: () => {
            setCount(count + 2);
            showSecondAlert();
          },
        },
        {
          text: "точно про мене",
          onPress: () => {
            setCount(count + 1);
            showSecondAlert();
          },
        },
      ]
    );
  };

  const showSecondAlert = () => {
    Alert.alert(
      "Питання №2",
      "Я часто переживаю через дрібниці і довго думаю над своїми помилками.",
      [
        {
          text: "не зовсім про мене",
          onPress: () => {
            setCount(count + 3);
            showThirdAlert();
          }
        },
        {
          text: "інколи про мене",
          onPress: () => {
            setCount(count + 2);
            showThirdAlert();
          }
        },
        {
          text: "точно про мене",
          onPress: () => {
            setCount(count + 1);
            showThirdAlert();
          }
        },
      ]
    );
  };

  const showThirdAlert = () => {
    Alert.alert(
      "Питання №3",
      "Мені важко швидко переключатися між завданнями і я люблю працювати спокійно, без поспіху.",
      [
        {
          text: "не зовсім про мене",
          onPress: () => {
            setCount(count + 3);
            showResultAlert();
          }
        },
        {
          text: "інколи про мене",
          onPress: () => {
            setCount(count + 2);
            showResultAlert();
          }
        },
        {
          text: "точно про мене",
          onPress: () => {
            setCount(count + 1);
            showResultAlert();
          }
        },
      ]
    );
  };
  
  const showResultAlert = () => {
    let resText = "невідомо";
    if (count < 4) {
      resText = "Сангвінік";
    } else if (count >= 4 && count <= 6) {
      resText = "Холерик";
    } else if (count > 6 && count <= 8) {
      resText = "Меланхолік";
    } else if (count > 8) {
      resText = "Флегматик";
    }

    Alert.alert(
      "Результат: " + count + " балів",
      "Ви - " + resText,
      [
        {
          text: "Пройти тест ще раз",
          onPress: () => {
            setCount(0);
            handlePress();
          }
        },
        {
          text: "Ок",
          onPress: () => {
            setCount(0);
          }
        },
      ]
    );
  };

  const backColor = "white";

  return (
    <View style={{ ...styles.container, backgroundColor: backColor }}>
      <Text style={styles.text}>Тест</Text>

      <Button title="Start" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});
