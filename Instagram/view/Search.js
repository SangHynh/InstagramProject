
import { useEffect } from 'react';
import { StyleSheet, Text, Image, View, TextInput } from 'react-native';

var url = 'https://654495305a0b4b04436c8ab9.mockapi.io/imageig'



export default function Search() {

    useEffect( ()=> {
    fetch(url)
        .then(response => response.json() )
        .then((json) => {
            var newarr = json.filter((item) => {
                return item
            })
            console.log(newarr.id);
        },[])

    })


  return (
    <View style={styles.container}>
        <View style={{flex: 0.1 ,justifyContent: 'center', alignItems:'center'}} >
            <View style={{width: '90%',height:'60%', backgroundColor: '#E7E7E7B5',borderRadius:10,marginTop: 10,flexDirection: 'row' }} >
                
                <Image style={{width: 25, height: 25 ,marginTop: 10, left: 10, position: 'absolute'}} source={require('../amage/search.png')}></Image>
                <TextInput style= {{height: '100%', width: '100%', paddingLeft : 80 ,fontSize: 20}}
                placeholder='Tìm kiếm'>
                </TextInput>


            </View>

        </View>


        {/* giua man hinh */}
        <View style={{flex: 0.85, backgroundColor : 'red'}}>
            <Text>{}</Text>

        </View>





    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});