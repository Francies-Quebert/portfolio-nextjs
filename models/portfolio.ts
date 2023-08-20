import mongoose, { Schema, model, models } from "mongoose";

const PortfolioSchema = new Schema({
    title: {
        type: String,
        require: [true, 'Title is required.'],
        unique: true
    },
    description: {
        type: String,
        require: [true, 'Description is required.']
    },
    tags: {
        type: [String],
        required: [true, 'Tag is required.'],
        validate: {
            validator: (tags: string[]) => tags.length > 0,
            message: 'At least one tag is required.'
        }
    },
    website: {
        type: String,
        validate: {
            validator: (v: string) => {
                return v === '' || /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.\w{2,6}([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/i.test(v);
            },
            message: (props: { value: string }) => `${props.value} is not a valid URL.`
        }
    },
    images: [{
        name: {
            type: String,
            required: [true, 'Image name is required.']
        },
        data: {
            type: Buffer,
            required: [true, 'Image data is required.']
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
const Portfolio = models.Portfolio || model('Portfolio', PortfolioSchema)

export default Portfolio;