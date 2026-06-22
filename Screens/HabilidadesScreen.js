import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const skills = [
    { name: 'React Native', icon: 'react' },
    { name: 'JavaScript', icon: 'language-javascript' },
    { name: 'Git', icon: 'git' },
    { name: 'Expo', icon: 'flash' },
    { name: 'UI/UX Design', icon: 'monitor-dashboard' },
];

export default function HabilidadesScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.grid}>
                {skills.map((item, i) => (
                    <View key={i} style={styles.card}>
                        <View style={styles.iconWrapper}>
                            <MaterialCommunityIcons name={item.icon} size={48} color="#00f5ff" />
                        </View>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                ))}
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
        padding: 24,
        alignItems: 'center',
        paddingBottom: 40,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 16,
        maxWidth: 1400,
    },
    card: {
        backgroundColor: '#0b0f19',
        width: 150,
        height: 150,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderWidth: 1,
        borderColor: '#1e293b',
    },
    iconWrapper: {
        marginBottom: 10,

    },
    text: {
        color: '#f1f5f9',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 14,
        letterSpacing: 0.5,
    },
});
