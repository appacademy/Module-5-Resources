const patch = {
    name: "Patch",
    username: "Patchenator",
    profile: "https://res.cloudinary.com/app-academy4/image/upload/v1647912257/Patchstagram/IMG_3074_ubqe1e.jpg"
};

const blue = {
    name: "Blue",
    username: "Blueberry44",
    profile: "https://res.cloudinary.com/app-academy4/image/upload/v1647912128/Patchstagram/66346842095__0566A55A-DF10-4E86-A59A-F5694436FA4E_wmoi1w.jpg"
}

const mimi = {
    name: "Mimi",
    profile: "https://res.cloudinary.com/app-academy4/image/upload/v1684861055/Patchstagram/Mimi2_nzcfiy.png"
}


const someData = [
    {
        id: 1,
        title: "Napping Outside is always fun...",
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1647912033/Patchstagram/IMG_3394_fktg48.jpg",
        author: patch,
        date: new Date(2023, 9, 23),
        comments: ["Love the pic!", "Enjoy your nap!"],
        likes: 4,
    },
    {
        id: 2,
        title: "Napping inside is pretty awesome too...",
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1647912403/Patchstagram/64865942444__2B7B1A74-ECAF-4798-BEAB-D4890B7164C4_hnmowy.jpg",
        author: blue,       
        date: new Date(2023, 10, 12),
        comments: ["That looks so cozy!", "I want a pillow"],
        likes: 2,
    },
    {
        id: 3,
        title: "I like my fish",
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1647912006/Patchstagram/IMG_3437_u2frrk.jpg",
        author: blue,
        date: new Date(2023, 11, 23),
        comments: ["Thats a big fish!", "I want a turn...", "Here fishy fishy!"],
        likes: 8,
      },
      {
        id: 4,
        title: "Now THIS is a party!",
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1647912056/Patchstagram/IMG_3389_i6czzx.jpg",
        author: mimi,
        date: new Date(2024, 0, 6),
        comments: ["Why wasn't I invited? 😩", "Room for more?"],
        likes: 3,
      },
      {
        id: 5,
        title: "This punk stole my tent! ⛺️",
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1647912094/Patchstagram/IMG_3211_sy5wcy.jpg",
        author: blue,
        date: new Date(2024, 0, 17),
        comments: ["How dare he!!!", "Awww, its a cat in a tent!"],
        likes: 1,
      },
      {
        id: 6,
        title: "Look who I saw outside today...",
        image: "https://res.cloudinary.com/app-academy4/image/upload/v1684860951/Patchstagram/Mimi1_lxltmk.png",
        author: patch,
        date: new Date(2024, 1, 2),
        comments: ["No way!!!", "Its MIMI!!!"],
        likes: 2,
      },
]

export default someData;
