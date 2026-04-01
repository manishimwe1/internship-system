"use client";

import { useStoreUserEffect } from "@/hooks/useStore";

interface UserSyncProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function UserSync({ children, fallback = null }: UserSyncProps) {
  const { isLoading } = useStoreUserEffect();

  if (isLoading) return <>{fallback}</>;

  return <>{children}</>;
}
