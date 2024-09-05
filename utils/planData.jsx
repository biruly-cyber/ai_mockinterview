export default [
  {
    id: 1,
    name: "Free",
    cost: 0,
    offering: [
      {
        value: "Create 3 Mock Interviews",
        available: true, // Show check icon
      },
      {
        value: "Unlimited retake Interviews",
        available: true, // Show check icon
      },
      {
        value: "Practice Questions",
        available: false, // Show close icon
      },
      {
        value: "Get Blurock Ionic support",
        available: false, // Show close icon
      },
      {
        value: "Email support",
        available: false, // Show close icon
      },
    ],
  },
  {
    id: 2,
    name: "Monthly ",
    cost: 100, // Monthly fee
    offering: [
      {
        value: "Create Unlimited Mock Interviews",
        available: true, // Show check icon
      },
      {
        value: "Unlimited retake Interviews",
        available: true, // Show check icon
      },
      {
        value: "Practice Questions",
        available: true, // Show check icon
      },
      {
        value: "Get Blurock Ionic support",
        available: true, // Show check icon
      },
      {
        value: "Email support",
        available: true, // Show check icon
      },
    ],
  },
];
