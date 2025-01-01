"use client";

import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { Eye, EyeOff } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setloading] = useState(false);
  const [showError, setshowError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const LOGIN_URL = `${import.meta.env.VITE_API_URL}/api/admin/login`;
      const response = await axios.post(LOGIN_URL, { password, email });
      localStorage.clear();
      localStorage.setItem("admin_token", response?.data?.token);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setshowError(err?.response?.data?.message);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="w-full h-screen p-2 flex justify-center items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">
            New-Buzz Admin Login
          </CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>
              </div>
            </div>
            <Button type="submit" className="w-full">
              {loading ? "Logging in..." : "Login"}
            </Button>
            {showError && <p className="text-sm text-red-500">{showError}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
