import mongoose from "mongoose"

export const db = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`mongodb connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Connection error, ${error}`)
  }
}
