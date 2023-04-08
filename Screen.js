import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function Screen() {

    // IMAGES  
    const searchIcon = { uri: "https://assets.stickpng.com/images/585e4ae1cb11b227491c3393.png" }
    const karim = { uri: "https://static.independent.co.uk/2022/05/24/11/GettyImages-1395595971.jpg?quality=75&width=640&auto=webp" }
    const cr7 = { uri: "https://images.beinsports.com/DGSSU4Oi-IGDzPCEkED5Oi_JfxQ=/1300x731/smart/ronaldo-cropped_1tf96ajc5wktj1tagqsiohqf8k.jpg" }
    const kroos = { uri: "https://keepup.com.au/wp-content/uploads/2023/02/1zfcr3xenm1v1j325fty7dflz.jpg?w=752&h=423&crop=1" }
    const modric = { uri: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-760cggbqr6l1uhij0hqbq39l65-20181204121412.Medi.jpeg" }
    const vini = { uri: "https://www.hindustantimes.com/ht-img/img/2023/02/22/1600x900/SOCCER-CHAMPIONS-LIV-MAD-REPORT-79_1677077378876_1677077378876_1677077420191_1677077420191.JPG" }
    const valverde = { uri: "https://pbs.twimg.com/media/Ff1CjfMX0AMG_tg.jpg:large" }
    const tb1 = { uri: "https://e0.365dm.com/22/05/1600x900/skysports-thibaut-courtois_5787458.jpg?20220528234139" }
    const carlo = { uri: "https://img.asmedia.epimg.net/resizer/0FIFW62ewiNUnNGK6wupPHYASZk=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/G2AJDMFB3EKUIGUNKX7E5H6D2M.jpg" }
    const rodri = { uri: "https://www.realmadrid.com/img/cc_1920px/_2vc0339_20221005114035.jpg" }
    const asen = { uri: "https://e0.365dm.com/20/06/2048x1152/skysports-marco-asensio-real-madrid_5017152.jpg" }
    const navigation = useNavigation()

    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <TouchableOpacity onPress={() => navigation.navigate("Offers")}>
                <Text>Change</Text>
            </TouchableOpacity>

            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                >
                    <Text style={styles.search}></Text>
                    {/* <Image source={searchIcon} style={styles.searchIcon} /> */}
                </TextInput>
            </View>
            <Text></Text>

            <View style={styles.req_div}>
                <Text style={styles.req}>Requests  💖</Text>
                <Text style={styles.already}>already shown interest in your profile</Text>
            </View>
            <Text></Text>

            <View style={styles.img_div}>
                <View>
                    <Image source={karim} style={styles.img} />
                    <Text style={styles.hrs}>24 hrs</Text>
                </View>
                <View>
                    <Image source={cr7} style={styles.img} />
                    <Text style={styles.hrs}>10 hrs</Text>
                </View>
                <View>
                    <Image source={kroos} style={styles.img} />
                    <Text style={styles.hrs}>12 hrs</Text>
                </View>
                <View>
                    <Image source={modric} style={styles.img} />
                    <Text style={styles.hrs}>3 hrs</Text>
                </View>
                <View>
                    <Image source={vini} style={styles.img}>
                        {/* <Text>20+ requests</Text> */}
                    </Image>
                    <Text style={styles.hrs}>See all</Text>
                </View>
            </View>
            <Text></Text>

            <Text style={styles.msg}>Messages ❤️</Text>

            <View style={styles.player_msg_full_div}>
                <TouchableOpacity>
                    <View style={styles.player_msg_div}>
                        <Image source={valverde} style={styles.img} />
                        <View>
                            <Text style={styles.player_name}>Valverde</Text>
                            <Text style={styles.player_msg}>Meet me in traning!</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.player_msg_div}>
                        <Image source={tb1} style={styles.img} />
                        <View>
                            <Text style={styles.player_name}>Courtios</Text>
                            <Text style={styles.player_msg}>I won't let you score against me</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.player_msg_div}>
                        <Image source={carlo} style={styles.img} />
                        <View>
                            <Text style={styles.player_name}>Ancelotti</Text>
                            <Text style={styles.player_msg}>Tomorrow there's holiday</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.player_msg_div}>
                        <Image source={rodri} style={styles.img} />
                        <View>
                            <Text style={styles.player_name}>Rodrygo</Text>
                            <Text style={styles.player_msg}>No I can't make it man, I'm busy</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.player_msg_div}>
                        <Image source={asen} style={styles.img} />
                        <View>
                            <Text style={styles.player_name}>Asensio</Text>
                            <Text style={styles.player_msg}>Sure, I'll call you after that</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginHorizontal: 25,
        marginTop: 20,
        borderRadius: 5,
        borderColor: "grey"
    },
    searchIcon: {
        width: 25,
        height: 25,
    },
    search: {
        fontSize: 19,
        color: "grey",
    },
    req_div: {
        // borderWidth: 1,
        marginHorizontal: 25,
        marginTop: 5
    },
    req: {
        color: "black",
        fontSize: 25,
        fontWeight: "500"
    },
    already: {
        color: "grey",
        fontSize: 15,
        marginTop: 5
    },
    img_div: {
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginHorizontal: 20,

    },
    img: {
        width: 65,
        height: 65,
        borderRadius: 33,
        borderColor: "#FF385C"
    },
    hrs: {
        color: "#FF385C",
        alignSelf: 'center',
        marginTop: 3
    },
    msg: {
        color: "black",
        marginHorizontal: 25,
        fontSize: 25,
        fontWeight: "500"
    },
    player_msg_full_div: {
        // borderWidth: 1,
        marginHorizontal: 25,
        marginTop: 10
    },
    player_msg_div: {
        // borderWidth: 1,
        flexDirection: 'row',
        gap: 20,
        marginTop: 10
    },
    player_name: {
        color: "black",
        fontSize: 20,
        fontWeight: "500",
        marginTop: 5
    },
    player_msg: {
        color: "grey"
    }
})
export default Screen