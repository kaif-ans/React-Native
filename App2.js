import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Card from './Card'
import { useNavigation } from '@react-navigation/native'

function App2() {
    const windowWidth = Dimensions.get('window').height
    const navigation = useNavigation()

    const fakeData = [
        {
            id: 1, name: "https://images7.alphacoders.com/117/1176446.jpg",
            head: "Up to 25% OFF* on International Flights.",
            desc: "The Santiago Bernabéu Stadium is a football stadium in Madrid, Spain. With a current seating capacity of 81,044.",
            time: "12h:25m+",
            view: "https://www.alamy.com/360-degree-panoramic-view-of-santiago-bernabeu-stadium-image219445414.html"
        },
        {
            id: 1, name: "https://www.si.com/.image/t_share/MTg4ODgxMTI1MTI3NDk3MjQ4/imago1011329909h.jpg",
            head: "Up to 15% OFF* on Domestic Flights.",
            desc: "Old Trafford is a football stadium in Manchester, England, and the home of Manchester United with a capacity of 74,310.",
            time: "12h:15m+",
            view: "https://www.alamy.com/360-degree-panoramic-view-of-old-trafford-manchester-united-pitch-image219168498.html"
        },
        {
            id: 1, name: "https://www.telegraph.co.uk/content/dam/football/2019/06/04/198568515_Getty-Images-Europe_Salford-Red-Devils-v-Hull-Kingston-Rovers-Betfred-Super-League-Dacia_trans_NvBQzQNjv4Bq5o6QL21LfSopiZZTdWln6QHNVNDbzRe5l0PDj6fYZ68.jpg",
            head: "Up to 30% OFF* on Domestic Flights.",
            desc: "Anfield is a football stadium in Liverpool, Merseyside, England, which has a seating capacity of 53,394.",
            time: "15h:15m+",
            view: "https://veer.tv/photos/liverpool-fc-anfield-stadium-ynwa-52941"
        },
    ]

    return (
        <View style={[styles.body, { height: windowWidth }]}>
            <TouchableOpacity onPress={() => navigation.navigate("WeatherApp")}>
                <Text style={styles.hrs}>Screen 2</Text>
            </TouchableOpacity>

            <Text style={styles.offers}> ➜ Offers</Text>
            <View style={styles.text_div}>
                <Text style={styles.flights}>Flights</Text>
                <Text style={styles.hotels}>Hotels</Text>
                <Text style={styles.trips}>Trips</Text>
            </View>
            <Text></Text>

            <ScrollView contentContainerStyle={{ height: windowWidth }}>
                {fakeData.map(i => {
                    return (<Card url={i.name} head={i.head} desc={i.desc} time={i.time} view={i.view} />)
                })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        padding: 10
    },
    offers: {
        fontSize: 27,
        color: "black",
        fontWeight: "500"
        //  borderWidth: 1 
    },
    text_div: {
        marginTop: "5%",
        height: 50,
        // borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: "rgba(237, 239, 253, 0.7)"
    },
    flights: {
        color: "black",
        fontSize: 23,
        // borderWidth: 1,
        paddingHorizontal: 25,
        borderRadius: 15,
        padding: 4,
        backgroundColor: "#DE3151",
        color: "white"
    },
    hotels: {
        color: "#DE3151",
        fontSize: 23,
        // borderWidth: 1,
        paddingHorizontal: 25,
        borderRadius: 15,
        padding: 4
    },
    trips: {
        color: "#DE3151",
        fontSize: 23,
        // borderWidth: 1,
        paddingHorizontal: 25,
        borderRadius: 15,
        padding: 4
    },
})

export default App2