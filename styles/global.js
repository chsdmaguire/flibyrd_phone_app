import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    titleText: {
        fontSize: 32,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        marginTop: -80
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    textInput: {
        height: 50,
        borderColor: 'grey',
        borderWidth: .5,
        // paddingTop: 3,
        padding: 5,
        fontSize: 21,
        margin: 4,
        borderRadius: 10,
        width: 300,
      },
      numericInput: {
        height: 50,
        borderColor: 'grey',
        borderWidth: .5,
        padding: 5,
        margin: 4,
        fontSize: 21,
        borderRadius: 10,
        width: 300,
      },
    continueButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        marginTop: 50,
        width: 200,
    },
        ctnueBtnText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        },

        backBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        borderWidth: 2,
        elevation: 3,
        backgroundColor: 'white',
        marginTop: 20,
        borderColor: 'black',
        width: 200,
        },
        backBtnText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',   
        },
        explainText: {
            fontSize: 10,
            color: '#808080',
            textAlign: 'center',
            textDecorationLine: 'underline'
        },
        goalItem: {
            alignItems: "center",
            backgroundColor: "#DDDDDD",
            padding: 10
        },
        closeButton: {
            position: 'absolute',
            right: 5,
            top: 30,
        }
  })
  