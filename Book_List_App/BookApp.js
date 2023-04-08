import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image, Alert } from "react-native";
import BookModal from "./BookModal";
import { useNavigation } from '@react-navigation/native'


function BookApp() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [show, setShow] = React.useState(false)
    const [title, setTitle] = React.useState("")
    const [author, setAuthor] = React.useState("")
    const [date, setDate] = React.useState("")
    const [notes, setNotes] = React.useState("")

    const [list, setList] = React.useState([]);

    function handleClose() {
        setShow(false)
        setTitle("")
        setAuthor("")
        setDate("")
        setNotes("")
    }

    const handleShow = () => setShow(true);

    function handleChange(field, txt) {
        console.warn("fiels", field)
        if (field == "title") {
            setTitle(txt)
        }
        else if (field == "author") {
            setAuthor(txt)
        }
        else if (field == "date") {
            setDate(txt)
        }
        else if (field == "notes") {
            setNotes(txt)
        }
    }

    function handleAdd() {

        if (title !== "" && author !== "" && date !== "" && notes !== "") {
            setList((p) => [...p, { title: title, author: author, date: date, notes: notes, id: Math.random() }])
            handleClose()
        }
        else {
            Alert.alert("Please fill all the fields")
        }
    }

    function deteleList(id) {
        const deleteItem = list.filter(li => li.id !== id)
        setList(deleteItem)
    }

    console.log("jhbhjubhhb", list)

    const navigation = useNavigation()

    return (
        // <ScrollView style={{ backgroundColor: "white" }}>
        <View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate("Screen")}>
                    <Text>Change</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.outer_div,
                // { height: windowHeight }
            ]}>
                <View style={styles.inner_div}>
                    <Text style={styles.mybooks}>My Books</Text>
                    <BookModal
                        show={show}
                        handleClose={handleClose}
                        handleChange={handleChange}
                        handleShow={handleShow}
                        handleAdd={handleAdd}
                    />
                    <Text style={styles.read}>Read / Want to read</Text>

                    <ScrollView>
                        {list.map(li => (
                            <View style={styles.list_bg}>
                                <Text style={styles.list_text}>{li.title}</Text>
                                <Text style={styles.list_text}>{li.author}</Text>
                                <Text style={styles.list_text}>{li.date}</Text>
                                <Text style={styles.list_text}>{li.notes}</Text>
                                <View style={styles.icon_view}>
                                    {/* <TouchableOpacity>
                                        <Image style={styles.icons} source={{ uri: "https://cdn-icons-png.flaticon.com/512/3597/3597088.png" }} />
                                    </TouchableOpacity> */}
                                    <Text> </Text>
                                    <TouchableOpacity onPress={() => deteleList(li.id)}>
                                        <Image style={styles.icons} source={{ uri: "https://cdn-icons-png.flaticon.com/512/3405/3405244.png" }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </View>
        // </ScrollView>
    )
}

const styles = StyleSheet.create({
    outer_div: {
        // borderWidth: 1,
        width: "90%",
        // height: "100%",
        // height: 800,
        alignSelf: "center",
        backgroundColor: "rgb(229, 156, 156)",
        // marginVertical: 5,
        padding: 25,
        marginBottom: 35
    },
    inner_div: {
        // borderWidth: 1,
        // width: "90%",
        height: "100%",
        // alignSelf: "center",
        // marginVertical: 20,
        borderRadius: 10,
        backgroundColor: "white"
    },
    mybooks: {
        color: "rgb(88, 32, 32)",
        fontSize: 25,
        alignSelf: "center",
        marginTop: 30,
        fontWeight: "500"
    },
    read: {
        color: "rgb(88, 32, 32)",
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "500",
        marginTop: 20,
        marginBottom: 10
    },
    icons: {
        width: 20,
        height: 20
    },
    list_bg: {
        backgroundColor: "lightpink",
        // borderWidth: 1,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        padding: 10
    },
    icon_view: {
        flexDirection: "row",
        alignSelf: "flex-end"
    },
    list_text: {
        // color: "rgb(88, 32, 32)",
        color: "black",
    }

})

export default BookApp