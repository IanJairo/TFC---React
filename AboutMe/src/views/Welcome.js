import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, FlatList, Text, Pressable, SafeAreaView, ScrollView, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Avatar, Card, Button } from 'react-native-paper';

import CardList from './../components/CardList';

let works = [
    {
        id: 1,
        title: 'AMA',
        subtitle: 'Maio 2022 - atual | Estagiário',
        description: 'Auxilio em diversas atividades, como gerenciamento de banco de dados, desenvolvimento de aplicações, instalação e configuração de redes e manutenção de equipamentos conectados em rede',
        technologies: 'Ionic, Firebase, MySQL'
    },
    {
        id: 2,
        title: 'Projeto de Pesquisa - IFAL',
        subtitle: 'Agosto 2022 - atual | Bolsista',
        description: 'Processo de desenvolvimento de Prancha de Comunicação Alternativa e Aumentativa para crianças com Transtorno do Espectro Autista (TEA)',
        technologies: 'Figma'
    },
    {
        id: 3,
        title: 'ORDITI SOFTWARE Ltda',
        subtitle: 'Abril 2021 - Dez 2021 | Desenvolvedor',
        description: 'Desenvolvimento de sistema unificado (aplicativo e plataforma Web) para o gerenciamento de licenças de funcionamento dos municípios brasileiros.',
        technologies: 'PHP, MySQL, JavaScript, Angular, HTML e CSS'
    }
];

export default function Welcome(props) {
    const [modalVisible, setModalVisible] = useState(true);
    const LeftContent = props => <Avatar.Image {...props} source={require('./../../assets/profile.png')} />

    const handleSubmit = (page) => {
        props.navigation.navigate(page);
    };


    return (

        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />


            <ScrollView  >
                <View style={styles.header}>
                    <Image
                        style={styles.image}
                        source={require('./../../assets/profile.png')}
                    />

                    <Text style={styles.title}>Ian Jairo T. Gonzales</Text>
                </View>

                <View style={{
                    padding: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>


                    <Button style={{flex: 2, marginRight:20}} icon="file-code-outline" mode="contained" onPress={() => handleSubmit('Projects')}>
                        Projetos
                    </Button>

                    <Button icon="account-box-outline" mode="contained" onPress={() => handleSubmit('Contact')}>
                        Contato
                    </Button>

                </View>



                <Text style={styles.card_title}>
                    Experiência Professional
                </Text>

                {
                    works.map((item, key) => <CardList key={key} work={item} />)
                }

            </ScrollView>

            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Seja bem-vindo!</Text>



                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Avançar</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },

    lista: {
        flexDirection: 'column',
        flex: 3
    },


    header: {
        alignContent: 'center',
        alignItems: 'center',
        padding: 20
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0077b6'
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

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
