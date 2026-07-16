import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await login(data);

      toast.success("Welcome back!");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Unable to login");
    }
  };

  return (
    <MainLayout>
      <div className="mx-auto max-w-md">
        <Card>
          <h1 className="mb-8 text-center font-heading text-4xl font-bold">
            Welcome Back
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input
              label="Email"
              placeholder="john@example.com"
              error={errors.email?.message}
              {...register("email", {
                required: "Email is required",
              })}
            />

            <Input
              label="Password"
              type="password"
              error={errors.password?.message}
              {...register("password", {
                required: "Password is required",
              })}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>

            <p className="text-center text-sm text-slate-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-cyan-400 hover:text-emerald-400"
              >
                Create one
              </Link>
            </p>
          </form>
        </Card>
      </div>
    </MainLayout>
  );
}
