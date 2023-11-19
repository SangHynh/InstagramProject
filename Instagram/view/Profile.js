
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';



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
            {/* view chinh sua trang ca nhan */}
        <View style={{flex : 0.1 , justifyContent : 'space-between' , alignContent: 'center',flexDirection:'row', top: 5, marginHorizontal: 20 }}>
            <View  style= {{width: '45%',height:'70%', backgroundColor: '#EFEFEF',alignItems:'center', justifyContent: 'center',borderRadius: 10}}>
                <Text style={{fontWeight: '500'}}>
                Chỉnh sửa trang cá nhân
                </Text>

            </View >
            <View style= {{width: '45%',height:'70%', backgroundColor: '#EFEFEF',alignItems:'center', justifyContent: 'center',borderRadius: 10}}>
               <Text style={{fontWeight: '500'}}>
               Chia sẻ trang cá nhân
               </Text>

            </View>
            <View style={{width:'8%',height:'70%',backgroundColor: '#EFEFEF', alignItems:'center',justifyContent: 'center',borderRadius: 10}}>
                <TouchableOpacity   style={{height: 24, width: 24 }}>
                    <Image source={require('../amage/invite.png')} 
                        style={{height: 24, width: 24 , fontWeight:'500'}}
                     />
                </TouchableOpacity>


            </View>


        </View>
        <View style={{flex: 0.1 ,marginTop:10 , flexDirection : 'row' , justifyContent : 'space-around'}}>
            <TouchableOpacity>
                <Image source={require('../amage/grid.png')} 
                style={{width:30, height: 30}} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image  source={require('../amage/user-profile.png')}
                style={{width:30, height: 30}} />
            </TouchableOpacity>
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