export const user = {
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsTQFb0kp8I5e3JYPbVszsdPRsHBp3MM0snd7GltdQQ&s",
  name: "Truc",
  lastName: "Chu-Spear",
  email: "trucchu@yahoo.com",
  defaultListBackground: "https://i.imgur.com/RQso6Xh.png",
};

export const defaultTasks = [
  {
    title: "My Day",
    icon: "sun",
    tasks: [
      {title: "Ketchup", completed: false, important: false},
      {title: "Encona", completed: false, important: false},
      {title: "Peas", completed: false, important: false},
      {title: "Garlic", completed: false, important: false},
      {title: "Peanut butter", completed: false, important: false},
      {title: "Jam", completed: false, important: false},
      {title: "Maggi sauce bags", completed: false, important: false},
      {title: "Instant noodles", completed: false, important: false},
      {title: "Lanzhou noodles", completed: false, important: false},
    ],
    type: "default",
  },
  {
    title: "Important",
    icon: "star",
    tasks: [],
    type: "default",
  },
  {title: "Planned", icon: "calendar", tasks: [], type: "default"},
  {title: "Assigned to you", icon: "person", tasks: [], type: "default"},
  {title: "Tasks", icon: "home", tasks: [], type: "default"},
];

export const userTasks = [
  {title: "To do", tasks: [], type: "custom"},
  {
    title: "Groceries",
    tasks: [],
    type: "custom",
  },
  {title: "Movies to Watch", tasks: [], type: "custom"},
  {title: "Travel", tasks: [], type: "custom"},
  {title: "Private", tasks: [], type: "custom"},
];


