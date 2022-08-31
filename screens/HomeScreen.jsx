import React from 'react';
import {View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Platform} from "react-native";
import { EvilIcons, AntDesign } from '@expo/vector-icons';



export default function HomeScreen({navigation}) {

    const DATA = [
        {
            id: '1',
            title: 'First Item',
        },
        {
            id: '2',
            title: 'Second Item',
        },
        {
            id: '3',
            title: 'Third Item',
        },
        {
            id: '4',
            title: 'Fourth Item',
        },
        {
            id: '5',
            title: 'Fifth Item',
        },
        {
            id: '6',
            title: 'Six Item',
        },
        {
            id: '7',
            title: 'Seven Item',
        },
        {
            id: '8',
            title: 'eight Item',
        },
        {
            id: '9',
            title: 'Nine Item',
        },
        {
            id: '10',
            title: 'Ten Item',
        },
    ];

    function gotoProfile(){
        navigation.navigate('Profile Screen');
    }

    function gotoSingleTweet(){
        navigation.navigate('Tweet Screen');
    }

    function gotoNewTweet(){
        navigation.navigate('New Tweet');
    }

    const renderItem = ({item}) => (
        <View style={styles.tweetContainer}>
            <TouchableOpacity onPress={() => gotoProfile()}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
            </TouchableOpacity>
            <View style={{ flex: 1}}>
                <TouchableOpacity style={styles.flexRow} onPress={() => gotoSingleTweet()}>
                    <Text numberOfLines={1} style={styles.tweetName}>{item.title}</Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}>@scumbagblues</Text>
                    <Text>&middot;</Text>
                    <Text numberOfLines={1} style={styles.tweetHandle}>9m</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tweetContentContainer} onPress={() => gotoSingleTweet()}>
                    <Text style={styles.tweetContent}>
                        lorDexter historias ducunt ad fluctus.em Altus torus solite examinares gemna est.
                        lorDexter historias ducunt ad fluctus.em
                        lorDexter historias ducunt ad fluctus.em
                    </Text>
                </TouchableOpacity>
                <View style={styles.tweetEngagement}>
                    <TouchableOpacity style={[styles.flexRow]}>
                        <EvilIcons name="comment" size={22} color="gray" style={{ marginRight:2 }}/>
                        <Text style={styles.textGray}>456</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="retweet" size={22} color="gray" style={{ marginRight:2 }}/>
                        <Text style={styles.textGray}>32</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons name="heart" size={22} color="gray" style={{ marginRight:2 }}/>
                        <Text style={styles.textGray}>4,456</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.flexRow, styles.ml4]}>
                        <EvilIcons
                            name={Platform.OS === 'ios' ? 'share-apple': 'share-google'}
                            size={22}
                            color="gray"
                            style={{ marginRight:2 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={styles.tweetSeparator}/>}
            />
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => gotoNewTweet()}
            >
                <AntDesign name="plus" size={26} color="white" />
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
    },
    flexRow: {
        flexDirection: 'row',
    },
    tweetContainer: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    tweetSeparator: {
      borderBottomWidth: 1,
      borderBottomColor: '#e5e7eb'
    },
    avatar: {
        width: 42,
        height: 42,
        marginRight: 8,
        borderRadius: 21
    },
    tweetName: {
        fontWeight: 'bold',
        color: '#222222',
    },
    tweetHandle: {
        marginHorizontal: 9,
        color: 'gray',
    },
    tweetContentContainer: {
        marginTop: 4,
    },
    tweetContent: {
        lineHeight: 20
    },
    textGray: {
        color: 'gray',
    },
    tweetEngagement: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    floatingButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d9bf1',
        position: 'absolute',
        bottom: 12,
        right: 12,
    },

    ml4: {
       marginLeft:16,
    }

})

