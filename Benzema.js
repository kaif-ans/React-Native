import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native'

function App() {

    // const windowWidth = Dimensions.get('window').height
    const karim = { uri: "https://wp.inews.co.uk/wp-content/uploads/2022/04/SEI_100846946.jpg" }
    const dp = { uri: "https://pbs.twimg.com/media/Ffsk0XfXwAIvee5?format=jpg&name=4096x4096" }
    const rmlogo = { uri: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png" }
    const franceLogo = { uri: "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/France_national_football_team_seal.svg/1200px-France_national_football_team_seal.svg.png" }
    const olLogo = { uri: "https://upload.wikimedia.org/wikipedia/en/1/12/Logo_Olympique_Lyonnais_2022.png" }
    const saveIcon = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY69xIIIbE0E6UrqFxRtzbQAVe6E8-SLTDzbMV_p4ehxr6k_TGZ_Jo55L8WDm0rJyCdmk&usqp=CAU" }
    const navigation = useNavigation()

    return (<>
        {/* <StatusBar /> */}
        <ScrollView
        // style={{ height: windowWidth }}
        >
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Screen")}>
                    <Text>Screen 1</Text>
                </TouchableOpacity>
                <Image source={karim} style={styles.image} />
            </View>

            <View style={styles.big_div}>

                <Image source={dp} style={styles.dp} />
                <View>
                    <Text style={styles.name}>Karim Benzema</Text>
                    <Text style={styles.rm}>Real Madrid - Striker</Text>
                    <Text></Text>
                </View>

                <View style={styles.stats_box}>
                    <View>
                        <Text style={styles.stats}> ⚽</Text>
                        <Text style={styles.stats}>444</Text>
                    </View>
                    <View>
                        <Text style={styles.stats}>🏆</Text>
                        <Text style={styles.stats}>37</Text>
                    </View>
                    <View>
                        <Text style={styles.stats}>  🧑‍🤝‍🧑</Text>
                        <Text style={styles.stats}>66.6m</Text>
                    </View>
                </View>
                <Text></Text>

                <View style={styles.bio_div}>
                    <Text style={styles.bio_head}>Short bio</Text>
                    <Text style={styles.bio}>Karim Mostafa Benzema plays as a striker for Real Madrid.
                        A creative and prolific forward, Benzema is regarded as one of the best strikers of all time.
                        He is Real Madrid's all-time second-highest goalscorer and top assist provider.</Text>
                </View>

                <View style={styles.competitions_div}>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.uefa.com/uefachampionsleague/")}>
                        <View style={styles.played_div}>
                            <Text style={styles.played}>Champions League</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.laliga.com/en-GB")}>
                        <View style={styles.played_div}>
                            <Text style={styles.played}>LaLiga</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.google.com/search?gs_ssp=eJzj4tDP1TfIrijLM2D04knOL0hUSEnNUShKrQQAXSkHxA&q=copa+del+rey&rlz=1C1ONGR_enIN972IN974&oq=copa&aqs=chrome.1.69i57j46i131i433i512j0i67i433j0i131i433l2j0i433i512l2j46i131i433j0i131i433j0i271.3039j0j7&sourceid=chrome&ie=UTF-8")}>
                        <View style={styles.played_div}>
                            <Text style={styles.played}>Copa del Rey</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.fifa.com/tournaments/mens/clubworldcup")}>
                        <View style={styles.played_div}>
                            <Text style={styles.played}>Club World Cup</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.fifa.com/fifaplus/en/home")}>
                        <View style={styles.played_div}>
                            <Text style={styles.played}>FIFA World Cup</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.uefa.com/uefasupercup/")}>
                        <View style={styles.played_div}>
                            <Text style={styles.played}>UEFA Super Cup</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text></Text>

                <Text style={styles.work_exp}>Work Experience</Text>

                <View style={styles.wrk_exp_div}>
                    <View>
                        <Image source={rmlogo} style={styles.work_exp_logo} />
                    </View>
                    <View >
                        <Text style={styles.exp_text_head}>Real Madrid Club de Fútbol</Text>
                        <Text style={styles.exp_text_location}>Spain - Fútbol Inc.</Text>
                        <Text style={styles.exp_text_period}>Minimum 2 matches a week                     </Text>
                        <Text style={styles.exp_text_year}>2009 - Present</Text>
                    </View>
                </View>
                <Text></Text>

                <View style={styles.hr} />

                <View style={styles.wrk_exp_div}>
                    <View>
                        <Image source={franceLogo} style={styles.work_exp_logo} />
                    </View>
                    <View>
                        <Text style={styles.exp_text_head}>French Football Federation</Text>
                        <Text style={styles.exp_text_location}>France - Football Inc.</Text>
                        <Text style={styles.exp_text_period}>Macthes only on International break       </Text>
                        <Text style={styles.exp_text_year}>2007 - 2022</Text>
                    </View>
                </View>
                <Text></Text>

                <Text style={styles.work_exp}>Education</Text>

                <View style={styles.wrk_exp_div}>
                    <View>
                        <Image source={olLogo} style={styles.olLogo} />
                    </View>
                    <View >
                        <Text style={styles.exp_text_head}>Olympique Lyonnais Academy</Text>
                        <Text style={styles.exp_text_location}>France - Sports Management</Text>
                        <Text style={styles.exp_text_period}>Football expert - debuted U-19                 </Text>
                        <Text style={styles.exp_text_year}>1993 - 2005</Text>
                    </View>
                </View>
                <Text></Text>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.contact}>Contact</Text>
                </TouchableOpacity>
                <Text></Text>

                <View style={styles.save_div}>
                    <Image source={saveIcon} style={styles.saveIcon} />
                    <TouchableOpacity>
                        <Text style={styles.exp_text_year}>  Save for later</Text>
                    </TouchableOpacity>
                </View>
                <Text></Text>

                <View style={styles.hr2} />
                <Text></Text>

            </View>
        </ScrollView>
    </>
    )
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        // height: windowWidth / 3.5
        height: 220
    },
    big_div: {
        backgroundColor: "white",
        width: "100%",
        // height: windowWidth / 1.4,
        height: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    dp: {
        // position: 'absolute',
        width: 120,
        height: 120,
        borderRadius: 60,
        // left: 150,
        bottom: 50,
        alignSelf: "center",
    },
    name: {
        color: "black",
        fontSize: 32,
        fontWeight: '900',
        // borderWidth: 1,
        alignSelf: "center",
        bottom: 20
    },
    rm: {
        color: "black",
        fontSize: 15,
        // borderWidth: 1,
        fontWeight: 500,
        alignSelf: "center",
        bottom: 15
    },
    stats_box: {
        // borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: "#F5F5FA",
        bottom: 8
    },
    stats: {
        color: "black",
        fontSize: 18,
    },
    bio_div: {
        // borderWidth: 1,
        marginHorizontal: 20,
    },
    bio_head: {
        color: "black",
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    bio: {
        color: "black"

    },
    competitions_div: {
        // borderWidth: 1,
        marginHorizontal: 12,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 3
    },
    played_div: {
        // borderWidth: 1,
        alignSelf: 'flex-start',
        margin: 8,
        paddingHorizontal: 20,
        borderRadius: 17,
        padding: 5,
        backgroundColor: "#F5F5FA"
    },
    played: {
        color: "#8083A3",
        fontWeight: "bold"
    },
    work_exp: {
        color: "black",
        marginHorizontal: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    wrk_exp_div: {
        // borderWidth: 1,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginTop: 20
    },
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: "73%",
        marginLeft: "22%",
        opacity: 0.2,
    },
    work_exp_logo: {
        width: 35,
        height: 47,
        marginTop: 5
    },
    olLogo: {
        width: 43,
        height: 50,
        marginTop: 5
    },
    exp_text_head: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 17,
        margin: 2
    },
    exp_text_location: {
        color: "black",
        fontSize: 14,
        margin: 2

    },
    exp_text_period: {
        color: "#8083A3",
        fontSize: 14,
        margin: 2

    },
    exp_text_year: {
        color: "black",
        fontWeight: 'bold',
        margin: 2,
    },
    btn: {
        // borderWidth: 1,
        marginHorizontal: 20,
        padding: 14,
        backgroundColor: "#00D066",
        borderRadius: 25,
        marginTop: 10
    },
    contact: {
        color: "white",
        alignSelf: 'center'

    },
    saveIcon: {
        width: 17,
        height: 17,
    },
    save_div: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    hr2: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        opacity: 0.2,
        marginTop: 7
    }
})

export default App;

