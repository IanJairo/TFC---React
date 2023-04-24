import { Linking,View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react'
import { StatusBar } from 'expo-status-bar';

import { Avatar, Card, Button } from 'react-native-paper';

export default function Projects() {
    const StopWatch = props => <Avatar.Icon   {...props} icon="timer-outline" />
    const BudBank = props => <Avatar.Icon {...props} icon="bank-plus" />
    const TodoList = props => <Avatar.Icon {...props} icon="list-status" />

    return (

        <SafeAreaView style={styles.container}>

            <StatusBar style="dark" />

            <ScrollView  >



                <View style={styles.cards}>


                    <Text style={styles.card_title}>
                        Apps desenvolvidos com React Native
                    </Text>

                    <View style={styles.card}>
                        <Card>
                            <Card.Cover style={styles.coveer} source={require('./../../assets/projects/sw.png')} />
                            <Card.Title title="StopWatch" subtitle="App de cronômetro" left={StopWatch} />
                            <Card.Content>
                                <Text style={{ textAlign: 'justify' }} variant="bodySmall">O aplicativo de cronômetro é uma ferramenta útil para medir o tempo decorrido de uma determinada atividade. Com uma interface simples e intuitiva, o usuário pode iniciar, pausar e reiniciar o cronômetro facilmente. </Text>
                            </Card.Content>

                            <Card.Actions>
                                <Button onPress={() => {
                                    Linking.openURL('https://github.com/IanJairo/StopWatch'); 
                                }}>GitHub</Button>
                            </Card.Actions>
                        </Card>
                    </View>

                    <View style={styles.card}>
                        <Card>
                            <Card.Cover source={require('./../../assets/projects/bb.png')} />

                            <Card.Title title="BudBank" subtitle="App de Formulário" left={BudBank} />
                            <Card.Content>
                                <Text style={{ textAlign: 'justify' }} variant="bodySmall">O BudBank é uma ferramenta fácil e intuitiva para abrir uma nova conta bancária. Com apenas algumas informações pessoais, você pode ter sua conta criada em questão de segundos.</Text>
                            </Card.Content>

                            <Card.Actions>
                                <Button onPress={() => {
                                    Linking.openURL('https://github.com/IanJairo/BankApp');
                                }}>GitHub</Button>
                            </Card.Actions>
                        </Card>
                    </View>

                    <View style={styles.card}>
                        <Card>
                            <Card.Cover  style={styles.coover} source={require('./../../assets/projects/todoList.png')} />

                            <Card.Title title="TODOList" subtitle="App de Tarefas" left={TodoList} />
                            <Card.Content>
                                <Text style={{ textAlign: 'justify' }} variant="bodySmall">O TODOList é uma ferramenta simples para organizar suas tarefas. Basta adicionar um texto e escolher a prioridade da mesma que ela aprecerá na ordem desejada.</Text>
                            </Card.Content>

                            <Card.Actions>
                                <Button onPress={() => {
                                    Linking.openURL('https://github.com/IanJairo/todo-list-react'); 
                                }}>GitHub</Button>
                            </Card.Actions>
                        </Card>
                    </View>

                </View>
            </ScrollView>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20
    },


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