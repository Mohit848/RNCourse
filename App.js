import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
	Button,
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";

export default function App() {
	const [goalInput, setGoalInput] = useState("");
	const [goals, setGoal] = useState([]);
	const handleAddGoal = () => {
		setGoal((prev) => {
			return [...prev, { text: goalInput, id: Math.random().toString() }];
		});
	};
	const handleInput = (text) => {
		setGoalInput(text);
	};
	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					value={goalInput}
					onChangeText={handleInput}
					style={styles.textInput}
					placeholder="Enter your goals to add..."
				/>
				<Button onPress={handleAddGoal} title="Add Goal" />
			</View>
			<Text>Your goals - </Text>
			<View style={styles.goalsContainer}>
				<FlatList
					data={goals}
					renderItem={(itemData) => {
						return (
							<View style={styles.goalList}>
								<Text style={styles.goalText}>
									{itemData.item.text}
								</Text>
							</View>
						);
					}}
					keyExtractor={(item, index) => {
						return item.id;
					}}
				/>
			</View>

			{/* <View style={styles.goalsContainer}>
				<ScrollView>
					{goals.map((goal, i) => {
						return (
							<View key={i} style={styles.goalList}>
								<Text style={styles.goalText}>{goal}</Text>
							</View>
						);
					})}
				</ScrollView>
			</View> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 60,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flex: 1,
		paddingTop: 50,
		marginBottom: 32,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	textInput: {
		width: "70%",
		borderWidth: 1,
		borderColor: "#ccc",
		padding: 8,
		marginRight: 8,
	},
	goalsContainer: {
		flex: 4,
		marginTop: 8,
	},
	goalList: {
		backgroundColor: "#c6ff",
		padding: 12,
		borderRadius: 4,
		marginTop: 8,
	},
	goalText: {
		color: "#fff",
		fontSize: 14,
		fontWeight: "bold",
	},
});
