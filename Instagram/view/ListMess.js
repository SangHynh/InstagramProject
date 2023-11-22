
import { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput } from 'react-native';

export default function ListMess() {
    const [text, setText] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.head} >
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%' }} >
                    <TouchableOpacity style={{ justifyContent: 'center', }}>
                        <Image source={require('../amage/back.png')}
                            style={{ height: 35, width: 35, }} />
                    </TouchableOpacity>
                    <Image source={require('../amage/avatar.png')}
                        style={{ height: 50, width: 50, }} />
                    <Text style={{ color: '#000', fontSize: 20, fontWeight: '600', left: 5 }} >jessica</Text>
                </View>
                <View style={styles.headRight}>
                    <TouchableOpacity style={{ justifyContent: 'center', }}>
                        <Image source={require('../amage/call.png')}
                            style={{ height: 40, width: 40, }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', }}>
                        <Image source={require('../amage/videocallmess.png')}
                            style={{ height: 35, width: 35, }} />
                    </TouchableOpacity>

                </View>


            </View>
            <View style={styles.foot}>
                <View style={styles.input} >
                    <TouchableOpacity style={{ backgroundColor: 'blue', left: 5, width: 40, height: 40, borderRadius: 25, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../amage/camera.png')}
                            style={{ height: 30, width: 30, }} />
                    </TouchableOpacity>
                    <TextInput placeholder='Nhắn tin...'
                        onChangeText={(input) => {
                            setText(input);
                        }}
                        style={{ height: '100%', fontSize: 16, fontWeight: 300, color: '#686767', padding: 20, paddingLeft: 60 }} />
                    {text == '' ?
                        // <View style={{width:'80%', position: 'absolute',justifyContent: 'flex-end',flexDirection: 'row',}}>
                            <TouchableOpacity style={{ position: 'absolute',right:2 }}>
                                <Image source={require('../amage/micro.png')}
                                    style={{ height: 30, width: 30, }} />
                            </TouchableOpacity>
                            // <TouchableOpacity style={{ position: 'absolute' }}>
                            //     <Image source={require('../amage/pic.png')}
                            //         style={{ height: 30, width: 30, }} />
                            // </TouchableOpacity>
                        //     <TouchableOpacity style={{ position: 'absolute' }}>
                        //         <Image source={require('../amage/emoji.png')}
                        //             style={{ height: 30, width: 30, }} />
                        //     </TouchableOpacity>
                        // </View>
                        :
                        <TouchableOpacity style={{ position: 'absolute', right:2 }}>
                            <Image source={require('../amage/send.png')}
                                style={{ height: 30, width: 30, }} />
                        </TouchableOpacity>}

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        height: 70,
        width: 'auto',
        borderBottomColor: '#CDCDCD',
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    headRight: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }, foot: {
        height: 62,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '90%',
        height: 50,
        backgroundColor: '#F6F6F8',
        border: 1,
        borderRadius: 10,
        justifyContent: 'center',

    },

});