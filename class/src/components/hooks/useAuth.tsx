import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useAuth() {
  const router = useRouter();
  const [isMyLoading, setIsMyLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인한 사람만 입장가능합니다!! 로그인을 먼저해주세요!!");
      router.push("/23-04-login");
    } else {
      setIsMyLoading(false);
    }
  }, []);
  return {
    isLoading: isMyLoading,
  };
}
