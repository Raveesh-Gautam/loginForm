import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Background from './Background';
import Butt from './Butt'; // Assuming Btn is your custom button component
import { darkGreen } from './Constant';
import Field from './Field';
import axios from 'axios';

const Register = ({ navigation }) => {
    const [name, setName] = useState('');
    const [emailId, setEmail] = useState('');
    const [phoneNo, setPhoneNumber] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');

    const sendCred = async () => {
        // Check if all fields are filled
        // alert(`${age}, ${name}, ${emailId}, ${phoneNo}, ${password}, ${location}`);
        const formData = {
            name,
            phoneNo,
            age,
            password,
            location,
            emailId
        }

        try {
            await axios.post('http://localhost:5001/api/v1/user/register', formData, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                if (response.status === 200) {
                    alert("Success");
                }
                else {
                    alert("Failure")
                }
            })

        } catch (error) {
            alert(error.message || "Internal server error in catch")
        }
    };

    return (
        <Background>
            <View style={{ alignItems: 'center', width: 460 }}>
                <Text style={{ color: 'white', fontSize: 64, fontWeight: 'bold', marginTop: 20 }}>
                    Register
                </Text>
                <Text style={{ color: 'white', fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>
                    Create a new account
                </Text>
                <View style={{ backgroundColor: 'white', height: 700, width: 460, borderTopLeftRadius: 130, paddingTop: 50, alignItems: 'center' }}>
                    <Field placeholder="Name" onChangeText={setName} value={name} />
                    <Field placeholder="location" onChangeText={setLocation} value={location} />
                    <Field placeholder="Email / Username" keyboardType="email-address" onChangeText={setEmail} value={emailId} />
                    <Field placeholder="Phone Number" keyboardType="phone-pad" onChangeText={setPhoneNumber} value={phoneNo} />
                    <Field placeholder="Age" keyboardType="number-pad" onChangeText={setAge} value={age} />
                    <Field placeholder="Password" secureTextEntry={true} onChangeText={setPassword} value={password} />

                    <View style={{ flexDirection: 'row', width: '78%', paddingRight: 16 }}>
                        <Text style={{ color: 'grey', fontSize: 16 }}>
                            By registering, you agree to our{' '}
                        </Text>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                            Terms & Conditions
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', width: '78%', paddingRight: 16, marginBottom: 10 }}>
                        <Text style={{ color: 'grey', fontSize: 16 }}>
                            and {' '}
                        </Text>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                            Privacy Policy
                        </Text>
                    </View>

                    <Butt textColor="white" bgColor={darkGreen} btnLabel="Register" Press={() => sendCred()} />

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                            Already have an account?{' '}
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    );
};

export default Register;
