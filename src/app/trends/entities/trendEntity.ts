import mongoose, { Schema, InferSchemaType } from "mongoose";

const TrendSchema = new Schema({
  position: { type: String, require: true },
  city: { type: String, require: true },
  technologies: { type: String, require: true },
  count: { type: Number, require: true, default: 0 },
});

type ITrendSchema = InferSchemaType<typeof TrendSchema>;

const Trend = mongoose.model("Trend", TrendSchema)

export{ Trend, ITrendSchema}