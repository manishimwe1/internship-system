// src/useStoreUserEffect.ts
import { useConvexAuth } from "convex/react";
import { useEffect, useState } from "react";
import { useMutation } from "convex/react";
import { Id } from "../../convex/_generated/dataModel";
import { useUser } from "@clerk/nextjs";
import { api } from "../../convex/_generated/api";
import { useRouter } from "next/navigation";

export function useStoreUserEffect() {
    const { isLoading, isAuthenticated } = useConvexAuth();
    const { user } = useUser();
    const [userId, setUserId] = useState<Id<"users"> | null>(null);
    const storeUser = useMutation(api.users.store);
    const router = useRouter()

    useEffect(() => {
        if (!isAuthenticated) return router.push('/sign-in')
        async function createUser() {
            const id = await storeUser();
            setUserId(id);
        }
        createUser();
        return () => setUserId(null);
    }, [isAuthenticated, storeUser, user?.id]);

    return {
        isLoading: isLoading || (isAuthenticated && userId === null),
        isAuthenticated: isAuthenticated && userId !== null,
    };
}

