export const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

const date = new Date();
export const currentDate =
  monthNames[date.getMonth()] +
  " " +
  date.getDate() +
  ", " +
  date.getFullYear();