import { mutation } from "./_generated/server";
import { v } from "convex/values";

// Create a new task with the given text
export const createNewStudent = mutation({
    args: {
        name: v.string(),
        userId: v.id('users'),
        image: v.string(),
        role: v.union(v.literal('admin'), v.literal('student'), v.literal('teach'),),
        approved: v.boolean(),
        github: v.string(),
        marks: v.number(),
        project: v.array(v.object({
            name: v.string(),
            link: v.string(),
            github: v.string()
        })),
    },
    handler: async (ctx, args) => {
        const newStudentId = await ctx.db.insert("students", {
            name: args.name,
            userId: args.userId,
            approved: args.approved,
            github: args.github,
            image: args.image,
            marks: args.marks,
            project: args.project,
            role: args.role
        });
        return newStudentId;
    },
});