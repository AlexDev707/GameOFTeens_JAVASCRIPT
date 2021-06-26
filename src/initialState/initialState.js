import { v4 as uuidv4 } from 'uuid';

export const initialState = {
  questionnaires: {
    html: [
      {
        title: "Don'nt I",
        variants: [
          {
            id: uuidv4(),
            text: "I",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "I2",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "I3",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "I4",
            isChecked: false,
          },
        ],
      },
      {
        title: "Don'nt I 2",
        variants: [
          {
            id: uuidv4(),
            text: "I",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "I2",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "I3",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "I4",
            isChecked: false,
          },
        ],
      },
      {
        title: "Don'nt I 3",
        variants: [
          {
            id: uuidv4(),
            text: "I",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "I2",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "I3",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "I4",
            isChecked: false,
          },
        ],
      },
    ],
    css: [
      {
        id: uuidv4(),
        title: "Don'nt I",
        variants: [
          {
            id: uuidv4(),
            text: "I",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "I2",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "I3",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "I4",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Don'nt I 2",
        variants: [
          {
            id: uuidv4(),
            text: "I",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "I2",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "I3",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "I4",
            isChecked: false,
          },
        ],
      },
      {
        id: uuidv4(),
        title: "Don'nt I 3",
        variants: [
          {
            id: uuidv4(),
            text: "I",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "I2",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "I3",
            isChecked: false,
          },
          {
            id: uuidv4(),
            text: "I4",
            isChecked: false,
          },
        ],
      },
    ],
  },
  currentCategory: "",
  currentQuestionIndex: 0,
  isFinalPage: false
};
