import { Link } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ATTENDSURE</Text>
      <Text style={styles.subTitle}>Reset your password</Text>

      <Text style={styles.label}>Email Address</Text>
      <TextInput 
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.btnPrimary}>
        <Text style={styles.btnText}>Send Reset Link</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Back to{" "}
        <Link href="/(tabs)" style={styles.link}>Login</Link>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24 },
  title: { fontSize: 28, textAlign: "center", marginBottom: 4 },
  subTitle: { textAlign: "center", color: "#0A8A84", marginBottom: 20 },
  label: { marginBottom: 6 },
  input: {
    borderWidth: 1, borderColor: "#ccc",
    padding: 14, borderRadius: 10,
  },
  btnPrimary: {
    backgroundColor: "#0A8A84",
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
  },
  btnText: { textAlign: "center", color: "#fff" },
  footer: { textAlign: "center", marginTop: 20 },
  link: { color: "#0A8A84", fontWeight: "bold" },
});
