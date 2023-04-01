import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Style = StyleSheet.create({
    haderStyle: { flexDirection: "row", paddingVertical: wp(2), justifyContent: "space-between", alignItems: "center" },
    headerIcon: { height: wp(6), width: wp(6), marginLeft: wp(2) },
    headerTitle: { color: "grey", fontSize: wp(4) },
    headerSubTitle: { fontSize: wp(5), color:"black" },
    eyeStyle: { height: wp(4), width: wp(4) },
    giftbox: { height: wp(8), width: wp(8), marginRight:wp(2) },
    mainContainer: { flex: 1, backgroundColor: "white", paddingHorizontal: wp(4) },
    balanceCard: { width: "100%", backgroundColor: "#F8FAFE", padding: wp(5), borderRadius: wp(5) },
    balanceStatContainer: { flexDirection: "row", justifyContent: "space-between" },
    balanceText: { fontSize: wp(10) ,color:"black" },
    walletUserNameContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderWidth: 1, padding: wp(3), borderRadius: wp(5), borderColor: "#F5F5F5", marginVertical: wp(4) },
    menuContainer: {
        aspectRatio: 1,
        flexGrow: 1,
        width: "40%",
        position: "relative",
        margin: wp(2),
        borderRadius: wp(5),
        justifyContent: "center",
        alignItems: "center"
    },
    menuIcon: { height: wp(7), width: wp(7) },
    InviteEarnContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        padding: wp(3),
        borderRadius: wp(5),
        borderColor: "#F5F5F5",
        marginVertical:wp(4)
    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
      },
      textBold: {
        fontWeight: '500',
        color: '#000'
      },
      buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
      },
      buttonTouchable: {
        padding: 16
      },
      container:{flex:1, justifyContent:"center", alignItems:"center"},
      giftContainer:{flexDirection:"row", justifyContent:"center", alignItems:"center"},
      inviteEarn:{fontWeight:"bold", fontSize:wp(4), color:"black"},
      inviteEarnSub:{fontSize:wp(3), color:"black"},
      blackBold:{ fontWeight: "bold", color: "black" },
      black:{ color: "black" },
      greyText:{ fontSize: 14, color:"grey" },
      textGreen:{color:"#117B34"}

})