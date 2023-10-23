import mongoose, { InferSchemaType, Schema } from "mongoose";

const JobSchema = new Schema(
  {
    position: { type: String, require: true },
    salary: { type: Number, require: true },
    city: { type: String, require: true },
    technologies: { type: String, require: true },
    company: { type: String, require: true },
    jobType: { type: String, require: true },
    jobRegime: { type: String, require: true },
    companySizeEmployees: { type: Number, require: true },
    levelExperience: { type: String, require: true },
    jobDescription: { type: String, require: true },
    jobWebsite: { type: String, require: true },
    url: { type: String, require: true },
  },
  { timestamps: true }
);

type IJob = InferSchemaType<typeof JobSchema>;

const Job = mongoose.model("Job", JobSchema);

export { Job, IJob };
