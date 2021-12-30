// import * as Location from "expo-location";
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   ScrollView,
//   Dimensions,
// } from "react-native";
// import { ActivityIndicator } from "react-native-web";
// const { width: SCREEN_WIDTH } = Dimensions.get("window");
// const API_KEY = "4dd0427f38fcdb2a3a1a7d50bb5defee";

// export default function App() {
//   const [city, setCity] = useState("Loading...");
//   const [days, setDays] = useState([]);
//   const [ok, setOk] = useState(true);
//   const getWeather = async () => {
//     const { granted } = await Location.requestForegroundPermissionsAsync();
//     if (!granted) {
//       setOk(false);
//       console.log("Hello from Nomad Coders");
//     }
//     const {
//       coords: { latitude, longitude },
//     } = await Location.getCurrentPositionAsync({ accuracy: 5 });
//     // const gogleapi = await Location.setGoogleApiKey(
//     //   AIzaSyAptwWLr7vBTltVHETfr7HrQx33MmUvQ0g
//     // );
//     const location = await Location.reverseGeocodeAsync(
//       { latitude, longitude },
//       { useGoogleMaps: false }
//     );
//     setCity(location[0].city, "aaa");
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_key}`
//     );
//     const json = await response.json();
//     setDays(json.daily);
//   };
//   useEffect(() => {
//     getWeather();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <View style={styles.city}>
//         <Text style={styles.cityName}>{city}</Text>
//       </View>
//       <ScrollView
//         pagingEnabled
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.weather}
//       >
//         {days.length === 0 ? (
//           <View style={styles.day}>
//             <ActivityIndicator
//               color="white"
//               size="large"
//               style={{ marginTop: 10 }}
//             />
//           </View>
//         ) : (
//           day.map((day, index) => (
//             <View key={index} style={styles.day}>
//               <Text style={styles.temp}>{day.temp.day}</Text>
//               <Text style={styles.description}>{day.weather[0].main}</Text>
//             </View>
//           ))
//         )}
//         {/* 여기서 에러난다... 노마드 강의 18번 8:31 부터듣기..  */}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "tomato",
//   },
//   city: {
//     flex: 1.2,
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   cityName: {
//     fontSize: 58,
//     fontWeight: "500",
//   },
//   weather: {
//     // backgroundColor: "blue",
//   },
//   day: {
//     width: SCREEN_WIDTH,
//     alignItems: "center",
//   },
//   temp: {
//     marginTop: 50,
//     fontWeight: "600",
//     fontSize: 178,
//   },
//   description: {
//     marginTop: -30,
//     fontSize: 50,
//   },
// });
