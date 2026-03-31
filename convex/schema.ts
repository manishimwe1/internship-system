import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        clerkId: v.string(),
        image: v.string(),
        role: v.union(v.literal('admin'), v.literal('student'), v.literal('teach'),),
        approved: v.boolean()
    }).index("by_clerkId", ["clerkId"]),

    students: defineTable({
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
    }).index("by_userId", ["userId"]),



});

