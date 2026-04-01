// convex/users.ts

import { mutation } from "./_generated/server";

export const store = mutation({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) {
            throw new Error("Called storeUser without authentication present");
        }

        const user = await ctx.db
            .query("users")
            .withIndex("by_clerkId", (q) =>
                q.eq("clerkId", identity.tokenIdentifier),
            )
            .unique();

        if (user !== null) {
            if (user.name !== identity.name) {
                await ctx.db.patch(user._id, { name: identity.name });
            }
            return user._id;
        }

        console.log({ identity });


        return await ctx.db.insert("users", {
            name: identity.name ?? "Anonymous",
            clerkId: identity.tokenIdentifier,
            approved: false,
            image: identity.profileUrl ?? '',
            role: 'user'
        });
    },
});