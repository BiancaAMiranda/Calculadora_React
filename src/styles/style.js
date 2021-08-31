import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    head:{
        backgroundColor:'pink',
        height:100,
        justifyContent: 'center',
        alignItems: "center"
    },
    headtitle:{
        fontSize:30,
        fontWeight:'bold',
    },
    visor:{
        flex:2,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    visortext:{
        width:'90%',
        height: 70,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        textAlign:'center',
        paddingVertical:18,
        backgroundColor: 'lightgrey',
    },
    input:{
        height:35,
        paddingHorizontal:10,
        textAlign:'center',
        width:'50%',
        backgroundColor: 'lightgrey',
    },
})