import mongoose, {Schema} from "mongoose";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String, //cloudinary url
            required: true
        },
        thumbnail: {
            type: String, //cloudinary url
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        duration: {
            type: Number, 
            required: true
        },
        views: {
            type: Number,
            default: 0 //default value is 0     
        },
        isPublished: {
            type: Boolean, //true or false 
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId, //refers to the User model
            ref: "User" 
        }

    }, 
    {
        timestamps: true
    }
)


export const Video = mongoose.model("Video", videoSchema)