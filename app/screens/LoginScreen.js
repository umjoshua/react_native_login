import { View, Text, Image, StyleSheet, TextInput, ScrollView, Pressable, Dimensions } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useTogglePasswordVisibility } from '../components/useTogglePasswordVisibility';

const screenHeight = Dimensions.get('window').height;

const LoginScreen = () => {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const [emailId, setemailId] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image source={require('../assets/scmy_logo.png')}></Image>
                    <Text style={styles.logoTextWelcome}>Welcome to</Text>
                    <Text style={styles.logoText}>TMS DRIVER APP</Text>
                </View>
                <View style={styles.loginForm}>
                    <View style={styles.emailInput}>
                        <MaterialIcons name="email" size={30} color="#666" />
                        <TextInput
                            placeholder='Email ID'
                            style={{ fontSize: 17, padding: 10, width: '100%', }}
                            value={emailId}
                            onChangeText={(text) => setemailId(text)}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.passwordInput}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcons name="vpn-key" size={30} style={styles.email_icon} />
                            <TextInput
                                value={password}
                                placeholder='Password'
                                style={{ fontSize: 17, padding: 10, width: '100%', }}
                                textContentType='newPassword'
                                onChangeText={(text) => setPassword(text)}
                                secureTextEntry={passwordVisibility}

                            >
                            </TextInput>
                            <Pressable onPress={handlePasswordVisibility}>
                                <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.options}>
                        <Text style={styles.label}>Remember Me</Text>
                        <Text style={styles.label}>Forgot Password</Text>
                    </View>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#2F4E62', '#3EA7A7']} style={styles.linearGradient}>
                    <Pressable>
                        <Text style={{ color: 'white', fontSize: 20 }}>Login</Text>
                    </Pressable>
                    </LinearGradient>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text style={styles.label}>or Sign in with Google</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Pressable style={styles.googleSignIn}>
                        <Image source={require('../assets/google.png')} style={{ marginRight: 10 }} resizeMode="contain" />
                        <Text style={styles.label}>Sign in with Google</Text>
                    </Pressable>
                </View>
                <View style={styles.base}>
                    <Image
                        source={require('../assets/scmy_logo_2.png')}
                        style={styles.baseImage}
                    />
                </View>
            </View> 
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        minHeight: screenHeight,
    },
    logo: {
        marginTop: '15%',
        alignItems: 'center',
    },
    logoTextWelcome: {
        marginTop: '5%',
        fontSize: 16,
        fontFamily: 'Inter',
        fontWeight: '700',
        color: '#2F4E62',
    },
    logoText: {
        fontSize: 24,
        fontFamily: 'Inter',
        fontWeight: '700',
        color: '#2F4E62',
    },
    loginForm: {
        alignItems: 'center',
        width: '100%',
        marginTop: '5%',
        paddingBottom: 25,
    },
    emailInput: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        borderBottomColor: '#2F4E62',
        borderBottomWidth: 2,
    },
    passwordInput: {
        marginTop: '2%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        borderBottomColor: '#2F4E62',
        borderBottomWidth: 2,
    },
    options: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 24
    },
    label: {
        fontSize: 16,
        color: 'black',
        fontWeight: '600',
    },
    loginButton: {
        width: '80%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#2F4E62',
        marginTop: '5%'
    },
    googleSignIn: {
        padding: 5,
        margin: '5%',
        backgroundColor: 'white',
        borderRadius: 5,
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
    },
    base: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
    },
    baseImage: {
        width: '40%',
        height: 90,
    },
    linearGradient: {
        flex: 1,
        width: '80%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: '#2F4E62',
        marginTop: '5%'
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
})

export default LoginScreen