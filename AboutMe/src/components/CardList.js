import { Avatar, Card, Button } from 'react-native-paper';
import {StyleSheet, View, Text} from 'react-native';
import React, { useState } from 'react';

export default function CardList( {work} ) {
    const LeftContent = props => <Avatar.Icon {...props} icon="office-building-outline" />

    return (

        <View style={styles.cards}>


            <View style={styles.card}>
                <Card>
                    <Card.Title
                        title={work.title}
                        subtitle={work.subtitle}
                        subtitleStyle={{color: '#0077b6'}}
                        left={LeftContent} />
                    <Card.Content>
                        <Text style={{ textAlign: 'justify' }} variant="bodySmall">
                            {work.description}
                        </Text>
                        <Text>
                            Tecnologias: {work.technologies}
                        </Text>
                    </Card.Content>
                </Card>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({

   card_title: {
        color: '#0077b6',
        padding: 20,
    },

    card: {
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20
    },

});