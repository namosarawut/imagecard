import React from 'react'
import { View,SafeAreaView,Image,ScrollView } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default function AppCard5({navigation}) {
    return (
        <ScrollView>
        <SafeAreaView>
             <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('./assets/pf.jpg')} />
                <Body>
                <Text>Sarawut Saengchan</Text>
                  <Text note>Just now</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./assets/c5.png')} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                
              </Body>
              <Right>
              <Button onPress = {()=>navigation.navigate("card1")} style={{width:135}} >
                  <Text>Back To Card 1</Text>
                </Button>
              </Right>
            </CardItem>
            
          </Card>


         </SafeAreaView>
         </ScrollView>
         
    )
}
