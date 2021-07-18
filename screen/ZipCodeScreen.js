import React from 'react'
import { FlatList,View, Text, StyleSheet , StatusBar , ImageBackground} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
const availableZipItems = [
    { place: 'Hatyai', code: '90110', pic:require('../hatyai.jpg') },
    { place: 'Trang', code: '92000' , pic:require('../trang.jpg') },
    { place: 'Chiangmai', code: '50000' ,pic:require('../cma.jpg')}, 
    { place: 'Khonkaen', code: '40000' ,pic:require('../khonkaen.jpg') },
    { place: 'Chonburi', code: '20000',pic:require('../chomburi.jpg' ) },
    { place: 'Samut Prakan',code: '10240',pic:require('../samut-prakan.jpg')},
    { place: 'Surat Thani',code: '81110',pic:require('../surat-thani.jpg') },
    {place: 'Krabi', code: '81065',pic:require('../krabi.jpg') },
    { place: 'Satun', code: '917780',pic:require('../satun.jpg')}
] 

    
const ZipItem = ({place, code,navigation,pic}) => (
    <TouchableHighlight onPress={() => 
        navigation.navigate('Weather', { zipCode: code})}>
         <View style={styles.zipItem}>
        <ImageBackground source={pic} style={styles.contan}>
         <Text style={styles.textEditor}>{place}</Text>
         </ImageBackground>
    </View>

</TouchableHighlight>
        )   
    
   export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return ( 
    <FlatList
        data={availableZipItems}
        keyExtractor={ item => item.code}
        renderItem={({item}) => <ZipItem {...item} 
        navigation={navigation}/>}/>    
    )
   } const styles = StyleSheet.create({
        zipItem: {
        flex:1,
        },
        zipPlace: {
        flex:1,
        },
        zipCode: {
            flex:1,
        },

       contan:{
        height:100,
        width:415,
        padding:55,
        justifyContent:'center',
        alignItems:'center',
    },
        textEditor:{
            fontWeight: "bold",
            alignItems: 'center',
            color:'white',
            fontSize:30,
        },
            zipPlace: {
            flex:1,
            },
            zipCode: {
            flex:1,
            }
           });
   