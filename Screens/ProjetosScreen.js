import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Linking,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const projects = [
    {
        title: 'Mini Pokedex',
        githubUrl: 'https://github.com/murilorigacci/mini-pokedex.git',
    },
    {
        title: 'App de Filme',
        githubUrl: 'https://github.com/murilorigacci/app-filme.git',
    },
    {
        title: 'ReadFlow',
        githubUrl: 'https://github.com/vinibertunho/ReadFlow-front-end.git',
    },
];

export default function ProjetosScreen() {
    const [msg, setMsg] = useState('');

    const abrirGitHub = (url) => {
        Linking.openURL(url).catch((err) => console.error('Erro ao abrir o link:', err));
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            {projects.map((project, i) => (
                <View key={i} style={styles.card}>
                    <Text style={styles.title}>{project.title}</Text>
                    <Text style={styles.text}>{project.description}</Text>

                    <TouchableOpacity
                        style={styles.githubLinkContainer}
                        onPress={() => abrirGitHub(project.githubUrl)}>
                        <MaterialCommunityIcons name="github" size={20} color="#00f5ff" />
                        <Text style={styles.linkText}>Acessar repositório</Text>
                    </TouchableOpacity>
                </View>
            ))}

            <View style={styles.cardContato}>
                <Text style={styles.titleContato}>Contato</Text>

                <TextInput
                    placeholder="Digite sua mensagem"
                    placeholderTextColor="#475569"
                    style={styles.input}
                    value={msg}
                    onChangeText={setMsg}
                    multiline
                />

                <TouchableOpacity style={styles.button} onPress={() => setMsg('')}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>
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
        paddingBottom: 40,
    },
    card: {
        backgroundColor: '#0b0f19',
        borderRadius: 12,
        padding: 18,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#1e293b',
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#f1f5f9',
        marginBottom: 8,
    },
    text: {
        fontSize: 14,
        color: '#94a3b8',
        marginBottom: 16,
        lineHeight: 22,
    },
    githubLinkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#072530',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#0b4f66',
    },
    linkText: {
        fontSize: 14,
        color: '#00f5ff',
        fontWeight: '600',
        marginLeft: 10,
    },
    cardContato: {
        backgroundColor: '#0b0f19',
        borderRadius: 12,
        padding: 18,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#1e293b',
    },
    titleContato: {
        fontSize: 15,
        fontWeight: '700',
        color: '#00f5ff',
        marginBottom: 12,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    input: {
        borderWidth: 1,
        borderColor: '#1e293b',
        borderRadius: 8,
        padding: 12,
        fontSize: 14,
        color: '#f1f5f9',
        backgroundColor: '#030712',
        marginBottom: 14,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#00f5ff',
        borderRadius: 8,
        padding: 14,
        alignItems: 'center',
    },
    buttonText: {
        color: '#030712',
        fontSize: 15,
        fontWeight: '700',
    },
});
