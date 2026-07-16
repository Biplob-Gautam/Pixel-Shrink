import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

import { useAuth } from "../hooks/useAuth";

export default function Register() {
  const navigate = useNavigate();

  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await registerUser(data);

      toast.success("Account created successfully!");

      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <MainLayout>
      <div className="mx-auto max-w-md">
        <Card>
          <h1 className="mb-8 text-center font-heading text-4xl font-bold">
            Create Account
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input
              label="Username"
              error={errors.username?.message}
              {...register("username", {
                required: "Username is required",
              })}
            />

            <Input
              label="Email"
              error={errors.email?.message}
              {...register("email", {
                required: "Email is required",
              })}
            />

            <Input
              type="password"
              label="Password"
              error={errors.password?.message}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Creating Account..." : "Register"}
            </Button>

            <p className="text-center text-sm text-slate-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-cyan-400 hover:text-emerald-400"
              >
                Login
              </Link>
            </p>
          </form>
        </Card>
      </div>
    </MainLayout>
  );
}
