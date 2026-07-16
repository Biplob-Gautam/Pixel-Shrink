import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Login() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-md">
        <Card>
          <h1 className="mb-8 text-center font-heading text-4xl font-bold">
            Welcome Back
          </h1>

          <div className="space-y-5">
            <Input label="Email" placeholder="john@example.com" />

            <Input label="Password" type="password" />

            <Button className="w-full">Login</Button>
            <p className="mt-6 text-center text-sm text-text-secondary">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-primary hover:text-secondary transition"
              >
                Create one
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
