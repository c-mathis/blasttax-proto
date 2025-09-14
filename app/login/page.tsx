"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const demo = async () => {
    await fetch("/api/auth/mock", { method: "POST", body: JSON.stringify({ mode: "demo" }) });
    router.push("/dashboard");
  };

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/auth/mock", { method: "POST", body: JSON.stringify({ email }) });
    router.push("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto card">
      <h1 className="text-2xl font-semibold mb-4">Welcome</h1>
      <form onSubmit={login} className="space-y-3">
        <div>
          <div className="label">Email</div>
          <input className="input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@example.com" />
        </div>
        <div>
          <div className="label">Password</div>
          <input className="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="••••••••" />
        </div>
        <button className="btn brand w-full" type="submit">Log in</button>
      </form>
      <div className="mt-4">
        <button className="btn w-full" onClick={demo}>Explore Demo Mode</button>
      </div>
    </div>
  );
}
