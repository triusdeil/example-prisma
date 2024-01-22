import { PrismaConn } from "./services/serviceConnection.js";

async function main() {

    //create user relations
    // const newUser = await PrismaConn.user.create({
    //     data: {
    //         "name" : "Joe",
    //         "email" : "joe@gmail.com"
    //     }
    // })

    // const newPost = await PrismaConn.post.create({
    //     data: {
    //         title: "Mi primer post",
    //         content: "test",
    //         author: {
    //             connect: {
    //                 id: newUser.id
    //             }
    //         }
    //     }
    // })
    // console.log(newPost);

    // const searchUsers = await PrismaConn.user.findMany({
    //     include: {
    //         posts: true
    //     }
    // })
    // searchUsers.forEach(user => {
    //     console.log(user.email)
    // });
    // console.log(searchUsers)
}

main()