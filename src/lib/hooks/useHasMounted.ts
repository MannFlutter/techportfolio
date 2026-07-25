"use client";

import { useEffect, useState } from "react";

/** True after client mount — use to avoid SSR opacity:0 flash from motion `initial`. */
export function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
