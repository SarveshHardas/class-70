import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, TextInput} from 'react-native';
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

const bgImage = require("../assets/background2.png");
const appIcon = require("../assets/appIcon.png");
const appName = require("../assets/appName.png");

export default class TransactionScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            domState:"normal",
            hasCameraPermissions:null,
            scanned:false,
            bookId:"",
            studentId:"",
        }
    }


    getCameraPermission = async (domState)=>{
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState(
            {
                domState:domState,
                hasCameraPermissions:status==="granted",
                //status===granted is true when user has granted permission
                //status===granted is false when user has not granted permission
                scanned:false,
            }
        )
    }

    handleBarCodeScanned = async ({type,data}) =>{
        const {domState} = this.state;
        if(domState==="bookId")
        {
            this.setState({
            domState:"normal",
            scanned:true,
            bookId:data,

           })
        }
        else if(domState==="studentId")
        {
            this.setState({
            domState:"normal",
            scanned:true,
            studentId:data,
           })
        }
    } 

    render(){
        const {domState,scanned,hasCameraPermissions,bookId,studentId}=this.state;
        if(domState!=="normal")
        {
            return(
                <BarCodeScanner 
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
            )
        }

        return(
            <View style={styles.container}>

                <ImageBackground source={bgImage} style={styles.bgImg} >

                <Text style={styles.text}>
                    {
                        hasCameraPermissions ? scannedData : "request for Camera Permissions"
                    }
                </Text>
                <View style={styles.upperContainer}>
                <Image source={appIcon} style={styles.appIcon} />   
                <Image source={appName} style={styles.appName} />
                </View>
                <View style={styles.lowerContainer}>  
                <View style={styles.textInputContainer}>
                    <TextInput 
                    style={styles.textInput}
                    placeholder={"Book Id"}
                    placeholderTextColor={"#ffffff"}
                    value={bookId}
                    />
                <TouchableOpacity onPress={()=>{
                    this.getCameraPermission("bookId")
                }}
                style={styles.buttonStyle}
                >
                    <Text style={styles.bText}>Scan</Text>
                </TouchableOpacity>
                </View>

                <View style={[styles.textInputContainer,{marginTop:25}]}>
                    <TextInput 
                    style={styles.textInput}
                    placeholder={"Student Id"}
                    placeholderTextColor={"#ffffff"}
                    value={bookId}
                    />
                <TouchableOpacity onPress={()=>{
                    this.getCameraPermission("studentId")
                }}
                style={styles.buttonStyle}
                >
                    <Text style={styles.bText}>Scan</Text>
                </TouchableOpacity>
                </View>

                </View>
               </ImageBackground>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"blue"
    },
    text:{
        color:'white',
        fontSize:15,
    },
    buttonStyle:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:15,
        width:"43%",
        height:55
    },
    bText:{
        color:'black',
        fontSize:24,
    },
})