import React, { useState, useEffect } from 'react';
import { 
        View, 
        StyleSheet, 
        Text, 
        Image, 
        TouchableOpacity, 
        ScrollView, 
        Dimensions,
        Modal, 
        TouchableHighlight} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Basket from './Basket'

function Profile({ navigation }){

    const client = navigation.getParam('client')
    const { name, avatar } = client;
    const [ basket, setBasket ] = useState(client.basket)
    const [ screenWidth, setScreenWidth ] = useState(Dimensions.get('window').width);
    const [modalVisible, setModalVisible] = useState(false);

    function updateBasket(id) {
        const newBasket = basket.map(item => {
          if(item._id == id){
              item.state = !item.state
              console.log(item)
          }
          return item
        })
        setBasket(newBasket)
    }

      
    return (
        <>
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}>
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Finalizar compras?</Text>
                    <View style={styles.buttonsContainer}>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#DEDEDE" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                        <Text style={styles.textStyle}>Não</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#FFC043" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}>
                        <Text style={styles.textStyle}>Sim</Text>
                        </TouchableHighlight>
                    </View>                
                </View>
                </View>
            </Modal>
        </View>
        <View style={styles.container}>
           <View style={styles.header}>
                 <Image 
                    style={styles.avatar} 
                    source={{ uri: avatar }} />
                <Text style={styles.clientName}>{ name }</Text>
            
                <View style={styles.contact}>
                    <TouchableOpacity style={styles.phoneIcon} onPress={() => {
                      setModalVisible(!modalVisible)
                    }}>
                        <MaterialIcons name="shopping-cart" size={30} color="#FF5700"/>
                    </TouchableOpacity>
                </View> 
            </View>
        
            <View style={styles.subHeaders}>
                <TouchableOpacity onPress={()=>{console.log("tste")}}>
                    <Text style={styles.toDoList}> Produto </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{console.log("teste done")}}>
                    <Text style={styles.doneList}> Quantidade </Text>
                </TouchableOpacity>                
            </View>
        </View>
        <ScrollView >
                {
                    basket.map( (item, index) => (
                        <Basket  
                            key={item._id} 
                            item={item}
                            index={index} 
                            client={client}
                            updateBasket={updateBasket}/>
                     ))
                }                  
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    // viewPager: {
    //     flex: 1
    // },
    // pageStyle: {
    //     alignItems: 'center',
    //     padding: 20,
    // },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.7)'
      },
      modalView: {
          
        width: 290,
        height: 158,
        // margin: 20,
        backgroundColor: "white",
        borderRadius: 5,
        paddingTop: 35,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      buttonsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      openButton: {
        width: 110, 
        height: 40,
        backgroundColor: "#F194FF",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center",
      },
      textStyle: {
        color: "#000",
        fontFamily: 'Roboto',
        fontSize: 20,
        textAlign: "center"
      },
      modalText: {
        fontFamily: 'Roboto',
        fontSize: 25,
        marginBottom: 15,
        textAlign: "center"
      },
    container:{
        backgroundColor: '#FEC831',
        justifyContent: 'center',
        alignItems: 'center',
        // height: 12,
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 310,
        height: 77,
        backgroundColor: '#FFE9A1',
    },
    avatar:{
        width: 60,
        height: 60,
        borderRadius: 50,
        shadowOffset:{
            width: 4,
            height: 4,
        },
        marginLeft: 10,       
    },
    clientName:{
        width: 140,
        fontSize: 22,
        fontFamily: 'Roboto',
        marginLeft: 10,
    },
    contact:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    subHeaders:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 330,
        height: 34,
        marginTop: 5,
        backgroundColor: '#FFAD33'
    },
    toDoList:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',

    },
    doneList:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
})

export default Profile;