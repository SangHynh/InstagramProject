
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function Message() {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <View style={styles.head1}>
                    <TouchableOpacity>
                        <Image source={require('../amage/back.png')}
                            style={{ width: 25, height: 25, }} />

                    </TouchableOpacity>
                    <Text style={{ left: 10, fontWeight: '400', fontSize: 20 }}>be.dau</Text>

                </View>
                <View style={styles.head2}>
                    <Image source={require('../amage/videocamera.png')}
                        style={{ width: 30, height: 30, }} />
                    <Image source={require('../amage/edit.png')}
                        style={{ width: 25, height: 25, }} />

                </View>


            </View>

            <View style={styles.note}>
                <TouchableOpacity
                    style={{
                        width: 65,
                        height: 65,
                        resizeMode: "cover",
                        borderRadius: 70,
                        marginHorizontal: 5,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        source={require("../amage/avatar.png")}
                        style={{
                            width: 65,
                            height: 65,
                            resizeMode: "cover",
                            borderRadius: 40,
                        }}
                    ></Image>
                </TouchableOpacity>
                <Text style={{fontSize : 11,fontWeight:400,color: 'rgba(0, 0, 0, 0.41)', marginHorizontal:5}}>Ghi chú của bạn</Text>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }} >
                <Text style={{ color: '#000', fontSize: 16, fontWeight: 500, }}>Tin nhắn</Text>
                <Text style={{ color: '#0398FC', fontSize: 14, fontWeight: 400 }}>Tin nhắn đang chờ</Text>

            </View>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {

    },
    head: {
        height: 50,
        flexDirection: 'row',

    },
    head1: {
        width: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        left: 10


    },
    head2: {
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    note: {
        width: '100%',
        height: 100,
    },
});