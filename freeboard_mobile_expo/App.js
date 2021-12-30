import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
// import { Wrapper } from "./Appcss";
const API_KEY = "434e4d55ced79428b160d0ff40fab01c";
const { width: SCREEN_WIDTH } = Dimensions.get("window");

const icons = {
  Clouds: "cloudy",
  Clear: "day-sunny",
  Atomosphere: "cloudy-gusts",
  Snow: "snow",
  rain: "rains",
  Drizzle: "rain",
  Thunderstorm: "lightning",
};

export default function App() {
  const [days, setDays] = useState([]);
  const [city, setCity] = useState("Loading...");
  const [ok, setOk] = useState(true);

  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();

    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({
      accuracy: 5,
    });

    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setDays(json.daily);
  };

  useEffect(() => {
    getWeather();
  });

  return (
    // <Wrapper>
    <View style={style.container}>
      <View style={style.city}>
        <Text style={style.cityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={style.weather}
      >
        {days.length === 0 ? (
          <View style={{ ...style.day, alignItems: "center" }}>
            <ActivityIndicator
              color="white"
              style={{ marginTop: 10 }}
              size="large"
            />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={style.day}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Text style={style.temp}>
                  {parseFloat(day.temp.day).toFixed(1)}
                  {/* 소수점아래 한자리값만받아오는식. */}
                </Text>
                <Fontisto
                  name={icons[day.weather[0].main]}
                  size={68}
                  color="white"
                />
              </View>

              <Text style={style.description}>{day.weather[0].main}</Text>
              <Text style={style.tinyText}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: { flex: 1, backgroundColor: "tomato" },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: { fontSize: 70, color: "white" },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    fontSize: 120,
    color: "white",
  },
  description: {
    marginTop: -30,
    fontSize: 60,
    color: "white",
  },
  tinyText: {
    fontSize: 30,
    color: "white",
  },
});
