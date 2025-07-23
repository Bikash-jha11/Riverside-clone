import mongoose, { Schema, Document, Model,Types } from "mongoose";

interface Meeting {
  creator_id: Types.ObjectId;
  title: string;
  invitees: [];
  date: string;
}

const MeetingSchema = new Schema({
  creator_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  invitees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  date: {
    type: Date,
    required: true,
  },
});

const Meeting: Model<Meeting> = mongoose.model<Meeting>(
  "Meeting",
  MeetingSchema
);
 export default Meeting;