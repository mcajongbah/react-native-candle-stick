import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const filters = ["1D", "1W", "1M", "6M", "1Y", "3Y", "5Y", "ALL"];

type Props = {
  onFilterChange: (filter: string) => void;
};

const TimeFilterButtons = ({ onFilterChange }: Props) => {
  const [activeFilter, setActiveFilter] = useState("1Y");

  const handlePress = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };
  return (
    <View style={styles.container}>
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter}
          style={[
            styles.button,
            activeFilter === filter && styles.activeButton,
          ]}
          onPress={() => handlePress(filter)}
        >
          <Text
            style={[styles.text, activeFilter === filter && styles.activeText]}
          >
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: Dimensions.get("window").width,
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    paddingHorizontal: 2,
    marginHorizontal: 4,
    borderRadius: 4,
    backgroundColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  activeButton: {
    backgroundColor: "#007AFF",
  },
  text: {
    fontSize: 16,
    color: "#007AFF",
  },
  activeText: {
    color: "#ffffff",
  },
});

export default TimeFilterButtons;
