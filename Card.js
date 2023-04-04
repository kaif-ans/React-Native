import React from 'react'
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function Card(props) {
    return (
        <View style={styles.image_div}>
            <Image source={{ uri: props.url }}
                style={styles.image} resizeMode="stretch"
            />
            <View style={styles.img_desc_div}>
                <Text style={styles.img_desc_head}>{props.head}</Text>
                <Text style={styles.img_desc}>{props.desc}</Text>
            </View>
            <View style={styles.time_div}>
                <Text style={styles.time}>{props.time}</Text>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.google.com/flights?rlz=1C1ONGR_enIN972IN974&sxsrf=AJOqlzXhKlzko5fIt2T0XwG-1oPfvccf_w%3A1677741710236&source=flun&uitype=cuA_&hl=en&gl=in&curr=INR&tfs=CAEQARoVEgoyMDIzLTAzLTE4agcIARIDQk9NGhUSCjIwMjMtMDMtMjJyBwgBEgNCT016aENqUklTVEoxYUUxaVRuWnJialJCUkhWWlUyZENSeTB0TFMwdExTMHRMUzEwWjJWcU9VRkJRVUZCUjFGQlZHODBSaTA0Y2tGQkVnRXlHZ3NJcnFBQkVBQWFBMGxPVWpnRGNKckNBUT09&ved=2ahUKEwjWiqf12rz9AhWK6nMBHaUAB8IQlhd6BAglEBA")}>
                    <Text style={styles.book}>Book Now</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.flight_div}>
                <TouchableOpacity onPress={() => Linking.openURL(props.view)}>
                    <Text style={styles.flight}>View</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    image: {
        width: "100%",
        height: "85%",
        borderRadius: 10
    },
    image_div: {
        // borderWidth: 1,
        width: "100%",
        height: "30%",
        alignItems: "center",
        marginBottom: 7,
        borderRadius: 10,
        // backgroundColor: "#F8F8F8",
        backgroundColor: "rgba(237, 239, 253, 0.7)"
    },
    img_desc_div: {
        position: 'absolute',
        // borderWidth: 1,
        width: "90%",
        height: "15%",
        borderRadius: 7,
        marginTop: "38%",
        backgroundColor: "white",
        opacity: 0.8,
        paddingHorizontal: 10
    },
    img_desc_head: {
        color: "black",
        fontWeight: 'bold'
    },
    img_desc: {
        color: "black",
        fontSize: 10,
        fontWeight: "500"
    },
    time_div: {
        // borderWidth: 1,
        width: "90%",
        height: "15%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    time: {
        color: "#DE3151",
        fontWeight: 'bold'
    },
    book: {
        color: "white",
        fontWeight: 'bold',
        // borderWidth: 1,
        padding: 1,
        paddingHorizontal: 17,
        borderRadius: 15,
        backgroundColor: "#DE3151"
    },
    flight_div: {
        position: 'absolute',
        // borderWidth: 1,
        margin: 7,
        right: 1,
        paddingHorizontal: 8,
        borderRadius: 15,
        backgroundColor: "lightgray",
        padding: 2,
        opacity: 0.8
    },
    flight: {
        color: "#DE3151",
        fontSize: 12,
        fontWeight: "bold"
    }
})

export default Card