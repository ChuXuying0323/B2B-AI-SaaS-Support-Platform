import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getAllUsers = query({
    args: {},
    handler: async (ctx) => {
        return await ctx.db.query("users").collect();
    }
});
export const addUser = mutation({
    args: {
        name: v.string(),
    },
    handler: async (ctx, args) => {
        const auth = await ctx.auth.getUserIdentity();
        if (!auth) {
            throw new Error("Unauthorized");
        }

        const userID = await ctx.db.insert("users", {
            name: args.name,
        });
        return userID;
    }

});