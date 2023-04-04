import React from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput } from "react-native";

function BookModal({
    show,
    handleClose,
    handleChange,
    handleShow,
    handleAdd
}) {
    return (
        <>
            <TouchableOpacity onPress={handleShow}>
                <Text style={styles.addNewBook}> Add New Book...</Text>
            </TouchableOpacity>

            <Modal transparent={true} visible={show}>
                <View style={styles.bg}>
                    <View style={styles.modal}>
                        <Text style={styles.modal_head}>Add New Book</Text>
                        <View style={styles.hr}></View>

                        <View>
                            <View style={styles.title_input_div}>
                                <Text style={styles.title}>Book Title</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(txt) => { handleChange("title", txt) }}
                                // value={input.title}
                                />
                            </View>
                            <View style={styles.title_input_div}>
                                <Text style={styles.title}>Author</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(txt) => { handleChange("author", txt) }}
                                // value={input.author}
                                />
                            </View>
                            <View style={styles.title_input_div}>
                                <Text style={styles.title}>Date Added</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="dd-mm-yyyy"
                                    onChangeText={(txt) => { handleChange("date", txt) }}
                                // value={input.date}
                                />
                            </View>
                            <View style={styles.title_input_div}>
                                <Text style={styles.title}>Notes</Text>
                                <TextInput
                                    style={styles.notes_input}
                                    multiline
                                    numberOfLines={5}
                                    onChangeText={(txt) => { handleChange("notes", txt) }}
                                // value={input.notes}
                                />
                            </View>
                        </View>

                        <View style={styles.hr}></View>
                        <View style={styles.btn_div}>
                            <TouchableOpacity onPress={handleClose} >
                                <Text style={styles.btn}>Close</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleAdd} >
                                <Text style={styles.btn}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: 'center'
    },
    addNewBook: {
        // borderWidth: 1,
        color: "white",
        backgroundColor: "rgb(194, 81, 81)",
        marginHorizontal: 15,
        borderRadius: 5,
        padding: 4,
        marginTop: 10,
        fontSize: 15
    },
    modal: {
        height: "70%",
        width: "75%",
        backgroundColor: "seashell",
        borderRadius: 7
    },
    modal_head: {
        color: "black",
        fontSize: 20,
        padding: 10,
        fontWeight: "500"
    },
    hr: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    title_input_div: {
        // borderWidth: 1,
        padding: 10,
        gap: 5
    },
    title: {
        color: "black",
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        height: 40,
        backgroundColor: "white",
        borderRadius: 6,
        color: "black",
    },
    notes_input: {
        borderWidth: 1,
        backgroundColor: "white",
        borderRadius: 6,
        color: "black",
        marginBottom: 10

    },
    btn_div: {
        flexDirection: "row",
        justifyContent: "flex-end",
        // borderWidth: 1,
        marginTop: 20,
        gap: 10,
        marginHorizontal: 10

    },
    btn: {
        color: "white",
        backgroundColor: "grey",
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    }
})


export default BookModal