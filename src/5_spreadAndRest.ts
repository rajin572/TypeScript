// spread
const myFriends: string[] = ["salauddin", "rokon", "sourov", "alif", "humayra"];
const newFriend: string[] = ["arpa", "noor", "nipu"];
myFriends.push(...newFriend);

const mentors1 = {
  typescript: "Mezba",
  redux: "Mir",
  dbms: "Mizan",
};

const mentors2 = {
  prisma: "Firoz",
  next: "Tanmoy",
  cloud: "Nahid",
};

const mentorList = {
  ...mentors1,
  ...mentors2,
};

// -----------------------------------------------------------------------------------------

// rest
const hiFriends = (...friends: string[]): string[] => {
  return friends.reverse();
};

const ami: string = "fff";
const tmi: string = "kff";
const jmi: string = "kkf";
const lmi: string = "kkk";

console.log(hiFriends(ami, tmi, lmi, jmi));
