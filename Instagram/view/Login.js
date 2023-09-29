import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TextInput } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>

            <View style={{ flex: 0.5 }}>

            </View>
            <View style={styles.center}>
                <Image source={require("../assets/instagram_logo.png")} style={styles.logo} />
            </View>
            <View style={styles.input}>
                <TextInput
                    value='Phone number, user name or email'
                    style={{height: 40, width :'100%',borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}

                // onChangeText={onChangeText}
                />
                <TextInput
                    value='password'
                    style={{height: 40, width :'100%',
                        borderColor: 'gray', 
                        borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ input: text })}
                />
            </View>
            <View style={{ flex: 1, backgroundColor: "green" }}>

            </View>
            <View style={{ flex: 1, backgroundColor: "orange" }}>

            </View >

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    logo: {
        flex: 1,
        width: 180,
        height: 60,
        resizeMode: 'contain'
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
    input: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        margin : '10px'
    }
});