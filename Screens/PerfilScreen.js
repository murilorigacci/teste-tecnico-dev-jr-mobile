import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function PerfilScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.cardCentrado}>
                <Image
                    source={{
                        uri: 'https://i.pinimg.com/736x/79/78/d1/7978d11eb9b7c63389b1e0dce53b3b22.jpg',
                    }}
                    style={styles.image}
                />

                <Text style={styles.name}>Murilo Rigacci Rocha</Text>
                <Text style={styles.role}>Dev Mobile & Full-Stack</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Sobre mim</Text>
                <Text style={styles.text}>
                    Desenvolvedor em constante evolução, focado na construção de aplicações
                    modernas utilizando o ecossistema JavaScript, com forte ênfase em React Native
                    e arquiteturas full-stack. Apaixonado por transformar ideias em interfaces fluidas,
                    limpas e funcionais, busco sempre aplicar as melhores práticas de componentização,
                    estilização responsiva e usabilidade para garantir uma experiência excepcional ao usuário.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#030712',
    },
    contentContainer: {
        padding: 16,
        paddingBottom: 32,
    },
    cardCentrado: {
        backgroundColor: '#0b0f19',
        padding: 24,
        borderRadius: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#1e293b',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#0b0f19',
        padding: 20,
        borderRadius: 12,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#1e293b',
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 55,
        marginBottom: 16,
        borderWidth: 2,
        borderColor: '#00f5ff',
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        color: '#f1f5f9',
        marginBottom: 4,
    },
    role: {
        fontSize: 14,
        color: '#00f5ff',
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    title: {
        fontSize: 15,
        fontWeight: '700',
        color: '#00f5ff',
        marginBottom: 12,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    text: {
        color: '#94a3b8',
        fontSize: 15,
        lineHeight: 24,
    },
});
