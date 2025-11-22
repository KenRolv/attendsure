import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter(); // ✅ for navigation

  return (
    <View style={styles.container}>
      {/* Logo/Icon */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Ionicons name="shield-checkmark" size={48} color="#0A8A84" />
        </View>
        <Text style={styles.appName}>ATTENDSURE</Text>
      </View>

      <Text style={styles.title}>Join AttendSure Today</Text>
      <Text style={styles.subtitle}>Choose your role to get started</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.btnPrimary}
          onPress={() => router.push("/student-login")} // ✅ go to Student Login
        >
          <View style={styles.btnContent}>
            <View style={styles.btnIconWrapper}>
              <Ionicons name="school-outline" size={24} color="#fff" />
            </View>
            <View style={styles.btnTextContainer}>
              <Text style={styles.btnText}>Use Student</Text>
              <Text style={styles.btnSubtext}>Access your attendance</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#fff" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => router.push("/organizer-login")} 
        >
          <View style={styles.btnContent}>
            <View style={styles.btnIconWrapperOutline}>
              <Ionicons name="person-outline" size={24} color="#0A8A84" />
            </View>
            <View style={styles.btnTextContainer}>
              <Text style={styles.btnOutlineText}>Use Organizer</Text>
              <Text style={styles.btnOutlineSubtext}>Manage Event attendance</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#0A8A84" />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        Don't have an ACCOUNT?{" "}
        <Link href="/register" style={styles.link}>
          Register here
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#F8FAFB",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E0F7F6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#0A8A84",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  appName: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0A8A84",
    letterSpacing: 1,
  },
  title: {
    fontSize: 26,
    textAlign: "center",
    marginBottom: 8,
    fontWeight: "700",
    color: "#1E293B",
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 40,
    color: "#64748B",
  },
  buttonContainer: {
    gap: 16,
  },
  btnPrimary: {
    backgroundColor: "#0A8A84",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#0A8A84",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },
  btnContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnIconWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 10,
    borderRadius: 12,
    marginRight: 14,
  },
  btnIconWrapperOutline: {
    backgroundColor: "#E0F7F6",
    padding: 10,
    borderRadius: 12,
    marginRight: 14,
  },
  btnTextContainer: {
    flex: 1,
  },
  btnText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
  btnSubtext: {
    color: "#D1F2F0",
    fontSize: 13,
    marginTop: 2,
  },
  btnOutline: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#E2E8F0",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  btnOutlineText: {
    color: "#0A8A84",
    fontSize: 17,
    fontWeight: "600",
  },
  btnOutlineSubtext: {
    color: "#64748B",
    fontSize: 13,
    marginTop: 2,
  },
  footer: {
    marginTop: 48,
    textAlign: "center",
    color: "#64748B",
    fontSize: 15,
  },
  link: {
    color: "#0A8A84",
    fontWeight: "700",
  },
});