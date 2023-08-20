import mongoose from "mongoose";

let isConnected = false
export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('mongoDB is already connected');
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI!, {
            dbName: 'portfolio',
        })

        isConnected = true
        console.log('mongoDB is connected');
    } catch (error) {
        console.log('mongoDB', error);
    }

}