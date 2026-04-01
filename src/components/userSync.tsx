"use client";

import { useStoreUserEffect } from "@/hooks/useStore";

interface UserSyncProps {
  children: React.ReactNode;
  /**
   * Rendered while Convex auth is resolving or the user record is being
   * written for the first time.  Defaults to null (no flash of content).
   */
  fallback?: React.ReactNode;
}

/**
 * Drop this inside <ConvexClientProvider> so it has access to Convex context.
 * It runs useStoreUserEffect, waits until the user document exists in the DB,
 * then renders children.  Unauthenticated visitors always see children
 * immediately (the hook only blocks when a sign-in is in progress).
 */
export default function UserSync({ children, fallback = null }: UserSyncProps) {
  const { isLoading } = useStoreUserEffect();

  if (isLoading) return <>{fallback}</>;

  return <>{children}</>;
}
