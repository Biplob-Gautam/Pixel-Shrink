import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

export default function Register() {
  return (
    <MainLayout>
      <div className="mx-auto max-w-md">
        <Card>
          <h1 className="mb-8 text-center font-heading text-4xl font-bold">
            Create Account
          </h1>

          <div className="space-y-5">
            <Input label="Username" />

            <Input label="Email" />

            <Input type="password" label="Password" />

            <Button className="w-full">Register</Button>
            <p className="mt-6 text-center text-sm text-text-secondary">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-primary hover:text-secondary transition"
              >
                Login
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
