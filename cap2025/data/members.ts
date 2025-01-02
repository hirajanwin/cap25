export interface Member {
  id: string;
  name: string;
  task: {
    type: 'achievement' | 'hotlist';
    title: string;
    timeAgo: string;
    description: string[];
  };
  chat: {
    messages: {
      id: string;
      role: 'user' | 'assistant';
      content: string;
      timestamp: string;
    }[];
  };
  primaryData: {
    carePlan: {
      title: string;
      value: string;
      change: number;
    }[];
    medicationChanges: {
      name: string;
      value: string;
      change: number;
    }[];
  };
  secondaryData: {
    preTwinMedications: {
      name: string;
      value: string;
    }[];
    currentMedications: {
      name: string;
      value: string;
    }[];
    medicationList: {
      name: string;
      value: number;
    }[];
  };
}

export const membersData: Member[] = [
  {
    id: "#22222222",
    name: "John Doe",
    task: {
      type: "achievement",
      title: "Achievement",
      timeAgo: "2 hrs ago",
      description: [
        "7 days 80% GFY",
        "8 days of 90% food logging"
      ]
    },
    chat: {
      messages: [
        {
          id: "1",
          role: "assistant",
          content: "Hi John, great progress on your food logging! Keep it up!",
          timestamp: "2025-01-02T10:00:00"
        },
        {
          id: "2",
          role: "user",
          content: "Thanks! I've been trying to be more consistent.",
          timestamp: "2025-01-02T10:05:00"
        }
      ]
    },
    primaryData: {
      carePlan: [
        { title: "Weekly Average GFY", value: "80%", change: 5 },
        { title: "Food Logging", value: "90%", change: 8 }
      ],
      medicationChanges: [
        { name: "Metformin", value: "1000mg", change: 20 },
        { name: "Glipizide", value: "5mg", change: -10 }
      ]
    },
    secondaryData: {
      preTwinMedications: [
        { name: "Metformin", value: "800mg" },
        { name: "Glipizide", value: "10mg" }
      ],
      currentMedications: [
        { name: "Metformin", value: "1000mg" },
        { name: "Glipizide", value: "5mg" }
      ],
      medicationList: [
        { name: "Pre Twin Medications", value: 4 },
        { name: "Current Medications", value: 2 },
        { name: "Medication changes", value: 1 },
        { name: "Care Plan Summary", value: 1 }
      ]
    }
  },
  {
    id: "#33333333",
    name: "Jane Smith",
    task: {
      type: "hotlist",
      title: "Hotlist",
      timeAgo: "3 hrs ago",
      description: [
        "No sensor data for 5 days",
        "CGM not replaced"
      ]
    },
    chat: {
      messages: [
        {
          id: "1",
          role: "assistant",
          content: "Hi Jane, I noticed your CGM hasn't been sending data. Can I help?",
          timestamp: "2025-01-02T09:00:00"
        },
        {
          id: "2",
          role: "user",
          content: "Yes, I'm having trouble replacing it. Could you guide me?",
          timestamp: "2025-01-02T09:05:00"
        }
      ]
    },
    primaryData: {
      carePlan: [
        { title: "Sensor Usage", value: "20%", change: -60 },
        { title: "Data Availability", value: "15%", change: -70 }
      ],
      medicationChanges: [
        { name: "Insulin", value: "20 units", change: 0 },
        { name: "Metformin", value: "850mg", change: 0 }
      ]
    },
    secondaryData: {
      preTwinMedications: [
        { name: "Insulin", value: "20 units" },
        { name: "Metformin", value: "850mg" }
      ],
      currentMedications: [
        { name: "Insulin", value: "20 units" },
        { name: "Metformin", value: "850mg" }
      ],
      medicationList: [
        { name: "Pre Twin Medications", value: 3 },
        { name: "Current Medications", value: 2 },
        { name: "Medication changes", value: 0 },
        { name: "Care Plan Summary", value: 1 }
      ]
    }
  }
];

// Add 8 more members with unique IDs
for (let i = 4; i <= 11; i++) {
  const isAchievement = i % 2 === 0;
  membersData.push({
    id: `#${(44444444 + i).toString()}`,
    name: isAchievement ? `John Member ${i}` : `Jane Member ${i}`,
    task: {
      type: isAchievement ? "achievement" : "hotlist",
      title: isAchievement ? "Achievement" : "Hotlist",
      timeAgo: `${i} hrs ago`,
      description: isAchievement 
        ? ["5 days 75% GFY", "6 days of 85% food logging"]
        : ["Missed medication dose", "Blood sugar readings irregular"]
    },
    chat: {
      messages: [
        {
          id: "1",
          role: "assistant",
          content: isAchievement 
            ? "Great progress on your health goals!"
            : "I noticed some concerns with your readings.",
          timestamp: `2025-01-02T${10-i}:00:00`
        },
        {
          id: "2",
          role: "user",
          content: isAchievement
            ? "Thank you! I'm working hard on it."
            : "Yes, I've been having some difficulties.",
          timestamp: `2025-01-02T${10-i}:05:00`
        }
      ]
    },
    primaryData: {
      carePlan: [
        { 
          title: isAchievement ? "Weekly Average GFY" : "Medication Adherence",
          value: isAchievement ? "75%" : "60%",
          change: isAchievement ? 3 : -15
        },
        {
          title: isAchievement ? "Food Logging" : "Blood Sugar Control",
          value: isAchievement ? "85%" : "70%",
          change: isAchievement ? 5 : -10
        }
      ],
      medicationChanges: [
        {
          name: "Metformin",
          value: `${800 + (i * 50)}mg`,
          change: isAchievement ? 10 : -5
        },
        {
          name: isAchievement ? "Glipizide" : "Insulin",
          value: isAchievement ? "5mg" : "15 units",
          change: isAchievement ? 5 : -10
        }
      ]
    },
    secondaryData: {
      preTwinMedications: [
        { name: "Metformin", value: `${800 + (i * 25)}mg` },
        { name: isAchievement ? "Glipizide" : "Insulin", value: isAchievement ? "3mg" : "20 units" }
      ],
      currentMedications: [
        { name: "Metformin", value: `${800 + (i * 50)}mg` },
        { name: isAchievement ? "Glipizide" : "Insulin", value: isAchievement ? "5mg" : "15 units" }
      ],
      medicationList: [
        { name: "Pre Twin Medications", value: 3 + (i % 2) },
        { name: "Current Medications", value: 2 },
        { name: "Medication changes", value: 1 },
        { name: "Care Plan Summary", value: 1 }
      ]
    }
  });
}
