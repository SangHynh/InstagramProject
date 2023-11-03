
import { StyleSheet, Text, Image, View, TextInput } from 'react-native';



export default function Profile() {


  return (
    <View style={styles.container}>

        {/* view dau */}
        <View style={{flex: 0.1 ,justifyContent: 'center', alignItems:'center'}} >
            <View style={{width: '90%',height:'60%', marginTop : 10 ,flexDirection: 'row'}}>
                <View style={{width: '75%', flexDirection: 'row',alignItems: 'center', backgroundColor: 'white'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}} >be.dau_ </Text>
                    <Image style={{width: 15,height:15 , marginTop : 5,}}
                        source={require('../amage/down.png')}></Image>

                </View>
                <View style={{width: '25%',flexDirection: 'row',alignItems : 'center', justifyContent: 'flex-end', justifyContent: 'space-around'}} >
                    <Image style={{width: 25,height:25 ,}}
                        source={require('../amage/plus.png')}/>
                    <Image style={{width: 25,height:25 ,}}
                        source={require('../amage/menu.png')}/>
                </View>
                
            </View>
        </View>


        {/* giua man hinh */}
        <View style={{flex: 0.15 , flexDirection :'row'}}>
            <View style={{width : '35%',backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{width :80,height:80}} 
                source={require('../amage/avatar.png')}/>
                <View style={{alignItems: 'center'}}><Text style={{fontWeight: 'bold'}}>ke si tinh uong sting</Text></View>

            </View>
            <View style={{width : '65%', justifyContent: 'space-between',flexDirection: 'row',}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontWeight: '900'}}>9</Text>
                    <Text>Bài viết</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontWeight: '900'}}>10.156</Text>
                    <Text>Đang theo dõi</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',marginHorizontal:10}}>
                    <Text style={{fontWeight: '900'}}>2</Text>
                    <Text>Người theo dõi</Text>
                </View>

            </View>

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