import timeSlots from "./timeSlots";

export default (value?: any) => {
  return {
    moodMessage: generateMoodMessage(),
    timeSlotsMessage: generateTimeSlotsMessage(),
    hobbiesMessage: generateHobbiesMessage(),
    numberScaleMessage: generateNumberScaleMessage(value),
  };
};

const generateTimeSlotsMessage = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return [
    {
      type: "section",
      text: {
        type: "plain_text",
        text: "When are you free this week for a walk?",
        emoji: true,
      },
    },
    {
      type: "actions",
      elements: [
        {
          type: "static_select",
          placeholder: {
            type: "plain_text",
            text: "Start time",
            emoji: true,
          },
          options: timeSlots.map((item) => ({
            text: {
              type: "plain_text",
              text: item,
              emoji: true,
            },
            value: item,
          })),
          action_id: "startWalkTime",
        },
        {
          type: "static_select",
          placeholder: {
            type: "plain_text",
            text: "End time",
            emoji: true,
          },
          options: timeSlots.map((item) => ({
            text: {
              type: "plain_text",
              text: item,
              emoji: true,
            },
            value: item,
          })),
          action_id: "endWalkTime",
        },
        {
          type: "static_select",
          placeholder: {
            type: "plain_text",
            text: "Day",
            emoji: true,
          },
          options: days.map((item) => ({
            text: {
              type: "plain_text",
              text: item,
              emoji: true,
            },
            value: item,
          })),
          action_id: "day",
        },
      ],
    },
  ];
};

const generateMoodMessage = () => {
  const moodOptions = [
    {
      text: {
        type: "plain_text",
        text: "Doing well",
        emoji: true,
      },
      value: "doingWell",
    },
    {
      text: {
        type: "plain_text",
        text: "Neutral",
        emoji: true,
      },
      value: "neutral",
    },
    {
      text: {
        type: "plain_text",
        text: "Feeling Lucky",
        emoji: true,
      },
      value: "feelingLucky",
    },
  ];

  return [
    {
      type: "section",
      text: {
        type: "plain_text",
        text: "Welcome. How are you doing?",
        emoji: true,
      },
    },
    {
      type: "actions",
      elements: [
        {
          type: "static_select",
          placeholder: {
            type: "plain_text",
            text: "Select an option",
            emoji: true,
          },
          options: moodOptions,
          action_id: "mood",
        },
      ],
    },
  ];
};

const generateHobbiesMessage = () => {
  return [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "What are your favorite hobbies",
      },
      accessory: {
        type: "checkboxes",
        options: [
          {
            text: {
              type: "mrkdwn",
              text: "Football",
            },
            value: "football",
          },
          {
            text: {
              type: "mrkdwn",
              text: "Music",
            },
            value: "music",
          },
          {
            text: {
              type: "mrkdwn",
              text: "Sleep",
            },
            value: "sleep",
          },
          {
            text: {
              type: "mrkdwn",
              text: "Movies",
            },
            value: "movies",
          },
          {
            text: {
              type: "mrkdwn",
              text: "Basketball",
            },
            value: "basketball",
          },
        ],
        action_id: "hobbies",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "After selecting hobbies click done",
      },
      accessory: {
        type: "button",
        text: {
          type: "plain_text",
          text: "Done",
          emoji: true,
        },
        value: "click_me_123",
        action_id: "handleHobbies",
      },
    },
  ];
};

const generateNumberScaleMessage = (trigger_id: string) => {
  return {
    trigger_id,
    view: {
      type: "modal",
      callback_id: "modal-identifier",
      notify_on_close: true,
      title: {
        type: "plain_text",
        text: "Just a modal",
      },
      submit: {
        type: "plain_text",
        text: "Submit",
      },
      blocks: [
        {
          type: "section",
          block_id: "question",
          text: {
            type: "mrkdwn",
            text: "What are the first 3 digits on the number scale?",
          },
        },
        {
          type: "input",
          block_id: "answerInput",
          element: {
            type: "plain_text_input",
            action_id: "answer",
            placeholder: {
              type: "plain_text",
              text: "Your answer here",
            },
          },
          label: {
            type: "plain_text",
            text: "Answer",
          },
        },
      ],
    },
  };
};
