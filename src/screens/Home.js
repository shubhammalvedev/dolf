import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppHeader } from "../components/AppHeader";
import * as Assets from "../components/assets";
import { Style } from "../components/Styles";

const Home = (props) => {
    let array = [
        { name: "Buy Crypto", icon: Assets.dollar },
        { name: "Swap Crypto", icon: Assets.Swap },
        { name: "Transactions", icon: Assets.book },
        { name: "Markets", icon: Assets.trending }
    ]
    renderMenu = (item, index) => {
        return (
            <View style={[
                Style.menuContainer,
                index % 2 === 0
                    ? {
                        paddingRight: 10,
                    } : {
                        paddingLeft: 10,
                    },
                {
                    backgroundColor:
                        item.name == "Buy Crypto" ?
                            "#E7FFF9" : item.name == "Swap Crypto" ?
                                "#FFF4E6" : item.name == "Transactions" ?
                                    "#F0F6FF" : "#F8F8F8",
                }
            ]}>
                <Image source={item.icon} style={Style.menuIcon} />
                <Text style={{
                    color:
                        item.name == "Buy Crypto" ? "#19A684" :
                            item.name == "Swap Crypto" ? "#FF8A00" :
                                item.name == "Transactions" ? "#0052FE" :
                                    "#697E97"
                }} key={index}>{item.name}</Text>
            </View>
        )
    }
    return (
        <ScrollView style={Style.mainContainer}>
            <SafeAreaView>
                <AppHeader
                    title={'Hello'}
                    subTitle={'description'}
                    firstImg={Assets.bell}
                    secondImg={Assets.scanner}
                    secondImgOnpress={() => props.navigation.navigate("QrCodeScreen")} />
                {/* balance card start */}
                <View
                    style={Style.balanceCard}>
                    <Text style={Style.greyText}>
                        Total Balance <Image source={Assets.eye} style={Style.eyeStyle} />
                    </Text>
                    <View style={Style.balanceStatContainer}>
                        <Text style={Style.balanceText}>$ 3232323.00</Text>
                        <View>
                            <Text style={{ ...Style.greyText, fontSize: 10 }}>
                                24H change
                            </Text>
                            <Text style={Style.textGreen}>
                                240.36<Image source={Assets.uptick} style={Style.eyeStyle} />
                            </Text>
                        </View>
                    </View>
                </View>
                {/* balance card start */}
                {/* get wallet card start*/}
                <View style={Style.walletUserNameContainer}>
                    <Image source={Assets.star} style={Style.eyeStyle} />
                    <View>
                        <Text style={Style.black}>Get your free <Text style={Style.blackBold}>.wallet</Text> username</Text>
                    </View>
                    <Image source={Assets.rightArrow} style={Style.eyeStyle} />
                </View>
                {/* get wallet card end*/}

                <FlatList
                    scrollEnabled={false}
                    data={array}
                    numColumns={2}
                    style={{ width: "100%" }}
                    ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
                    renderItem={({ item, index }) => renderMenu(item, index)}
                />
                {/* Invite and earn card start*/}
                <View style={Style.InviteEarnContainer}>
                    <View style={Style.giftContainer}>
                        <Image source={Assets.gift} style={Style.giftbox} />
                        <View>
                            <Text style={Style.inviteEarn}>Invite and Earn</Text>
                            <Text style={Style.inviteEarnSub}>Invite 3 freinds and earn upto $20 in Matic</Text>
                        </View>
                    </View>

                    <Image source={Assets.rightArrow} style={Style.eyeStyle} />
                </View>
                {/* Invite and earn card end*/}
            </SafeAreaView>
        </ScrollView>
    )
}
export default Home;
