/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, TextInput, View, Button, ImageBackground, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

function WeatherApp() {

  const [weather, setWeather] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [location, setLocation] = React.useState("Bhiwandi");

  const navigation = useNavigation()

  function handleChange(event) {
    setInput(event);
  }
  // console.log("input", input);

  function locate() {
    setLocation(input);
    setInput("");
  }
  // console.log(location);

  React.useEffect(() => {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=ZSSB7KBM3DY9AAFBFW54BV7P8&contentType=json`
    )
      .then((res) => res.json())
      .then((data) => setWeather([data]),

      );
  }, [location]);
  console.log(weather);

  const nightImage = { uri: `https://i.pinimg.com/1200x/81/8d/69/818d6960bad160ccdbf14eee911c338b.jpg` }
  const dayImage = { uri: `https://i.pinimg.com/736x/ea/c6/ea/eac6ea25d769c0df6de84d6ba113b160.jpg` }
  const rainImage = { uri: `https://i.pinimg.com/736x/95/42/3e/95423eca5f5a645580a23535e46235c2.jpg` }
  const dayImage2 = { uri: `https://i.pinimg.com/originals/91/37/e4/9137e4d5521510779a33b917213689d7.png` }
  const blueImage = { uri: `https://i.stack.imgur.com/wvNCf.png` }
  const cloudImage = { uri: `https://cdn5.f-cdn.com/contestentries/329593/18088126/5699feb841990_thumb900.jpg` }
  const lightImage = { uri: `https://media.istockphoto.com/id/1178256163/vi/vec-to/weather-app-thi%E1%BA%BFt-k%E1%BA%BF-thi%E1%BA%BFt-k%E1%BA%BF-m%C3%A0n-h%C3%ACnh-giao-l%C6%B0u-giao-th%C3%B4ng-hi%E1%BB%87n-%C4%91%E1%BA%A1i-cho-%E1%BB%A9ng-d%E1%BB%A5ng-di-%C4%91%E1%BB%99ng-v%E1%BB%9Bi.jpg?s=170667a&w=0&k=20&c=46Yr8T4Yc5FAY-Ma7zui6Bn07CkB01lYSLdz1NjTxTs=` }

  const arr = weather.map((w) => w.currentConditions.conditions)
  const windowWidth = Dimensions.get('window').width;

  return (
    <ImageBackground source={arr[0] == "Clear" ? cloudImage : lightImage} resizeMode={"cover"}
      style={{
        height: "100%", //only according to the phone im using
        width: "100%",
        margin: 0,
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"
      }}>
      <TouchableOpacity onPress={() => navigation.navigate("Benzema")}>
        <Text>Change</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={{
        alignItems: "center",
        marginTop: 80
      }}>
        <View className="input-and-btn"
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10
          }}>
          <TextInput
            placeholder="Seacrh..."
            onChangeText={(text) => handleChange(text)}
            value={input?.trimStart()}
            style={{
              fontSize: 25,
              borderRadius: 7,
              marginBottom: "5%",
              opacity: 0.6,
              borderWidth: 1,
              width: 130
            }}
          />
          <Button
            title="+"
            onPress={locate}
            disabled={input?.trimStart() === "" ? true : false}
            style={{
              // fontSize: 10,
              // font-weight: bold,
              // borderRadius: 7,
              // background: "transparent",
              // cursor: pointer
            }}
          />
        </View>

        {weather.map((w) => (
          <View className="details"
            style={{
              borderWidth: 1,
              borderRadius: 7,
              // width: windowWidth - 50,
              width: "100%",
              alignItems: "center"
            }}>
            <View>
              <Text style={{ fontSize: 45, textAlign: "center" }}>{w.currentConditions.temp}&#176;</Text>
              <Text style={{ fontSize: 30, textAlign: "center" }}>{w.address}</Text>
              <Text style={{ fontSize: 20, textAlign: "center" }}> {w.currentConditions.conditions}</Text>
              {/* <Text>{`\n`}</Text> */}
              <Text style={{ fontSize: 30, textAlign: "center" }}>
                H:{w.days[0].tempmax}&#176; &nbsp; L:{w.days[0].tempmin}&#176;
              </Text>
              <Text style={{ fontSize: 20, textAlign: "center" }}>Timezone : {w.timezone} </Text>
            </View>
            <View className="next-days-div" style={{
              // borderWidth: 1,
              // flexDirection: 'row',
              margin: 20,
              //  width: "90%"
            }}>
              <View className="next-days" style={{
                borderWidth: 1, margin: 5, borderRadius: 7, padding: 5,
                textAlign: "center", height: 100, width: 300,
                // backgroundColor: "gray"
              }}>
                <Text style={{ fontSize: 17, textAlign: "center" }}>{w.days[1].datetime}</Text>
                <Text style={{ fontSize: 19, textAlign: "center" }}>
                  H:{w.days[1].tempmax}&#176; &nbsp; L:{w.days[1].tempmin}&#176;
                </Text>
                <Text style={{ textAlign: "center", fontSize: 20 }}>{w.days[1].conditions}</Text>
              </View>
              <View className="next-days" style={{
                borderWidth: 1, margin: 5, borderRadius: 7, padding: 5,
                textAlign: "center", height: 100, width: 300,
                // backgroundColor: "gray"
              }}>
                <Text style={{ fontSize: 17, textAlign: "center" }}>{w.days[2].datetime}</Text>
                <Text style={{ fontSize: 19, textAlign: "center" }}>
                  H:{w.days[2].tempmax}&#176; &nbsp; L:{w.days[2].tempmin}&#176;
                </Text>
                <Text style={{ textAlign: "center", fontSize: 20 }}>{w.days[2].conditions}</Text>
              </View>
              <View className="next-days" style={{
                borderWidth: 1, margin: 5, borderRadius: 7, padding: 5,
                textAlign: "center", height: 100, width: 300,
                // backgroundColor: "gray"
              }}>
                <Text style={{ fontSize: 17, textAlign: "center" }}>{w.days[3].datetime}</Text>
                <Text style={{ fontSize: 19, textAlign: "center" }}>
                  H:{w.days[3].tempmax}&#176; &nbsp; L:{w.days[3].tempmin}&#176;
                </Text>
                <Text style={{ textAlign: "center", fontSize: 20 }}>{w.days[3].conditions}</Text>
              </View>
            </View>
          </View>
        ))}

      </ScrollView>
    </ImageBackground>
  );
}

export default WeatherApp;